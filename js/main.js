$(document).ready(function(){
	var articalContent = '';

    // 定义container宽度方法
    function containerWidth() {
        if ($(window).width()>768 && $(window).width()<=1442) {
            $(".container").css("width",$(window).width()-272);
        } else if ($(window).width()<=768){
            $(".container").css("width","100%");
        }
    }
    containerWidth();
	// 窗口高度、宽度变化时
	$("#topsection, .artical").css("height",$(window).height());
	$(window).resize(function () {
    	$("#topsection, .artical").css("height",$(window).height());
        containerWidth();
	});

	// 锚点平滑过度
	$('.navbar-nav a, .btn-up, .btn-down').click(function(){
		$('body').removeClass('showartical');
        //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
        $('html,body').animate({scrollTop: ($($(this).attr('data-href')).offset().top -50 )},500);
        if ($('.navbar-toggle').hasClass('collapsed')==false) {
                $('.navbar-toggle').click();
            }
    });
    // logo点击行为
    $('.navbar-brand').click(function(){
    	if($('body').hasClass('showartical')){
    		$('body').removeClass('showartical');
            if ($('.navbar-toggle').hasClass('collapsed')==false) {
                $('.navbar-toggle').click();
            }
    	}
		else {
			//根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
        $('html,body').animate({scrollTop: ($($(this).attr('data-href')).offset().top -50 )},500);
        if ($('.navbar-toggle').hasClass('collapsed')==false) {
                $('.navbar-toggle').click();
            }
		}  
    });
    // 点击跳转
    // $(".btn-work, .btn-work-xs").click(function(){
    //     // 获取文章资源
    //     var atcNb = $(this).attr('mata-work');
    //     console.log(atcNb);
    //     $.ajax({
    //         url:'./atc/exp/p'+atcNb+'.txt',
    //         type:"post",
    //         dataType:'text',
    //         data:{},
    //         async:false,
    //         success:function(data){
    //             articalContent = data;          
    //         }
    //     });
    //     console.log(articalContent);
    //     $("#previewContent").html(marked(articalContent));
    //     // 展示文章
    //     $('body').addClass("showartical");
    // });
    // 滚动监听
    $(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度 
        // 控制置顶按钮显示
        if (scroH >= viewH) {
            $(".btn-up").removeClass("hidden");
        } else {
            $(".btn-up").addClass("hidden");
        }
        if (scroH >= 36) {
            $(".btn-down").addClass("hidden");
        } else {
            $(".btn-down").removeClass("hidden");
        }
    });
    //logos
    for (var i = 26; i >0; i--) {
        $(".cocom").after("<div class='logo-c col-md-2 col-xs-4'><img src='img/logos/logo"+i+".jpg'><img class='img-h' src='img/logos/logo"+i+"-h.jpg"+"'></div>");
    }
    // $(".logo-c").hover(function(){
    //     $(this).children(".img-h").css("opacity",1);
    //     },function(){
    //     $(this).children(".img-h").css("opacity",0.00001);
    // });

    
})