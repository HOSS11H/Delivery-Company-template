//Menu Mobile 
const tl = new TimelineLite({ paused: true, reversed: true });

tl
.to(".menu", 1.5, {
  opacity: 1,
  left: 0,
  ease: Power3.easeInOut,
  className: '+=active'
})
.set('.show-menu',{className: '+=active'})
.staggerFrom('.menu ul li', 1.5,{
  opacity:0,
  y:40,
  ease: Power3.easeInOut
}, 0.4, '-=0.7');




function toggleTween(tween) {
  tween.reversed( ) ?  tween.play( )  :  tween.reverse( );
}
//OnClick 
$('.show-menu').click(function (e) {
  'use strict';
  if ( tl.isActive() ) {
    e.preventDefault;
    e.stopImmediatePropagation;
    return false;
  }

  toggleTween(tl);
});

$(document).click(function () {
  if ($(".menu").hasClass("active")) {
    $(".show-menu").click();
  }
});
$(".show-menu").click(function (e) {
  "use strict";
  e.stopPropagation();
});


//Main Fashion Slider
$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.fashion', {
    // Optional parameters
    speed:400,
    direction: 'horizontal',  //there is a vertical direction
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },   
  });
});

//Model Filter Active Class
$(document).ready(function () {
  'use strict';
  $('.model-filter ul li ').click(function () {
    $(this).addClass('active').siblings('li').removeClass('active');
  });



//Masonry Gallery
  // init Isotope
  var $grid = $('.masonry-container').isotope({
    // options
    itemSelector: '.model',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer'
    }
  });
  // filter items on button click
  $('.model-filter').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

});


//Auto RATIO ASPECT For Images
$(document).ready(function () {
  "use strict";
  $(".ratio-content img").each(function () {
    var ratio = ($(this).height()  / $(this).width()) * 100 ;
    $(this).parent('.ratio-content ').siblings(".ratio").css('padding-top', ratio +'%');
  });
});

