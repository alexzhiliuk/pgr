import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


const swiperHero = new Swiper('.hero-swiper', {
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    allowTouchMove: true,
    autoHeight: false,

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    breakpoints: {
        1366: {
            autoHeight: false,
        },
        992: {
            autoHeight: true,
        }
    },

    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },


    navigation: {
        nextEl: '.hero_slider__nav-btn_next',
        prevEl: '.hero_slider__nav-btn_prev',
    },

    pagination: {
        el: ".hero_slider__pagination",
        clickable: true,
    },
    
});

var sliderHeight = $(".hero_slider__slider").height()
var sliderNavHeight = $(".hero_slider__nav").height()

$(".hero-swiper .swiper-slide").each(function( index ) {
    let btnHeight = $(this).children(".hero__btn").outerHeight()
    let textHeight = $(this).children(".hero__title").height() + 16 + $(this).children(".hero__subtitle").height()
    let margin = (sliderHeight - sliderNavHeight - btnHeight - textHeight) / 2
    $(this).children(".hero__subtitle").attr('style', `--margin: ${margin}px`)
})

$( ".hero_slider__right, .hero_slider__img" ).hover(function() {
    $( ".hero_slider__slider" ).css("opacity", ".6").css("filter", "blur(1px)");
}, function() {
    $( ".hero_slider__slider" ).css("opacity", "").css("filter", "");
});


$( ".hero_slider__img" ).hover(function() {
    $( ".hero_slider__right .hero_slider__expert-arrow" ).css("translate", "8px 0");
}, function() {
    $( ".hero_slider__right .hero_slider__expert-arrow" ).css("translate", "");
});
