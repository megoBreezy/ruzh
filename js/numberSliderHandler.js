class NumberSlider {
  constructor(selector) {
    this.selectors = document.querySelectorAll(selector);
    this.initSliders();
  }

  initSliders() {
    this.selectors.forEach((element) => {
      const swiperSelector = element.querySelector('.swiper');
      const nextButton = element.querySelector('.swiper-button-next');
      const prevButton = element.querySelector('.swiper-button-prev');
      const scrollbar = element.querySelector('.swiper-scrollbar');

      if (swiperSelector) {
        new Swiper(swiperSelector, {
          slidesPerView: 1.3,
          speed: 800,
          watchSlidesProgress: true,
          spaceBetween: 10,
          navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
          },
          breakpoints: {
            310: {
              scrollbar: {
                el: scrollbar,
                draggable: true,
              },
            },
            568: {
              spaceBetween: 16,
              slidesPerView: 1.5,
              scrollbar: {
                el: scrollbar,
                draggable: true,
              },
            },
            768: {
              spaceBetween: 16,
              slidesPerView: 2,
              scrollbar: {
                el: scrollbar,
                draggable: true,
              },
            },
            1100: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
          },
        });
      }
    });
  }
}

const numberSlider = new NumberSlider('.js-number-slider');
const articleSlider = new NumberSlider('.js-article-slider');