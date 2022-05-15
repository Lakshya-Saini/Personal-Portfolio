// Loader Animation
$(window).on("load", function () {
  $(".se-pre-con").animate({ opacity: 1 }, 2200, function () {
    $(".se-pre-con").fadeOut("slow");
  });
});

// Show Navbar at top on scroll

$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 100) {
    $("nav").addClass("white");
  } else {
    $("nav").removeClass("white");
  }
});

$(document).ready(function () {
  // Initialize AOS
  AOS.init({
    duration: 500,
    easing: "ease-int-out",
    once: true,
    mirror: true,
  });

  // Initialize WOW.js
  new WOW().init();

  $(".bar-btn").click(function () {
    $(".menu").css("right", "0%");
    $(".bar-btn").css("display", "none");
  });

  $(".close-menu").click(function () {
    $(".menu").css("right", "-100%");
    $(".bar-btn").css("display", "block");
  });

  // ----------------- On click of menu links --------------------

  $("#menu-my-projects").on("click", () => {
    $(".menu").css("right", "-100%");
    setTimeout(() => {
      window.location.href = "/#projects";
    }, 100);
  });

  $("#menu-lets-talk").on("click", () => {
    $(".menu").css("right", "-100%");
    setTimeout(() => {
      window.location.href = "/#contact";
    }, 100);
  });

  $("#menu-hire-me").on("click", () => {
    $(".menu").css("right", "-100%");
    setTimeout(() => {
      $("#hireMeModal").modal("show");
    }, 500);
  });

  $("#menu-skills").on("click", () => {
    $(".menu").css("right", "-100%");
    setTimeout(() => {
      $("#mySkillsModal").modal("show");
    }, 500);
  });

  // --------------------------------- Smooth Scrolling ------------------------------

  var scrollLink = $(".scroll");

  scrollLink.click(function (e) {
    var target_offset = $(this.hash).offset().top;
    var customoffset = 75;

    $("body,html").animate({ scrollTop: target_offset - customoffset }, 500);
  });

  //----------------------------- Initialise wow.min.js ------------------------------------

  new WOW().init();

  // ----------------------- Disable Submit Button ------------------------- //

  $("#submitForm").on("click", async (e) => {
    e.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    var regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == "") {
      return toastr.error("Please enter your name");
    }

    if (email == "") {
      return toastr.error("Please enter your email");
    }

    if (!regex.test(email)) {
      return toastr.error("Email is incorrect");
    }

    if (!subject) {
      return toastr.error("Please enter a subject");
    }

    if (message == "") {
      return toastr.error("Please write a message");
    }

    // send email
    const response = await fetch(
      "https://node-portfolio-backend.herokuapp.com/api/user/email/send",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fromEmail: email,
          fromName: name,
          subject,
          message,
        }),
      }
    );
    const content = await response.json();

    if (content.success) {
      toastr.success(content.msg);

      $("#name").val("");
      $("#email").val("");
      $("#subject").val("");
      $("#message").val("");

      return;
    }

    return toastr.error("Something went wrong. Please try again later");
  });
});
