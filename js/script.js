$(document).ready(function () {
    $(".top_btn").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".top_btn").fadeIn(1500);
            } else {
                $(".top_btn").fadeOut(1500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $(".top_btn").click(function () {
            $('body,html').animate({
                    scrollTop: 0
                },
                100);
            return false;
        });
    });
});