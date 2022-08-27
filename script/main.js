$(document).ready(function(){
    $(".navi > li").mouseover(function(){
        $(this).find(".subMenu").stop().slideDown(300);s
    }).mouseout(function(){
        $(this).find(".subMenu").stop().slideUp(300);
    });

    $(".imgSlide a:gt(0)").hide();

    setInterval(function(){
        $(".imgSlide a:first-child").fadeOut()
        .next("a").fadeIn()
        .end().appendTo(".imgSlide");
    },3000);

    $(function(){
        $(".tabMenu >li > a").click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active");
        });
    });

    $(".notice li:first").click(function(){
        $("#modalWrap").addClass("active");
    });
    $(".btn").click(function(){
        $("#modalWrap").removeClass("active");
    });
}); 