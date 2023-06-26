$(document).ready(function () {

  //ADDING THE PRELOADER ANIMATION 
$(window).on('load',function(){
  $('.preloader').addClass('complete')
});

  $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll >=50){
      $(".sticky").addClass("stickyadd");
    }else{
      $(".sticky").removeClass("stickyadd");
    }
  });

  //ANIMATING THE TEXR
  var typed = new Typed(".element", {
    strings: ["Kristijan Škrlec", "a Developer", "a Photographer", "a BodyBuilder"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  //ANIMATING THE PROGRESS BARS
  var waypoint = new Waypoint({
    element: document.getElementById('exp-id'), 
    handler: function(){
        var p = document.querySelectorAll('.progress-bar');
        p[0].setAttribute("style", "width: 100%;transition:1s all");
        p[1].setAttribute("style", "width: 80%;transition:1.5s all");
        p[2].setAttribute("style", "width: 65%;transition:1.7s all");
        p[3].setAttribute("style", "width: 40%;transition:2s all");
        p[4].setAttribute("style", "width: 30%;transition:2.3s all");
    }, 
    offset: '90%'
  })

  var filterizd = $('.filter-container').filterizr({
    animationDuration: .5,
    
    });
    

  //OWL CAROUSEL FUNCTION
  $(".owl-carousel").owlCarousel({
    loop:true, 
    autoplay:true,
    autoplayTimeout:4000, 
    items:2, 
    animateIn: "fadeInRight"
  });

  //SMOOTH SCROLL
  $('a').smoothScroll({

    speed:2000,
  });

  
// adding fadeInUp animation to child of div with class .way-col
var $child = $('.way-fade-up').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInUp');
  },{offset: '90%'});
});

var $child = $('.way-fade-left').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInLeft');
  },{offset: '90%'});
});

var $child = $('.way-fade-right').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInRight');
  },{offset: '90%'});
});


});
