class ProductPreviewSlider {
  constructor() {
    this.initProductPreviweSlider();
  }

  initProductPreviweSlider() {
    const productCont = document.querySelector('.js-product-previwe-slider');
    if (!productCont) return;

    const thumb = productCont.querySelector('.product-thumb-slider .swiper');
    const full = productCont.querySelector('.product-full-slider .swiper');
    const scrollbar = productCont.querySelector('.product-thumb-slider .swiper-scrollbar');

    this.productThumb = new Swiper(thumb, {
      slidesPerView: 2,
      spaceBetween: 9,
      speed: 800,
      loop: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      scrollbar: {
        el: scrollbar,
        draggable: true,
      },
    });

    this.productFull = new Swiper(full, {
      slidesPerView: 1,
      spaceBetween: 5,
      loop: true,
      speed: 800,
      effect: 'fade',
      thumbs: {
        swiper: this.productThumb,
      },
    });
  }
}

// Usage
document.addEventListener('DOMContentLoaded', () => {
  const productSlider = new ProductPreviewSlider();
});
