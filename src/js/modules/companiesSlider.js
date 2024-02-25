import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


const swiperHero = new Swiper('.companies-slider', {
    spaceBetween: 60,
    allowTouchMove: false,

    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false, 
    },

    speed: 2500,
    slidesPerView: 8,

    breakpoints: {
        768: {
            speed: 7000,
        },
        480: {
            speed: 4000,
        },
        
    }, 
    
});



