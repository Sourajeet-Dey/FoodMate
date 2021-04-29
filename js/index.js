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

$(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("showNavbar");
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

// Sweetalert Toast Alert: Add to Cart

$.toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    confirmButtonText: '<i class="fa fa-times text-secondary"></i>',
    confirmButtonColor: "transparent",
    padding: "15px 20px",
    showClass: { popup: "animate__animated animate__bounceIn" },
    hideClass: { popup: "animate__animated animate__bounceOut" },
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

// ****************************************************************************

// Add to Cart Counter (Food Cart)

var counter = 0;
var cartCounter = localStorage.getItem("cartCounter");

// Local Storage

// if (cartCounter === "enabled") {
//     counter++;
//     $(".badge-count").text(counter);
//     localStorage.setItem("cartCounter", "enabled");
// }

// $(".food-cart").click(function () {
//     var cartCounter = localStorage.getItem("cartCounter");

//     if (cartCounter !== "enabled") {
//         counter++;
//         $(".badge-count").text(counter);
//         localStorage.setItem("cartCounter", "enabled");
//     } else {
//         counter--;
//         $(".badge-count").text(counter);
//         localStorage.setItem("cartCounter", null);
//     }
// });

// If / Else

// $(".food-cart").click(function () {
//     if ($(".food-cart img:nth-child(1)").css("visibility", "visible")) {
//         counter++;
//         $(".badge-count").text(counter);
//     }
//     else if ($(".food-cart img:nth-child(1)").css("visibility", "hidden")) {
//         counter--;
//         $(".badge-count").text(counter);
//     }
// });

$(".food-cart img:nth-child(1)").click(function () {
    counter++;
    $(".badge-count").text(counter);
    $.toast.fire({
        icon: "success",
        title: '<span class="text-success">Item Added Successfully!</span>',
    });
});

$(".food-cart img:nth-child(2)").click(function () {
    counter--;
    $(".badge-count").text(counter);
    $.toast.fire({
        icon: "warning",
        title: '<span class="text-warning">Item Removed from Cart!</span>',
    });
});

// ****************************************************************************

// Add to Cart Btn: Each Dishes Individual Id

$("#dish_1 img").click(function () {
    $("#dish_1").toggleClass("addCart");
});

$("#dish_2 img").click(function () {
    $("#dish_2").toggleClass("addCart");
});

$("#dish_3 img").click(function () {
    $("#dish_3").toggleClass("addCart");
});

$("#dish_4 img").click(function () {
    $("#dish_4").toggleClass("addCart");
});

$("#dish_5 img").click(function () {
    $("#dish_5").toggleClass("addCart");
});

$("#dish_6 img").click(function () {
    $("#dish_6").toggleClass("addCart");
});

$("#dish_7 img").click(function () {
    $("#dish_7").toggleClass("addCart");
});

$("#dish_8 img").click(function () {
    $("#dish_8").toggleClass("addCart");
});

$("#dish_9 img").click(function () {
    $("#dish_9").toggleClass("addCart");
});

$("#dish_10 img").click(function () {
    $("#dish_10").toggleClass("addCart");
});

// ****************************************************************************
