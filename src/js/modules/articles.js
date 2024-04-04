$(".articles-mobile-menu__selected-categories").click(function() {
    $(this).parent().toggleClass("articles-mobile-menu_active").removeClass("articles-mobile-menu_search")
    $(".articles-aside__list").toggleClass("articles-aside__list_active")
})
$(".articles-mobile-menu__search").click(function() {
    $(this).parent().toggleClass("articles-mobile-menu_search").removeClass("articles-mobile-menu_active")
    $(".articles-aside__list").removeClass("articles-aside__list_active")
})
$(".articles-aside__link").click(function() {
    $(this).toggleClass("articles-aside__link_active")
})