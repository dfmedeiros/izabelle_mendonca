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

  // Portfolio Lightbox Popup Elements
  $(".cbox-gallary1").colorbox({
    rel: 'gallary',
    maxWidth: "95%",
    maxHeight: "95%",
    title: function(){
      var url = $(this).data('link');
      var title = $(this).attr('title');

      if (url) {
        return '<a href="' + url + '" target="_blank">' + title + ' (Ver online)</a>';
      }  else {
        return title;
      }
    }
  });

  containerGridMasonry();

})(jQuery);



function containerGridMasonry() {

    // Gria Element
    if ($(this).length > 0) {
        // ISOTOPE MASONRY ELEMENT  ||--------------
        var $container = $('.container-masonry');
        $container.imagesLoaded(function () {
            $container.isotope({
                itemSelector: '.nf-item',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: 0,
                    gutter: 0
                },
            });
        });

        // bind filter button click
        $('.container-filter').on('click', '.categories', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });

        // ISOTOPE GRID ELEMENT  ||--------------
        var $container2 = $('.container-grid');
        $container2.imagesLoaded(function () {
            $container2.isotope({
                itemSelector: '.nf-item',
                layoutMode: 'fitRows'
            });
        });

        // bind filter categories click
        $('.container-filter').on('click', '.categories', function () {
            var filterValue = $(this).attr('data-filter');
            $container2.isotope({ filter: filterValue });
        });

        // change active class on categories
        $('.categories-filter').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.categories', function () {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });

        });
    };

    // Masonry Element
    if ($(this).length > 0) {
        var container = $('.masonry');
        container.masonry({
            // columnWidth: 0,
            itemSelector: '.nf-item'
        });
    };


};
