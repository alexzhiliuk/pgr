$("[data-js-open-modal]").click(function(e) {
    e.preventDefault()

    $(`[data-js-modal=${$(this).attr('data-js-open-modal')}]`).addClass("modal-wrapper_active")
    $("html, body").addClass("lock")
})

$(".modal__close, [data-js-close-modal]").click(function() {
    $(this).parents(".modal-wrapper").removeClass("modal-wrapper_active")
    $("html, body").removeClass("lock")
})

$(window).click(function() {
    $("[data-js-modal]").removeClass("modal-wrapper_active")
    $("html, body").removeClass("lock")
});

$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        $("[data-js-modal]").removeClass("modal-wrapper_active")
        $("html, body").removeClass("lock")
    }
});
  
$('.modal, [data-js-open-modal]').click(function(event){
    event.stopPropagation();
});