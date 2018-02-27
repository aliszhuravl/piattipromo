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