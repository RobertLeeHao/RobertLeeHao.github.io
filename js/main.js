$(document).ready(function(){
	$(".scetion-first, .bg, #aboutme").css("height",$(window).height());
	$(window).resize(function () {
    	$(".scetion-first, .bg, #aboutme").css("height",$(window).height());
	});
})