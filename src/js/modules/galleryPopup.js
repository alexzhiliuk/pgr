let galleryNames = []
$("img[data-gallery]").each(function(i, el) {
    let galleryName = $(el).attr("data-gallery")
    if (!galleryNames.includes(galleryName)) {
        $("body").append(`
        <div class="gallery-popup" style="display: none;" data-gallery="${galleryName}">
        <div class="gallery-popup__close">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 12L12 36M12 12L36 36" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>            
        </div>
        <div class="gallery-popup__body">
            <div class="gallery-popup__btn gallery-popup__btn-prev">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1998 16.8273L8.75977 11.3873L14.1998 5.94727" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                
            </div>
            <div class="gallery-popup__img" data-current-counter="" data-max-counter="">
                <img src="" alt="">
            </div>
            <div class="gallery-popup__btn gallery-popup__btn-next">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.57367 16.8273L14.0137 11.3873L8.57367 5.94727" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                
            </div>
        </div>
    </div>
        `)
    }

    galleryNames.push(galleryName)
})

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
    } 
    if (currentNumber == imagesCount || imagesCount == 1) {
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
