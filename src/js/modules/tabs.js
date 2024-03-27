$(".tabs__item").click(function() {
    let id = $(this).attr("data-tab-id")
    $(".tabs__item_active").removeClass("tabs__item_active")
    $(".tabs__content_active").removeClass("tabs__content_active")
    $(`.tabs__item[data-tab-id=${id}]`).addClass("tabs__item_active")
    $(`.tabs__content[data-tab-id=${id}]`).addClass("tabs__content_active")
})

$(".horizontal-tabs__item").click(function() {
    let id = $(this).attr("data-tab-id")
    $(".horizontal-tabs__item_active").removeClass("horizontal-tabs__item_active")
    $(".horizontal-tabs__content_active").removeClass("horizontal-tabs__content_active")
    $(`.horizontal-tabs__item[data-tab-id=${id}]`).addClass("horizontal-tabs__item_active")
    $(`.horizontal-tabs__content[data-tab-id=${id}]`).addClass("horizontal-tabs__content_active")
})

$(".horizontal-tabs__content-btn").click(function(e) {
    e.preventDefault()
    $(this).parent().find(".horizontal-tabs__content-text").toggleClass("horizontal-tabs__content-text_opened")
    $(this).toggleClass("horizontal-tabs__content-btn_opened")
})