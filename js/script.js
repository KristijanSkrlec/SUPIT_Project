$(document).ready(function () {
  //ADDING THE PRELOADER ANIMATION
  $(window).on("load", function () {
    $(".preloader").addClass("complete");
  });

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

  //ANIMATING THE PROGRESS BARS
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

  var filterizd = $(".filter-container").filterizr({
    animationDuration: 0.5,
  });

  //OWL CAROUSEL FUNCTION
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 2,
    animateIn: "fadeInRight",
  });

  //SMOOTH SCROLL
  $("a").smoothScroll({
    speed: 2000,
  });

  // adding fadeInUp animation to child of div with class .way-col
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

  /*  USER LOGIN AND REGISTRATION */
  $("#login-button").click(handleLogin);
  $("#register-button").click(handleRegister);

  $(".message-box").hide();

  // Submit event for the login form
  $("form.log-form").submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the username and password from the input fields
    var username = $("#username").val();
    var password = $("#password").val();

    // Send a POST request to the login API endpoint with the credentials
    $.ajax({
      url: "https://www.fulek.com/data/api/user/login",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        username: username,
        password: password,
      }),
      success: function (response) {
        console.log("Success function called");
        console.log(response); // Check the response for error message

        if (response.statusCode === 404) {
          // Display an error message in the message box
          console.log("invalid");
          $(".message-box")
            .html("Invalid credentials!")
            .addClass("error")
            .addClass("show")
            .delay(2000)
            .fadeOut();
          $(".message-box").addClass("unsuccess").css("display", "block");
          $(".message-box")
            .addClass("red-box")
            .css("background-color", "#f55d90");
          $(".curriculum").css("display", "block");
        } else {
          // Display a success message in the message box and close the login form
          var token = response.data.token;
          localStorage.length = 0;
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("username", username);
          console.log("valid");
          $(".message-box")
            .addClass("blue-box")
            .css("background-color", "#00adb5");
          $(".message-box")
            .html("Login successful!")
            .removeClass("error")
            .removeClass("red-box")
            .addClass("blue-box")
            .addClass("show") // Add the "show" class
            .delay(1000)
            .fadeOut(function () {
              $("form")[0].reset(); // Remove the register button
              $("#login-form").fadeOut("slow"); // Close the login form slowly
            });
          // Clear the input fields
          $(".login-navbar").remove(); // Remove the login button
          $(".signup-navbar").remove();
          // Set the login status to true
          loggedIn = true;
          // Add the logout button to the navbar
          $("#menu").append(
            '<li class="logout-navbar"><a href="#" id="logout-button" >Log out</a></li>'
          );
          $(".message-box").addClass("success").css("display", "block"); // Add the "success" class and set the display to "block"
          // Re-add click event listener to the login button
          $("#login-button").click(function () {
            $("#login-form").toggle("slow");
            if (loggedIn) {
              // Show the login form if user is already logged in
              $("#login-form").show();
            }
          });
          $(".curriculum").addClass("show-cur").css("display", "block");
        }
      },

      error: function (xhr, status, error) {
        console.log("Error function called");
        console.log(xhr);
        console.log(status);
        console.log(error);
        console.log("Invalid credentials");
        // Display an error message in the message box
        $(".message-box")
          .html("Invalid credentials!")
          .addClass("error")
          .addClass("show")
          .delay(2000)
          .fadeOut();
      },
    });
  });
  $(".reg-form").submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the username, email and password from the input fields
    var reg_username = $("#reg-username").val();

    var reg_password = $("#reg-password").val();

    // Send a POST request to the register API endpoint with the credentials
    $.ajax({
      url: "https://www.fulek.com/data/api/user/register",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        username: reg_username,
        password: reg_password,
      }),
      success: function (response) {
        console.log("Success function register called");
        console.log(response); // Check the response for error message

        if (response.statusCode === 400) {
          // Display an error message in the message box
          console.log("invalid");
          $(".message-box")
            .html("User exists!")
            .removeClass("blue-box")
            .addClass("error")
            .addClass("show")
            .delay(2000)
            .fadeOut();
          $(".message-box").addClass("unsuccess").css("display", "block");
          $(".message-box")
            .addClass("red-box")
            .css("background-color", "#f55d90");
        } else {
          // Display a success message in the message box and close the login form
          console.log("valid");
          $(".message-box")
            .addClass("blue-box")
            .css("background-color", "#00adb5");
          $(".message-box")
            .html("Registration successful!")
            .removeClass("error")
            .removeClass("red-box")
            .addClass("blue-box")
            .addClass("show") // Add the "show" class
            .delay(1000)
            .fadeOut(function () {
              $("form")[0].reset(); // Remove the register button
              $("#register-form").fadeOut("slow"); // Close the register form slowly
            });

          $(".message-box").addClass("success").css("display", "block");
          registerFormActive = false;
        }
      },

      error: function (xhr, status, error) {
        console.log("Error function called");
        console.log(xhr);
        console.log(status);
        console.log(error);

        // Display an error message in the message box
        $(".message-box")
          .html("Registration failed!")
          .addClass("error")
          .addClass("show")
          .delay(2000)
          .fadeOut();
      },
    });
  });
  // Add click event listener to the cancel button
  $(".button.cancel").click(function () {
    // Use toggle method with "slow" duration to hide the register form
    $("#register-form").toggle("slow");
    // Set registerFormActive variable to false
    registerFormActive = false;
  });

  $(document).on("click", "#logout-button", function () {
    // Set the login status to false
    loggedIn = false;
    loginFormActive = false;
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");

    //$(".curriculum").css("display", "none");

    // Remove the logout button from the navbar
    $("#logout-button").remove();
    window.location.href = "/html/index.html";
    checkLoggedIn();
    // Add the login and register buttons back to the navbar
    $("#menu").append(
      '<li class="nav-item right-nav-item login-navbar"><button id="login-button">Login</button></li>'
    );
    document
      .getElementById("login-button")
      .addEventListener("click", handleLogin);
    $("#menu").append(
      '<li class="nav-item signup-navbar"><button id = "register-button" class="logs">Register</button></li>'
    );
    document
      .getElementById("register-button")
      .addEventListener("click", handleRegister);
  });
});
