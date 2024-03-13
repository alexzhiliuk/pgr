$(".tabs__item").click(function() {
    let id = $(this).attr("data-tab-id")
    $(".tabs__item_active").removeClass("tabs__item_active")
    $(".tabs__content_active").removeClass("tabs__content_active")
    $(`.tabs__item[data-tab-id=${id}]`).addClass("tabs__item_active")
    $(`.tabs__content[data-tab-id=${id}]`).addClass("tabs__content_active")
})