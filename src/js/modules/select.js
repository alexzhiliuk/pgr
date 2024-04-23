$(".select__droplist_absolute").each(function(index, el) {
    let $absoluteDroplist = $(el.parentElement)
    $absoluteDroplist.attr("data-drop-id", index)
    $(el).attr("data-drop-id", index)
})

$(".select").click(function(e) {
    if ($(e.target).is("select")) { return }
    $(this).toggleClass("select_active")

    if ( $(this).find(".select__droplist").length ) {

        $(this).find(".select__droplist").toggleClass("select__droplist_active")

    } else {

        let droplistId = $(this).attr("data-drop-id")
        var $droplist = $(`.select__droplist_absolute[data-drop-id=${droplistId}]`)

        if ($droplist.hasClass("select__droplist_active")) {

            $droplist.css("display", "none").removeClass("select__droplist_active")

        } else {

            let top = $(this).outerHeight() + $(this).offset().top + 4,
                left = $(this).offset().left
            
                $droplist.css("display", "flex").css("top", `${top}px`).css("left", `${left}px`).addClass("select__droplist_active")
    
            $("body").append($droplist)

        }
    }
})

$(".select__item").click(function() {
    let droplistId = $(this).parent().attr("data-drop-id"),
        $droplist = $(`.select__droplist_absolute[data-drop-id=${droplistId}]`),
        select = $(`.select[data-drop-id=${droplistId}]`)

    select.removeClass("select_active")
    select.find(".select__title").text($(this).find("a").text())
    $droplist.css("display", "none").removeClass("select__droplist_active")
})

$(".select_form .select__item a").click(function(e) {
    e.preventDefault()
    let value = $(this).attr("data-value"),
        text = $(this).html(),
        select = $(this).parent().parent().parent()
    
    select.find("option").removeAttr("selected")
    select.find(`option[value=${value}]`).attr("selected", "selected")
    select.find(".select__title").html(text)
    select.addClass("select_selected")
})