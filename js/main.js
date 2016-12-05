var blind = blind || {};

blind.newsletter = function () {
    var obj = this;
    obj.form = $('.js-newsletter');
    obj.email = obj.form.find('.js-email');

    obj.init = function() {

        obj.form.on('submit', function(e){
            e.preventDefault();

            if(obj.email.val() != '') {
                obj.form.find('.js-form').addClass('is-hidden');
                obj.form.find('.js-message').removeClass('is-hidden');
            } else {
                obj.email.addClass('has-error');
            }
        });
    };

    obj.init();
}

blind.nav = function () {
    var obj = this;
    obj.nav = $('.js-nav');

    obj.init = function() {

        obj.nav.on('click', '.js-scroll', function(e){
            e.preventDefault();

            $(this).blur();

            obj.target = $(this).attr('href');
            obj.targetPosition = $(obj.target).position();
            $('html,body').animate({scrollTop: obj.targetPosition.top - obj.nav.outerHeight()});
        });

        $('.js-aboutUs').on('click',function(e){
            e.preventDefault();
            $('#about-us-link').click();
        });

    };

    obj.init();
}

blind.stickyHead = function () {
    var obj = this;
    obj.head = $('.js-header');
    obj.windowWidth = $(window).width();
    // obj.navItems = $('.js-nav').find('.js-scroll');


    obj.init = function() {

        // todo: add set timeout / request animation frame

        jQuery(window).scroll(function(){

            obj.currentScroll = $(this).scrollTop();

            if(obj.windowWidth >= 600 && obj.currentScroll > 100) {
                obj.head.addClass('is-stuck');
            } else {
                obj.head.removeClass('is-stuck');
            }

            // scrollspy

            // $.each(obj.navItems, function(k,v){
            //     obj.target = v.attr('href');
            //     obj.targetOffset = $(obj.target).offset();
            //     console.log(obj.target.reverse() + ' ima position ' + obj.targetOffset.top);

            //     if(obj.currentScroll >= obj.targetOffset.top - 100) {
            //         v.parent().siblings.removeClass('is-active');
            //         v.parent().addClass('is-active');
            //         break;
            //     }
            // });

        });

    };

    obj.init();
}

jQuery(document).ready(function($){

    $('html').removeClass('no-js');

    if($('.js-newsletter').length) {
        blind.newsletter();
    }

    if($(window).width() >= 600) {

        if($('.js-nav').length) {
            blind.nav();
        }

        if($('.js-header').length) {
            blind.stickyHead();
        }
    }

});
