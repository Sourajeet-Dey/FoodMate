// Loader Event

$(window).on("load", function () {
    $("#preloader").css({
        clipPath: "circle(0% at 50% 50%)",
        transitionDelay: "0.6s",
    });
    $(".loader").css({
        opacity: "0",
        transitionDelay: "0.8s",
    });
});

// ****************************************************************************

// Scroll Event

$(window).scroll(function () {
    $("header").toggleClass("showHeader", window.scrollY > 50);
});

// ****************************************************************************

// Dark Mode Toggle: Local Storage

// $(".theme_mode i").click(function () {
//     $("html").toggleClass("dark");
//     $("body").toggleClass("dark");
//     $(".theme_mode i").toggleClass("dark");
// });

var darkmode = localStorage.getItem("darkmode");

if (darkmode === "enabled") {
    $("html").addClass("dark");
    $("body").addClass("dark");
    $(".theme_mode i").addClass("dark");
    localStorage.setItem("darkmode", "enabled");
}

$(".theme_mode i").click(function () {
    var darkmode = localStorage.getItem("darkmode");

    if (darkmode !== "enabled") {
        $("html").addClass("dark");
        $("body").addClass("dark");
        $(".theme_mode i").addClass("dark");
        localStorage.setItem("darkmode", "enabled");
    } else {
        $("html").removeClass("dark");
        $("body").removeClass("dark");
        $(".theme_mode i").removeClass("dark");
        localStorage.setItem("darkmode", null);
    }
});

// ****************************************************************************

// Navbar Toggle

$(".navbar-toggler, .nav-link").click(function () {
    $(".navbar-toggler").toggleClass("showNavbar");
});

$(".nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
});

// ****************************************************************************

// Cart Button Mouse Hover In

$(".cart-link").mouseenter(function () {
    $(".cart-link img").attr("src", "./img/cart_light.png");
});

// Cart Button Mouse Hover Out

$(".cart-link").mouseleave(function () {
    $(".cart-link img").attr("src", "./img/cart_dark.png");
});

// ****************************************************************************

// Go Back Function

$(".go-back").click(function () {
    window.history.back();
});

// ****************************************************************************

// Scroll To Top

$(window).scroll(function () {
    $(".ScrolltoTop").toggleClass("show", window.scrollY > 500);
});

$(".ScrolltoTop").click(function () {
    $(window).scrollTop(0);
});

// ****************************************************************************

// Sweetalert Toast Alert: Add/Remove Cart

var toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    confirmButtonText: '<i class="fa fa-times text-secondary"></i>',
    confirmButtonColor: "transparent",
    padding: "15px 20px",
    showClass: { popup: "animate__animated animate__bounceIn" },
    hideClass: { popup: "animate__animated animate__bounceOut" },
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

// ****************************************************************************

// Add/Remove Cart Alert

/*
toast.fire({
    icon: "success",
    title: '<span class="text-success">Item Added Successfully!</span>',
});

toast.fire({
    icon: "warning",
    title: '<span class="text-warning">Item Removed from Cart!</span>',
});
*/

let foodItem = document.querySelectorAll(".food-cart");

for (let i = 0; i < foodItem.length; i++) {
    foodItem[i].addEventListener("click", () => {
        foodItem[i].classList.add("addCart");
        setTimeout(() => {
            foodItem[i].classList.remove("addCart");
        }, 1000);
        toast.fire({
            icon: "success",
            title: '<span class="text-success">Item Added Successfully!</span>',
        });
    });
}

// ****************************************************************************
