$(document).ready(function(){

	// 调用窗口高度
	$(".scetion-first, .bg, #aboutme").css("height",$(window).height());
	$(window).resize(function () {
    	$(".scetion-first, .bg, #aboutme").css("height",$(window).height());
	});
	// 锚点平滑过度
	$('a').click(function(){
        //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
        $('html,body').animate({scrollTop: ($($(this).attr('data-href')).offset().top -50 )},1000);
    });
})