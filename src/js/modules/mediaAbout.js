import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperHero = new Swiper('.article-slider__container', {
    slidesPerView: 1.15,
    spaceBetween: 24,
    speed: 1500,
    freeMode: true,

    navigation: {
        nextEl: '.article-slider__btn_next',
        prevEl: '.article-slider__btn_prev',
    },

    breakpoints: {
        1366: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3.2,
        },
        480: {
            slidesPerView: 2.2,
        },
    }
    
});




