module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  	less: {
  	  development: {
  	    options: {
  	      paths: ["css"]
  	    },
  	    files: {
  	      "assets/css/style.css": "assets/less/style.less"
  	    }
  	  }
  	},
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/init.min.js': ['assets/js/init.js']
        }
      }
    },
    githooks: {
      options: {
        "dest": "../.git/hooks"
      },
      all: {
        "pre-commit": "less:development"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-githooks');

  // Default task(s).
  grunt.registerTask('default', ['githooks']);

};