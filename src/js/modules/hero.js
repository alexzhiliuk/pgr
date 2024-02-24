import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


const swiperHero = new Swiper('.hero-swiper', {
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    allowTouchMove: true,

    autoHeight: true,

    breakpoints: {
        1366: {
            autoHeight: false,
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



