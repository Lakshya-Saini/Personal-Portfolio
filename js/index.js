// Loader Animation
$(window).on("load", function () {
    $(".se-pre-con").animate({ opacity: 1 }, 2450, function () {
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

        $("body,html").animate(
            { scrollTop: target_offset - customoffset },
            500
        );
    });

    //----------------------------- Initialise wow.min.js ------------------------------------

    new WOW().init();

    // ----------------------- Disable Submit Button ------------------------- //

    $("#letsTalk").on("click", (e) => {
        e.preventDefault();

        var name = $("#fullName").val();
        var email = $("#yourEmail").val();
        var selectCategory = $("input[name='selectCategory']:checked").val();
        var message = $("#message").val();

        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (name == "") {
            toastr.warning("Please enter your name");
            return;
        }

        if (email == "") {
            toastr.warning("Please enter your email");
            return;
        }

        if (!regex.test(email)) {
            toastr.warning("Email is incorrect");
            return;
        }

        if (!selectCategory) {
            toastr.warning("Please select a category");
            return;
        }

        if (message == "") {
            toastr.warning("Please tell me something about project");
            return;
        }

        $("#letsTalk").unbind("click").click();
    });
});
