$(document).ready(function($){
	"use strict";


    $(".menu-off-bar").on("click", function () {
        $(".offcanves-area, .body-overly").addClass("active")
        return false
    });
     $(".menu-close").on("click", function () {
        $(".offcanves-area, .body-overly").removeClass("active")
        return false
    });
	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".staf-list").owlCarousel({
            items:4,
            nav:true,
            margin:30,
            loop:true,
            autoplay:false,
            dots:true,
            navText: [
                "<i class='fa fa-long-arrow-right'></i>",
                "<i class='fa fa-long-arrow-left'></i>"
            ],
        });

    //$(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    //progressbar
    $('.html').animate({width:'95%'},5000);     
    $('.css').animate({width:'95%'},5000);      
    $('.java').animate({width:'90%'},5000);     
    $('.bootstrap').animate({width:'80%'},5000);


    //counter active

    $('.filter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {

        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
	});
  // counter up active  
 $('.counter-up').counterUp({
        delay: 10,
        time: 2000
    });

 $(window).scroll(function(){
        if ($(this).scrollTop()> 200) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    }); 

 jQuery(window).scroll(function () {
      var top = jQuery(document).scrollTop();
        var height = 600;
      //alert(batas);
      
      if (top > height) {
        jQuery('.header-area, .header-absolate').addClass('menu-scroll');
      } else {
       jQuery('.header-area, .header-absolate').removeClass('menu-scroll');
      }
    }); 

    
$(window).load(function(){
    var $container = $('.project-list');
    $container.isotope({
        filter: '*',
        margin:0,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.project-filter li').on('click', (function(){
        $('.project-filter .active').removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            margin:0,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    })); 
});





 
  

}(jQuery));



