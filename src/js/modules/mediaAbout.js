import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperArticles = new Swiper('.article-slider__container:not(.article-slider__container_with-form)', {
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




const swiperArticlesWithForm = new Swiper('.article-slider__container_with-form', {
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
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3.2,
        },
        480: {
            slidesPerView: 2.2,
        },
    },

    
});
