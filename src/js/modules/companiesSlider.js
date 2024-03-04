const sliders = $(".companies-slider")
addAnimation()

function addAnimation() {
    sliders.each(function(index, elem) {
        $(this).attr('data-animated', true)

        const list = $(this).children(".companies-slider__list")
        list.children().each(function(index, elem) {
            $(this).clone().attr("area-hidden", true).appendTo(list)
        })
    })
}