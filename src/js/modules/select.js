$(".select__droplist_absolute").each(function(index, el) {
    let $absoluteDroplist = $(el.parentElement)
    $absoluteDroplist.attr("data-drop-id", index)
    $(el).attr("data-drop-id", index)
})

$(".select").click(function() {
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