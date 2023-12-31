class TreatmentSlider {
	constructor(selector) {
		this.selector = document.querySelector(selector);
		this.windowWidth = window.innerWidth;
		this.swiperInstance = null;
		this.initSlider();
		window.addEventListener('resize', this.manageSwiper.bind(this));
	}

	initSlider() {
		if (this.windowWidth <= 768) {
			const swiperSelector = this.selector.querySelector('.swiper');
			const scrollbar = this.selector.querySelector('.swiper-scrollbar');

			if (swiperSelector) {
				this.swiperInstance = new Swiper(swiperSelector, {
					slidesPerView: 1.2,
					speed: 800,
					watchSlidesProgress: true,
					spaceBetween: 10,
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
					},
				});
			}
		}
	}

	destroySlider() {
		if (this.swiperInstance !== null) {
			this.swiperInstance.destroy();
			this.swiperInstance = null;
		}
	}

	manageSwiper() {
		const newWindowWidth = window.innerWidth;
		if (newWindowWidth !== this.windowWidth) {
			this.windowWidth = newWindowWidth;
			if (this.windowWidth <= 768) {
				if (this.swiperInstance === null) {
					this.initSlider();
				}
			} else {
				this.destroySlider();
			}
		}
	}
}

const treatmentSlider = new TreatmentSlider('.js-treatment-slider');
const treatmentSlider3 = new TreatmentSlider('.js-treatment-slider-3');
const treatmentSlider5 = new TreatmentSlider('.js-treatment-slider-5');
