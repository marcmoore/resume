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
  	      "assets/css/*.css": "assets/css/*.less"
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

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  
  grunt.loadNpmTasks('grunt-githooks');

  // Default task(s).
  grunt.registerTask('default', ['githooks']);

};