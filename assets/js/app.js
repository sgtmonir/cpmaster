( function( $ ) {
    var $htmlBody = $("html,body");
	$('#year').text(new Date().getFullYear());

	// Fancybox Init
	$(".js-fancybox").fancybox({});
	$(document).ready(function(){
        // Mobile Navigation
        if ($('#nav-menu-container').length) {
            var $mobile_nav = $('#nav-menu-container').clone().prop({
                id: 'mobile-nav'
            });
            $mobile_nav.find('> ul').attr({
                'class': '',
                'id': ''
            });
            $('body').append($mobile_nav);
            $('body').append('<div id="mobile-body-overly"></div>');

            $(document).on('click', '.menu-trigger', function(e) {
                $('body').toggleClass('mobile-nav-active');
                $('#mobile-body-overly').toggle();
            });


            $(document).click(function(e) {
                var container = $("#mobile-nav, .menu-trigger");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('.js-scroll-trigger').removeClass('mobile-nav-active');
                        $('#mobile-body-overly').fadeOut();
                    }
                }
            });
        } else if ($("#mobile-nav, .menu-trigger").length) {
            $("#mobile-nav, .menu-trigger").hide();
        }
    
        $('.menu-trigger').click(function(){
            $(this).toggleClass('open');
        });

        $("#mobile-body-overly").on("click", function(){
            $(".menu-trigger").removeClass("open");
        });

 
       
    });
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        $('html, body').animate({
            scrollTop: (target.offset().top - 0)
        }, 1000, "easeInOutExpo");
        return false;
        }
    }
    });

} )( jQuery );