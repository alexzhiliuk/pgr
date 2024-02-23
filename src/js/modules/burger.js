$(".burger").click(function() {
    $(this).toggleClass("burger_active")

    $(".mobile-nav").toggleClass("mobile-nav_active")

    if ($(".mobile-nav").hasClass("mobile-nav_active")) {
        $("main").hide()
    } else {
        $("main").show()
    }
})