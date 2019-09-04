$(document).ready(function(){

	// 调用窗口高度
	$(".scetion-first, .bg, #aboutme").css("height",$(window).height());
	$(window).resize(function () {
    	$(".scetion-first, .bg, #aboutme").css("height",$(window).height());
	});
})