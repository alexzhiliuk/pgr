$(".gallery-popup__close").click(function() {
    $(this).parent().hide()
    
})
$("img[data-gallery]").click(function() {
    let galleryName = $(this).attr("data-gallery"),
        gallery = $(`.gallery-popup[data-gallery=${galleryName}]`),
        imagesCount = $(`img[data-gallery=${galleryName}]`).length,
        currentNumber = $(this).attr("data-gallery-order")

    gallery.show()
    gallery.find(".gallery-popup__img img").attr("src", $(this).attr("src"))
    gallery.find(".gallery-popup__img").attr("data-max-counter", imagesCount).attr("data-current-counter", currentNumber)

    gallery.find(".gallery-popup__btn-prev").removeClass("gallery-popup__btn_disabled")
    gallery.find(".gallery-popup__btn-next").removeClass("gallery-popup__btn_disabled")
    if (currentNumber == 1) {
        gallery.find(".gallery-popup__btn-prev").addClass("gallery-popup__btn_disabled")
    } else if (currentNumber == imagesCount) {
        gallery.find(".gallery-popup__btn-next").addClass("gallery-popup__btn_disabled")
    }
})
$(".gallery-popup__btn-prev").click(function() {
    let gallery = $(this).parent().parent(),
        galleryName = gallery.attr("data-gallery"),
        prevNumber = gallery.find(".gallery-popup__img").attr("data-current-counter") - 1,
        newImage = $(`img[data-gallery=${galleryName}][data-gallery-order=${prevNumber}]`).attr("src")

    gallery.find(".gallery-popup__img img").attr("src", newImage)
    gallery.find(".gallery-popup__img").attr("data-current-counter", prevNumber)

    if (prevNumber == 1) {
        gallery.find(".gallery-popup__btn-prev").addClass("gallery-popup__btn_disabled")
    }

    gallery.find(".gallery-popup__btn-next").removeClass("gallery-popup__btn_disabled")  
})
$(".gallery-popup__btn-next").click(function() {
    let gallery = $(this).parent().parent(),
        galleryName = gallery.attr("data-gallery"),
        nextNumber = Number(gallery.find(".gallery-popup__img").attr("data-current-counter")) + 1,
        newImage = $(`img[data-gallery=${galleryName}][data-gallery-order=${nextNumber}]`).attr("src"),
        imagesCount = $(`img[data-gallery=${galleryName}]`).length

    gallery.find(".gallery-popup__img img").attr("src", newImage)
    gallery.find(".gallery-popup__img").attr("data-current-counter", nextNumber)

    if (nextNumber == imagesCount) {
        gallery.find(".gallery-popup__btn-next").addClass("gallery-popup__btn_disabled")
    }

    gallery.find(".gallery-popup__btn-prev").removeClass("gallery-popup__btn_disabled")  
})

$(window).click(function() {
    $(".gallery-popup").hide()
});
  
$('.gallery-popup__img, .gallery-popup__btn, img[data-gallery]').click(function(event){
    event.stopPropagation();
});