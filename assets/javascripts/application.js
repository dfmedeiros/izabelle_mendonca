(function ($) {
  "use strict";

  $(window).load(function () {
    $('#loader').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
  });

  $(window).height(function () {
    heroResize();
    function heroResize() {
      var windowHeight = $(window).innerHeight();
      $('.slider-hero, .full-screen-intro').css('height', windowHeight);
    };
    $(window).resize(function () {
      heroResize();
    });
  });

  $(".navigation").menumaker({
    title: "Menu",
    format: "multitoggle"
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass("sticky");
    }
    else {
      $('.header').removeClass("sticky");
    }
  });

  $('.accordion-title').click(function (e) {

    $(this).next().slideToggle('easeOut');
    $(this).toggleClass('active');
    $("accordion-title").toggleClass('active');
    $(".accordion-content").not($(this).next()).slideUp('easeIn');
    $(".accordion-title").not($(this)).removeClass('active');

  });
  $(".accordion-content").addClass("defualt-hidden");

})(jQuery);
