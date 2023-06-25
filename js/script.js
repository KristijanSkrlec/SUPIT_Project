//Getting the scroll amount on the window, used for the sticky header
$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
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

 

 


});
