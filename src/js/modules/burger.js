$(".burger").click(function() {
    $(this).toggleClass("burger_active")

    $(".mobile-nav").toggleClass("mobile-nav_active")

    $("html").toggleClass("lock")
})

$( ".droplist-open" ).hover(function() {
    $( ".blackout" ).addClass("blackout-active");
}, function() {
    $( ".blackout" ).removeClass("blackout-active");
});