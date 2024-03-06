import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


const swiperHero = new Swiper('.hero-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    allowTouchMove: true,
    autoHeight: false,

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    breakpoints: {
        1366: {
            autoHeight: false,
            spaceBetween: 0,
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
    $( ".hero_slider__slider" ).css("opacity", ".2");
    $( ".hero_slider__img img" ).css("transform", "scale(1.03)")
    $( ".hero_slider__right" ).addClass("hovered")
    $( ".hero__bg" ).css("background", "radial-gradient(75.09% 100% at 50% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #CEDBEA")
}, function() {
    $( ".hero_slider__slider" ).css("opacity", "");
    $( ".hero_slider__img img" ).css("transform", "")
    $( ".hero_slider__right" ).removeClass("hovered")
    $( ".hero__bg" ).css("background", "")
});
