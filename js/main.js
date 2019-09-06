$(document).ready(function(){

	// 调用窗口高度
	$(".scetion-first, .bg").css("height",$(window).height());
	$(window).resize(function () {
    	$(".scetion-first, .bg").css("height",$(window).height());
	});
	// 锚点平滑过度
	$('a').click(function(){
        //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
        $('html,body').animate({scrollTop: ($($(this).attr('data-href')).offset().top -50 )},500);
    });
    // 点击跳转
    $("#work01").click(function(){
        window.location.href="work.html";
    });
    // 滚动监听
    $(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度 
        // var contentH = $(document).height();  //内容高度
 
        if(scroH >=(viewH-50)){  //距离顶部大于100px时
 			console.log(scroH+"+");
 			$('.navbar .navbar-brand').removeClass('sr-only');
        }
		else {
			if ($('.navbar .navbar-brand').hasClass('sr-only') == false) {
				$('.navbar .navbar-brand').addClass('sr-only');
			}
		}
    });
})