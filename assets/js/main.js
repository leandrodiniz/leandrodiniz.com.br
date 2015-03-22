$(document).ready(function() {

    function resizeWindow() {
        var windowHeight = $(window).height();
        $('.works-control').css('height', windowHeight);
    };

    resizeWindow();

    $(window).on('resize', function(){
        resizeWindow();
    });


    $('.site-footer').on('click', '.open-menu', function(e) {
        $('.main-menu').fadeIn().css('display','table');
        $('.main-menu li').removeClass('fadeOut').addClass('animated bounceIn');

        return false;
    });

    $('.close-main-menu').on('click', 'a', function(e) {
        $('.main-menu li').removeClass('bounceIn').addClass('animated fadeOut');
        $('.main-menu').fadeOut();

        return false;
    });


});
