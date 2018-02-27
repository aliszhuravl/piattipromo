(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function linkHighlight(linkClass) {

        /* highlight active menu item*/
        $(linkClass).each(function (index) {
            if (this.href.trim() == window.location)
                $(this).addClass('link_active');
        });
    }

    linkHighlight('.nav__link');

})(jQuery);
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '#link-to-block' );

})(jQuery);
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
(function($) {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable

        var acc_button = this.el.find('.accordion__btn');
        // Event
        if ( $('.page-container').hasClass('page-catalog')) {
            acc_button.mouseover({
                el: this.el,
                multiple: this.multiple
            }, this.dropdown);
        }
    };


    $('.accordion__btn').click(function(){
        $('.accordion__content').slideUp(500);
    });

    if ( $('.page-container').hasClass('page-item')) {
        $('.accordion__content').css('display', 'block');
        $('.catal__link').addClass('link_catalog');
    }

    if ( $('.page-container').hasClass('page-catalog')) {
        $('.accordion__content').css('display', 'block');
        $('.catal__link').addClass('link_catalog');
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideDown(250);
        $this.parent().toggleClass('accordion_opened');
    };

    var accordion = new Accordion($('.accordion'), false);
    var accordionCard = new Accordion($('.accordion-card'), false);
    var accordionSidebar = new Accordion($('.accordion-sidebar'), true);


})(jQuery);
var map1;
var map2;
var map3;

function initMap() {

    var mapStyles = [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 60.091378, lng: 30.368530},
            zoom: 13,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = map1.getCenter();
            google.maps.event.trigger(map1, 'resize');
            map1.setCenter(center1);
        });

        map1.setOptions({styles: mapStyles});
    }

    if (document.getElementById('map2')) {
        map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat: 59.963610, lng: 30.321756},
            zoom: 15,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center2 = map2.getCenter();
            google.maps.event.trigger(map2, 'resize');
            map2.setCenter(center2);
        });

        map2.setOptions({styles: mapStyles});
    }

    var geomarkDark = {
        url: '/img/mark-1.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkGold = {
        url: '/img/mark-2.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkPark = {
        url: '/img/mark-3.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkSubway = {
        url: '/img/mark-4.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkSubway2 = {
        url: '/img/mark-5.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkSchool = {
        url: '/img/mark-6.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkBaby = {
        url: '/img/mark-7.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkHome = {
        url: '/img/mark-8.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkPlus = {
        url: '/img/mark-9.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkShop = {
        url: '/img/mark-10.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkSw = {
        url: '/img/mark-11.png',
        size: new google.maps.Size(48, 66)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 60.100065, lng: 30.385561},
        map: map1,
        icon: geomarkGold
    });

    var markOffice2 = new google.maps.Marker({
        position: {lat: 60.091378, lng: 30.368530},
        map: map1,
        icon: geomarkDark
    });

    var markAviator = new google.maps.Marker({
        position: {lat: 60.094769, lng: 30.418632},
        map: map1,
        icon: geomarkPark
    });

    var markPark1 = new google.maps.Marker({
        position: {lat:  60.085693, lng: 30.398622},
        map: map1,
        icon: geomarkSubway
    });

    var markPark2 = new google.maps.Marker({
        position: {lat:  60.078474, lng: 30.309979},
        map: map1,
        icon: geomarkSubway2
    });

    var subway = new google.maps.Marker({
        position: {lat:  60.094050, lng: 30.339884},
        map: map1,
        icon: geomarkSubway
    });

    var subway2 = new google.maps.Marker({
        position: {lat:  60.096754, lng: 30.328474},
        map: map1,
        icon: geomarkSchool
    });

    var school1 = new google.maps.Marker({
        position: {lat:  60.086790,  lng: 30.338085},
        map: map1,
        icon: geomarkBaby
    });

    var school2 = new google.maps.Marker({
        position: {lat:  60.066549,  lng: 30.396699},
        map: map1,
        icon: geomarkHome
    });

    var school3 = new google.maps.Marker({
        position: {lat:  60.084233,  lng: 30.381930},
        map: map1,
        icon: geomarkPlus
    });

    var baby1 = new google.maps.Marker({
        position: {lat:  60.078585, lng: 30.401925},
        map: map1,
        icon: geomarkShop
    });

    var baby2 = new google.maps.Marker({
        position: {lat:  60.049938, lng: 30.441612},
        map: map1,
        icon: geomarkSw
    });

    var baby3 = new google.maps.Marker({
        position: {lat:  60.067092, lng: 30.333315},
        map: map1,
        icon: geomarkSw
    });

    var office = new google.maps.Marker({
        position: {lat:  59.963610, lng: 30.321756},
        map: map2,
        icon: geomarkSubway2,
        title: 'Офис продаж'
    });

}

initMap();
(function($) {
    var hamburger = $('.hamburger');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('.menu-mobile').addClass('menu-mobile_opened');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('.menu-mobile').removeClass('menu-mobile_opened');
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });

    $('.menu-mobile__close').on('click', function () {
        body.addClass('menu-mobile_closed');
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27 && (body.hasClass('menu-mobile_opened'))) { // escape key
            hamburgerClose()
        }
    });
})(jQuery);

$(document).ready(function() {
    $(".btn_show").click(function () {
        $(".popup_wrapper").fadeIn(500);
    });

    $(".closepop").click(function () {
        $(".popup_wrapper").fadeOut(500);
    });

});


$(document).ready(function() {
    $(".color").click(function () {
        $(".popup_color").fadeIn(500);
    });

    $(".closepop").click(function () {
        $(".popup_color").fadeOut(500);
    });

});