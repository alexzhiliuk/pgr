$(".showcase__fav-btn").click(function(e) {
    e.preventDefault()
    $(this).toggleClass("showcase__fav-btn_liked")
})

$("#showcaseType a").click(function(e) {
    e.preventDefault()
    let value = $(this).attr("data-value")
    
    if (value == "list") {
        $(".showcase__body").removeClass("showcase__body_grid")
        $(".showcase__grid").removeClass("showcase__grid").addClass("showcase__list")
    } else if (value == "grid") {
        $(".showcase__body").addClass("showcase__body_grid")
        $(".showcase__list").addClass("showcase__grid").removeClass("showcase__list")
    }
})


$("#openFilters").click(function(e) {
    e.preventDefault()
    $(".showcase-aside").addClass("showcase-aside_active")
    $("body").addClass("lock")
})

$(".close-filters").click(function(e) {
    e.preventDefault()
    $(".showcase-aside").removeClass("showcase-aside_active")
    $("body").removeClass("lock")
})