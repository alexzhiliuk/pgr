import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


const swiperHero = new Swiper('#certificatesSlider', {
    // loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 1000,
    freeMode: true,

    breakpoints: {
        1200: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        }
    },

    navigation: {
        nextEl: '.certificates__slider-btn-next',
        prevEl: '.certificates__slider-btn-prev',
    },

    
});
