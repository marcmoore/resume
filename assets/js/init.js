var doughnutData = {
	"markSkill1" : [
		{
			value: 70,
			color:"#DC143C"
		},
		{
			value: 30,
			color: "#9b9b9b"
		}
	],
	"markSkill2" : [
		{
			value: 70,
			color:"#DC143C"
		},
		{
			value: 30,
			color: "#9b9b9b"
		}
	],
	"markSkill3" : [
		{
			value: 90,
			color:"#DC143C"
		},
		{
			value: 10,
			color: "#9b9b9b"
		}
	],
	"markSkill4" : [
		{
			value: 90,
			color:"#DC143C"
		},
		{
			value: 10,
			color: "#9b9b9b"
		}
	],
	"markSkill5" : [
		{
			value: 80,
			color:"#DC143C"
		},
		{
			value: 20,
			color: "#9b9b9b"
		}
	],
	"markSkill6" : [
		{
			value: 75,
			color:"#DC143C"
		},
		{
			value: 25,
			color: "#9b9b9b"
		}
	],
	"ashSkill1" : [
		{
			value: 85,
			color:"#DC143C"
		},
		{
			value: 15,
			color: "#9b9b9b"
		}
	],
	"ashSkill2" : [
		{
			value: 80,
			color:"#DC143C"
		},
		{
			value: 20,
			color: "#9b9b9b"
		}
	],
	"ashSkill3" : [
		{
			value: 80,
			color:"#DC143C"
		},
		{
			value: 20,
			color: "#9b9b9b"
		}
	],
	"ashSkill4" : [
		{
			value: 70,
			color:"#DC143C"
		},
		{
			value: 30,
			color: "#9b9b9b"
		}
	],
	"ashSkill5" : [
		{
			value: 50,
			color:"#DC143C"
		},
		{
			value: 50,
			color: "#9b9b9b"
		}
	]
};

var radarChartData = {
	labels: ["Communication", "Organization", "Creation", "Mutual", "Responsibility", "Language", "Confidence"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(254,54,51,0.2)",
			strokeColor: "rgba(254,54,51,1)",
			data: [90,81,72,93,84,76,96]
		},
		{
			label: "My First dataset",
			fillColor: "rgba(254,54,51,0)",
			strokeColor: "rgba(0,0,0,1)",
			data: [100,100,100,100,100,100,100]
		},
		{
			label: "My First dataset",
			fillColor: "rgba(254,54,51,1)",
			strokeColor: "rgba(0,0,0,1)",
			data: [0,0,0,0,0,0,0]
		},
	]
};

$(document).ready(function(){
	$('body').jpreLoader({
		autoClose: true,
		showPercentage: false
	}, function() {	//callback function
		$(".pre-loading").fadeOut(300);
	});
	
	var ctx = document.getElementById("chart-area").getContext("2d");
	var ctx1 = document.getElementById("chart-area1").getContext("2d");
	var ctx2 = document.getElementById("chart-area2").getContext("2d");
	var ctx3 = document.getElementById("chart-area3").getContext("2d");
	var ctx4 = document.getElementById("chart-area4").getContext("2d");
	var ctx5 = document.getElementById("chart-area5").getContext("2d");
	var ctx6 = document.getElementById("chart-area6").getContext("2d");
	var ctx7 = document.getElementById("chart-area7").getContext("2d");
	var ctx8 = document.getElementById("chart-area8").getContext("2d");
	var ctx9 = document.getElementById("chart-area9").getContext("2d");
	var ctx10 = document.getElementById("chart-area10").getContext("2d");
	//var ctxRadar = document.getElementById("chart-area-radar").getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(doughnutData.markSkill1, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	window.myDoughnut = new Chart(ctx1).Doughnut(doughnutData.markSkill2, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData.markSkill3, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData.markSkill4, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	window.myDoughnut = new Chart(ctx4).Doughnut(doughnutData.markSkill5, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	window.myDoughnut = new Chart(ctx5).Doughnut(doughnutData.markSkill6, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	window.myDoughnut = new Chart(ctx6).Doughnut(doughnutData.ashSkill1, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	window.myDoughnut = new Chart(ctx7).Doughnut(doughnutData.ashSkill2, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	window.myDoughnut = new Chart(ctx8).Doughnut(doughnutData.ashSkill3, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	window.myDoughnut = new Chart(ctx9).Doughnut(doughnutData.ashSkill4, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	window.myDoughnut = new Chart(ctx10).Doughnut(doughnutData.ashSkill5, {
		responsive : true, 
		percentageInnerCutout: 93, 
		animateRotate: true
	});
	// window.myRadar = new Chart(ctxRadar).Radar(radarChartData, {
	// 	responsive: true,
	// 	pointDot: false
	// });
	
	$(".big-box").on("mouseover", function () {
		$(".section-container").attr("class", "section-container");
		$(".section-container").addClass($(this).attr("name"));
	});
	
	var increment = 50;
	
	$(window).scroll(function() {
		console.log();
		if (window.scrollY > $(".third-section").offset().top) {
			$(".nav-bar").addClass("fix");
		} else {
			$(".nav-bar").removeClass("fix");
		}
		
		if ((window.scrollY + increment) > $(".third-section").offset().top && window.scrollY < $(".forth-section").offset().top) {
			$(".nav-bar .activited").removeClass("activited");
			$(".nav-bar .work").addClass("activited");
		}
		
		if ((window.scrollY + increment) > $(".forth-section").offset().top && window.scrollY < $(".fifth-section").offset().top) {
			$(".nav-bar .activited").removeClass("activited");
			$(".nav-bar .about-me").addClass("activited");
		}
		
		if ((window.scrollY + increment) > $(".fifth-section").offset().top) {
			$(".activited").removeClass("activited");
			$(".nav-bar .contact").addClass("activited");
		}

		if ($(".forth-section").offset().top < $(".nav-bar ul li.activited").offset().top) {
			$(".nav-bar .show").removeClass("show");
			$(".nav-bar ul li.activited span").addClass("show");
			$(".nav-bar ul li.activited").css("background", "#fff");
		} else {
			$(".nav-bar .show").removeClass("show");
			$(".nav-bar ul li.activited").css("background", "#282828");
		}
	});
	
	$(".nav-bar li, .category li").click(function(event){		
		event.preventDefault();
		console.log($(this).data("ar"));
		$("html, body").animate({scrollTop:$("." + $(this).data("ar")).offset().top}, 1000, 'easeInOutQuart');
	});
});