$(".burger").click(function() {
    $(this).toggleClass("burger_active")

    $(".mobile-nav").toggleClass("mobile-nav_active")

    $("html").toggleClass("lock")
})