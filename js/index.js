// Loader Event
$(window).on("load", function () {
    $("#preloader").css({
        transform: "translateY(-100%)",
        "transition-delay": "0.6s",
    });
    $(".loader").css({
        opacity: "0",
        "transition-delay": "0.3s",
    });
});

// Scroll Event
$(window).scroll(function () {
    $("header").toggleClass("showHeader", window.scrollY > 50);
});

// Navbar Toggle
$(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("showNavbar");
});

// Cart Button Mouse Hover In
$(".cart-link").mouseenter(function () {
    $(".cart-link img").attr("src", "./img/cart_light.png");
});

// Cart Button Mouse Hover Out
$(".cart-link").mouseleave(function () {
    $(".cart-link img").attr("src", "./img/cart_dark.png");
});

// Go Back Function
$(".go-back").click(function () {
    window.history.back();
});

// Scroll To Top
$(window).scroll(function () {
    $(".ScrolltoTop").toggleClass("show", window.scrollY > 500);
});

$(".ScrolltoTop").click(function () {
    $(window).scrollTop(0);
});
