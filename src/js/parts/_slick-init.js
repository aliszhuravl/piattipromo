$(document).ready(function() {
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    fade: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 640,
            settings: {
                infinite: true,
                dots: true,
                arrows: true
            }
        }
    ]
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: true,
    dots: true,
    focusOnSelect: true
});
    $('.item_slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true
    });

    var currentSlide = $('.slider-for').slick('slickCurrentSlide');

    $('.slider-for').on('afterChange', function(){
        console.log('piu');
        $('.slider_title').addClass('title_animate');
        setTimeout(function() {
            $('.sl_div').addClass('divider_animate');
        },500);
        setTimeout(function() {
            $('.slider_desc').addClass('desc_animate');
        },1000);
        setTimeout(function() {
            $('.bt_slide').addClass('bt_animate');
        },1000);
    });



    $('.slider-for').on('beforeChange', function(){
        $('.sl_div').removeClass('divider_animate');
        setTimeout(function() {
            $('.slider_title').removeClass('title_animate');
            $('.slider_desc').removeClass('desc_animate');
            $('.bt_slide').removeClass('bt_animate');
        },100);
    });

    $('.slider-for').init( function(){
        console.log('это успех');
        $('.slider_title').addClass('title_animate');
        setTimeout(function() {
            $('.sl_div').addClass('divider_animate');
        },500);
        setTimeout(function() {
            $('.slider_desc').addClass('desc_animate');
        },1000);
        setTimeout(function() {
            $('.bt_slide').addClass('bt_animate');
        },1000);
    });

});
