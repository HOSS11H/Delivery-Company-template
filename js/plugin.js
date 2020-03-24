//Active Nav Mobile-Menu 
$(document).ready(function () {
  "use strict";
  var showMenu = $(".show-menu-btn i");
  var hideMenu = $(".hide-menu-btn i");

  showMenu.click(function () {    //Show Menu On Click
    $(".menu-mobile").addClass('active');
    toggleTween(tl);    //We add the function To play on click
  });

  hideMenu.click(function () {       //Hide Menu On Click
    $(".menu-mobile").removeClass('active');
    toggleTween(tl);    //We add the function To reverse on click
  });

  $('.menu-mobile a').click(function () {       //Hide Menu On Link Click
    $(".menu-mobile").removeClass('active');
    toggleTween(tl);        //We add the function To reverse on click
  });



  //Close Active Menu On Click On Body
  $(document).click(function () {
    if ($(".menu-mobile").hasClass("active")) {
        hideMenu.click();
    } 
  })
  $(".menu-mobile li,.hide-menu-btn i,.show-menu-btn i").click(function (e) {
    "use strict";
    e.stopPropagation();
  });

});

//Sticky Header 
var headerHeight = $("header").innerHeight();
$(window).scroll(function () {
    "use strict";
    if ($(window).scrollTop() >= headerHeight) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});

$(document).ready(function () {
    "use strict";
    if ($(window).scrollTop() >= headerHeight) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});


//Main Slider
$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.main', {
    // Optional parameters
    speed:400,
    direction: 'horizontal',  //there is a vertical direction
    loop: false,
    navigation: {                 //to activate Navigation
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {                  //to activate Scroll Bar
      el: '.swiper-scrollbar',
      draggable: true,
    },
    autoplay: {
      delay: 7000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    }
  })
});


//Tween Max Animation 
TweenMax.from('.top-bar .quick-info', 1, {
  x: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom('.top-bar .social li', 1.5, {
  delay: 0.4,
  x: 40,
  opacity: 0,
  ease: Expo.easeInOut
},0.2);


TweenMax.from('.logo', 1, {
  delay:1.5,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from('.show-menu-btn', 1, {
  delay:2,
  x: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom('.menu li', 1.5, {
  delay: 2,
  x: 40,
  opacity: 0,
  ease: Expo.easeInOut
},0.2);

TweenMax.from('.nav-btn', 1, {
  delay:3.8,
  scale:0,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from('.main-content', 1, {
  delay:4.2,
  scale:0,
  opacity: 0,
  ease: Elastic.easeInOut
});

TweenMax.staggerFrom('.feature', 1, {
  delay: 5.2,
  y: 40,
  opacity: 0,
  ease: Expo.easeInOut
},0.2)

//TWEEN MAX ANimation For MObile Nav
const tl = new TimelineLite({ paused: true, reversed: true });

tl
    .from(".hide-menu-btn i", 0.5,{
      rotation: 90,
      opacity: 0
    })
    .staggerFrom('.menu-mobile ul li', 1, {
      opacity:0,
      y:40,
      ease: Power3.easeInOut
    }, 0.2, "-=0.7");

function toggleTween(tween) {
  tween.reversed( ) ?  tween.play( )  :  tween.reverse( );
}    


//wow js intialize
new WOW().init();



//Auto RATIO ASPECT For Images
$(document).ready(function () {
  "use strict";
  $(".ratio-content img").each(function () {
    "use strict";
    var ratio = ($(this).height()  / $(this).width()) * 100 ;
    $(this).parent('.ratio-content ').siblings(".ratio").css('padding-top', ratio +'%');
  });
});


//Show Selected Data
var dataShow = $(".box").children('.dataShow'),
    dataInput = $('.box').children('.dataInput');
$(document).ready(function (){
    "use strict";
    dataInput.change(function (){
        $(this).siblings(".dataShow").attr("placeholder", $(this).val());
        
    })
});

//Auto CalCulation 

$(document).ready(function () {
  'use strict';
  dataInput.change(function (){
    var distance = $('#distance').val();
    var weight = $('#weight').val();
    var length = $('#length').val();
    var height = $('#height').val();
    var width = $('#width').val();
    var calc = (distance / weight * height )+ (( 2 / length ) * width);
    var value = Math.floor(calc);
    console.log('value');
    if ( isNaN(value) ){
      $('#total').attr("placeholder",'Fill All The Fields, Please.' );
    }
    else if (value === Infinity) {
      $('#total').attr("placeholder",'Fill All The Fields.' );
    }
    else{
      $('#total').attr("placeholder", value + ' '+ '$' );
    }
    
})
})

//Client Slider
$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.client-slider', {
    // Optional parameters
    speed:400,
    direction: 'horizontal',  //there is a vertical direction
    loop: false,
    scrollbar: {                  //to activate Scroll Bar
      el: '.swiper-scrollbar',
      draggable: true,
    },
    autoplay: {
      delay: 8000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2.5,
      spaceBetween: 50
    }
  }
  });
});


//Accordion FAQS 
$(document).ready(function () {
  'use strict';
  $('.show-faq').click(function (){
    $(this).children('i').toggleClass('fa-angle-down  fa-times');
    $(this).parent('.faq').toggleClass('triggred');
  });
});
$(document).ready(function () {
  'use strict';
  $('.head').click(function (){
    $(this).parent('.faq').toggleClass('triggred');
    $(this).siblings('.show-faq').children('i').toggleClass('fa-angle-down  fa-times');
  });
});