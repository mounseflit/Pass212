(function($) {

	"use strict";

    // Preloader
    $(window).on('load', function() { 
      $('#preloader').delay(350).fadeOut('slow'); 
    });

    // Wow Animation
    new WOW().init();

    // Navbar animation on scroll
    $(window).scroll(function() {
      if ($(document).scrollTop() > 5) {
        $('.navbar').addClass('scrolling-header');
      } else {
        $('.navbar').removeClass('scrolling-header');
      }
    });

    $('body').off('click', '.mute_video');
    $('body').on('click', '.mute_video', function(){
        $("#video_highlight_2020").prop('muted', false);
        $(this).removeClass('mute_video');
        $(this).addClass('unmute_video');
        $(this).children().removeClass('fa-volume-off');
        $(this).children().addClass('fa-volume-up');
    });

    $('body').off('click', '.unmute_video');
    $('body').on('click', '.unmute_video', function(){
        $("#video_highlight_2020").prop('muted', true);
        $(this).removeClass('unmute_video');
        $(this).addClass('mute_video');
        $(this).children().removeClass('fa-volume-up');
        $(this).children().addClass('fa-volume-off');
    });

    // History carousel
    if($('.history-carousel').length){
        $('.history-carousel').owlCarousel({
            rtl: true,
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            navText: [
              '<i class="fas fa-long-arrow-alt-left"></i>',
              '<i class="fas fa-long-arrow-alt-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }



    // Speaker carousel
    if($('.speaker-carousel').length){
        $('.speaker-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            navText: [
              '<i class="fas fa-long-arrow-alt-left"></i>',
              '<i class="fas fa-long-arrow-alt-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        })
    }

    if($('.speaker-carousel2').length){
        $('.speaker-carousel2').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            navText: [
              '<i class="fas fa-long-arrow-alt-left"></i>',
              '<i class="fas fa-long-arrow-alt-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        })
    }

    
    // Speaker carousel
    if($('.sponsors-carousel').length){
        $('.sponsors-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            navText: [
              '<i class="fas fa-long-arrow-alt-left"></i>',
              '<i class="fas fa-long-arrow-alt-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        })
    }

    
    // CounterUp
    $('.counter').counterUp({
          delay: 10,
          time: 1000
      }); 


    // Parallax background
    $('.jarallax').jarallax({
        speed: 0.5
    });

    // Light box - Portfolio Gallery
    lightbox.option({
      'imageFadeDuration': 500,
      'resizeDuration': 500,
      'wrapAround': true
    })


    // YTPlayer for bg video
    $('.bg-video').mb_YTPlayer();

    // Water ripples animation
    $('#water-animation').ripples({
        resolution: 512,
        dropRadius: 30,
        perturbance: 0.04
    });

    //Scroll-Up
    dyscrollup.init({
        showafter : 500,
        scrolldelay : 1000,
        position : 'right',
        shape : 'squre',
        width : "20",
        height : "20"
    });



})(window.jQuery);


// Script Count Down

var countDownDate = new Date("Feb 12, 2024 09:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = "<div><span>"+days+"</span><abbr>Jours</abbr></div><div><span>"+hours+"</span><abbr>Heures</abbr></div><div><span>"+minutes+"</span><abbr>Minutes</abbr></div><div><span>"+seconds+"</span><abbr>Seconds</abbr></div>";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// Script Count Down
// var countDownDateSOUS = new Date("May 02, 2023 23:59:59").getTime();
// var x = setInterval(function() {
//   var now = new Date().getTime();
//   var distance = countDownDateSOUS - now;
    
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("countdownPanel").innerHTML = "<div><span>"+days+"</span><abbr>Jours</abbr></div><div><span>"+hours+"</span><abbr>Heures</abbr></div><div><span>"+minutes+"</span><abbr>Minutes</abbr></div><div><span>"+seconds+"</span><abbr>Seconds</abbr></div>";
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);





  $("img.lazy").lazyload({effect : "fadeIn"});



  /****** Sous menu header ****/
//   $(".lievent").on('click',function(){
//     $(this).children('ul').toggleClass('activeshowing');
//     if($(this).children('ul').hasClass('activeshowing'))
//     {
//         $(".lievent").children('.sousmenuimperi').removeClass('activeshowing');
//         $(this).children('ul').toggleClass('activeshowing');
//     }
//   })


  $(".nav-item .nav-link").on('click',function(){
      $(this).next('.sous-nav-item').toggleClass('activeitem');
      if( $(this).next('.sous-nav-item').hasClass('activeitem'))
      { 
          $(".nav-item .nav-link").next('.sous-nav-item').removeClass('activeitem');
          $(this).next('.sous-nav-item').toggleClass('activeitem');
      }
  })
 


//   $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
//   })


  
/****Footer in home page *******/ 
  if ($('#barFixCounter').length > 0)
  {
    $(".copyright").css('margin-bottom','85px');    
  }

  if (window.matchMedia('(max-width: 600px)').matches && $('#barFixCounter').length > 0)
  {
      $(".copyright").css('margin-bottom','80px');
  }
  /****Footer in home page *******/ 




  /****Search action**/
  $("#btnopensearch").on("click",function(){ 
     $("#search-full-view").show("slow");
  });

  $(".btn-key-study").on("click",function(e){ 
      e.preventDefault();
      var Emailkey = $("#Email_key").val();
      if(Emailkey!="")
      {
        $("#search-full-view").show("slow");
        $(".errorfield").hide();
      }
      else 
      {
          $(".errorfield").show();
      }
 });

  $("#btnopensearch").on("click",function(){ 
    $("#search-full-view").show("slow");
 });

 

  $("#search-close").on("click",function(){
     $("#search-full-view").hide("slow");
  });


var btn = $('#dyscrollup-btn');
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
  /****Search action**/



