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