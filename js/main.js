(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

THEPAW TESTIMONIAL SLIDER JS
THEPAW SWIPER SLIDER JS

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){



  $(".menu-bar").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").addClass("active");
  });
  $(".close, .offcanvas-overlay").on("click", function () {
      $(".offcanves-menu, .offcanvas-overlay").removeClass("active");
  });

	

  $('.drip-nfis-slider').slick({
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: false,
    cssEase: 'linear',
    pauseOnHover:true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }

    ]
  });



});/*End document ready*/


$(window).on("resize", function(){


}); // end window resize


$(window).on("load" ,function(){
  AOS.init({
    duration: 1000,
  })
}); // End window LODE


// preloader
function loader() {
  $(window).on('load', function () {
    $('#landex-ctn-preloader').addClass('loaded');
    $("#landex-loading").fadeOut(8000);
    // Una vez haya terminado el preloader aparezca el scroll

    if ($('#landex-ctn-preloader').hasClass('loaded')) {
      // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
      $('#landex-preloader').delay(8000).queue(function () {
        $(this).remove();
      });
    }
  });
}
loader();



})(jQuery);






