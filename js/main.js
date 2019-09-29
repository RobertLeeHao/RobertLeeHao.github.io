$(document).ready(function(){
	var articalContent = '';
	// 调用窗口高度
	$("#topsection, .bg, .artical").css("height",$(window).height());
	$(window).resize(function () {
    	$("#topsection, .bg, .artical").css("height",$(window).height());
	});
	// 锚点平滑过度
	$('.navbar-nav a').click(function(){
		$('body').removeClass('showartical');
        //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
        $('html,body').animate({scrollTop: ($($(this).attr('data-href')).offset().top -50 )},500);
    });
    // logo点击行为
    $('.navbar-brand').click(function(){
    	if($('body').hasClass('showartical')){
    		$('body').removeClass('showartical');
    	}
		else {
			//根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
        $('html,body').animate({scrollTop: ($($(this).attr('data-href')).offset().top -50 )},500);
		}  
    });
    // 点击跳转
    $("#work01").click(function(){
        $('body').addClass("showartical");
    });
    // 滚动监听
    $(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度 
    });
    //logos
    for (var i = 26; i >0; i--) {
        $(".cocom").after("<div class='logo-c col-md-2'><img src='img/logos/logo"+i+".jpg'><img class='img-h' src='img/logos/logo"+i+"-h.jpg"+"'></div>");
    }
    // $(".logo-c").hover(function(){
    //     $(this).children(".img-h").css("opacity",1);
    //     },function(){
    //     $(this).children(".img-h").css("opacity",0.00001);
    // });

    // markdown
  	$.ajax({
	    url:'./static/md/p1.txt',
	    type:"post",
	    dataType:'text',
	    data:{},
	    async:false,
	    success:function(data){
	        articalContent = data;	        
	    }
	});
  	console.log(articalContent);
  	$("#previewContent").html(marked(articalContent));
})