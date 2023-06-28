$(document).ready(function () {
  //Page Preloader Animation
  $(window).on("load", function () {
    $(".preloader").addClass("complete");
  });

  //Sticky Header, Enlarged and Always Visible
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  //Typewriter Animation Header
  var typed = new Typed(".element", {
    strings: [
      "Kristijan Škrlec",
      "a Developer",
      "a Photographer",
      "a BodyBuilder",
    ],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  //Animating the Progress Bars
  var waypoint = new Waypoint({
    element: document.getElementById("exp-id"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width: 100%;transition:1s all");
      p[1].setAttribute("style", "width: 80%;transition:1.5s all");
      p[2].setAttribute("style", "width: 65%;transition:1.7s all");
      p[3].setAttribute("style", "width: 40%;transition:2s all");
      p[4].setAttribute("style", "width: 30%;transition:2.3s all");
    },
    offset: "90%",
  });

  //Photo Gallery
  var filterizd = $(".filter-container").filterizr({
    animationDuration: 0.5,
  });

  //Owl Carousel Functionality
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 2,
    animateIn: "fadeInRight",
  });

  //Enabling the Smooth Scroll
  $("a").smoothScroll({
    speed: 2000,
  });

  //Adding fadeInUp Animations to Children of .way-col
  var $child = $(".way-fade-up").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInUp");
      },
      { offset: "90%" }
    );
  });

  var $child = $(".way-fade-left").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInLeft");
      },
      { offset: "90%" }
    );
  });

  var $child = $(".way-fade-right").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInRight");
      },
      { offset: "90%" }
    );
  });

  /*  USER SIGN UP  */
  // Handle registration form submission
  $("#myModal").submit(function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var usernameData = $("#floatingInput").val();
    var password = $("#floatingPassword").val();

    //Perform login validation here
    if (usernameData === "") {
      alert("Please enter your email.");
      return;
    }

    if (password === "") {
      alert("Please enter your password.");
      return;
    }

    // Send AJAX request to the server for verification
    var registrationData = {
      username: usernameData,
      password: password,
    };

    // Send AJAX request to the server for registration
    $.ajax({
      url: "https://www.fulek.com/data/api/user/register",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(registrationData),
      success: function (response) {
        // Check the response from the server
        if (response.statusCode === 200) {
          // Registration successful
          alert("Registration successful!");
          console.log(response);
          $('#myModal').modal('hide');
          $('#signupBtn').html("Log Out");
        }
        else if (response.statusCode === 400) {
          alert("User exists, Logging In");
          var usernameData = $("#floatingInput").val("");
          var password = $("#floatingPassword").val("");
          console.log(response);
          $('#myModal').modal('hide');
          $('#signupBtn').html("Log Out");
        }
      },
      error: function (xhr, status, error) {
        // Handle AJAX request error
        alert(
          "An error occurred while processing your request. Please try again later."
        );
        console.log(response);
      },
    });
  });
});
