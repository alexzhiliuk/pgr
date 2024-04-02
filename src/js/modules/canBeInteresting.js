import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperCanBeInteresting = new Swiper('.can-be-interesting-slider__container', {
    slidesPerView: 1.15,
    spaceBetween: 24,
    speed: 1500,
    freeMode: true,

    navigation: {
        nextEl: '.can-be-interesting-slider__btn_next',
        prevEl: '.can-be-interesting-slider__btn_prev',
    },

    breakpoints: {
        1366: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2.8,
        },
        576: {
            slidesPerView: 2.1,
        },
        480: {
            slidesPerView: 1.6,
        },
    }
    
});




