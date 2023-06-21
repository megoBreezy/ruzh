//select
if(document.querySelector('.js-select')) {
  document.querySelectorAll('.js-select').forEach((el) => {
    let settings = {
      create: false,
      controlInput: null,
      allowEmptyOption: true,
    };
    if (el) {
      new TomSelect(el, settings);
    }
  });
}

//datepicker-single
if(document.querySelector('.js-rangepicker')) {
  (function () {
    Datepicker.locales.ru = {
      days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
      daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      today: "Сегодня",
      clear: "Очистить",
      format: "dd.mm.yyyy",
      weekStart: 1,
      monthsTitle: 'Месяцы'
    };
  }());

  const rangePickerEl = document.querySelector('.js-rangepicker');
  const rangepicker = new DateRangePicker(rangePickerEl, {
    format: 'dd.mm.yy (D)',
    autohide: false,
    language: 'ru',
  }); 
}

//js-rooms-slider
if(document.querySelector('.js-rooms-slider')) {
  var expertsSlider = new Swiper(".js-rooms-slider  .swiper", {
    slidesPerView: 1.3,
    loop: true,
    speed: 800,
    watchSlidesProgress: true,
    spaceBetween: 10,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '.js-rooms-slider .swiper-button-next',
      prevEl: '.js-rooms-slider .swiper-button-prev',
    },
    breakpoints: {
      310: {
        scrollbar: {
          el: ".js-rooms-slider .swiper-scrollbar",
          draggable: true,
        },
      },
      568: {
        spaceBetween: 16,
        slidesPerView: 2.5,
        scrollbar: {
          el: ".js-rooms-slider .swiper-scrollbar",
          draggable: true,
        },
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 3,
        scrollbar: {
          el: ".js-rooms-slider .swiper-scrollbar",
          draggable: true,
        },
      },
      1200: {
        spaceBetween: 10,
        slidesPerView: 3,
      }
    }
  });
}

//js-pass-slider
if(document.querySelector('.js-pass-slider')) {
  var expertsSlider = new Swiper(".js-pass-slider .swiper", {
    slidesPerView: 1.6,
    loop: true,
    speed: 800,
    watchSlidesProgress: true,
    spaceBetween: 16,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '.js-pass-slider .swiper-button-next',
      prevEl: '.js-pass-slider .swiper-button-prev',
    },
    breakpoints: {
      310: {
        scrollbar: {
          el: ".js-pass-slider .swiper-scrollbar",
          draggable: true,
        },
      },
      568: {
        spaceBetween: 16,
        slidesPerView: 2.5,
        scrollbar: {
          el: ".js-pass-slider .swiper-scrollbar",
          draggable: true,
        },
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 3,
        scrollbar: {
          el: ".js-pass-slider .swiper-scrollbar",
          draggable: true,
        },
      },
      1024: {
        spaceBetween: 10,
        slidesPerView: 4,
      }
    }
  });
}

//js-reviews-slider 
if(document.querySelector('.js-reviews-slider')) {
  var expertsSlider = new Swiper(".js-reviews-slider .swiper", {
    slidesPerView: 1.2,
    loop: true,
    speed: 800,
    watchSlidesProgress: true,
    spaceBetween: 10,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '.js-reviews-slider .swiper-button-next',
      prevEl: '.js-reviews-slider .swiper-button-prev',
    },
    breakpoints: {
      310: {
        scrollbar: {
          el: ".js-reviews-slider .swiper-scrollbar",
          draggable: true,
        },
      },
      568: {
        spaceBetween: 16,
        slidesPerView: 2.5,
        scrollbar: {
          el: ".js-reviews-slider .swiper-scrollbar",
          draggable: true,
        },
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 3,
        scrollbar: {
          el: ".js-reviews-slider .swiper-scrollbar",
          draggable: true,
        },
      },
      1200: {
        spaceBetween: 10,
        slidesPerView: 3,
      }
    }
  });
}

//btn-reservation
if(document.querySelector('.btn-reservation')) {
  const reservationBtn = document.querySelector('.btn-reservation'),
  reservationDrop = document.querySelector('.reservation');

  reservationBtn.addEventListener('click', function(e){
    e.preventDefault();
    reservationDrop.classList.toggle('active');
  });

  document.addEventListener('click', function(e) {
    if(!e.target.closest('.reservation')) {
      reservationDrop.classList.remove('active');
    }
  })
}

//nav__item-toggle
if(document.querySelector('.nav__item-toggle')) {
  const toggleBtns = document.querySelectorAll('.nav__item-toggle .nav__link');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();

      const btnCont = this.closest('.nav__item-toggle'),
      drop = btnCont.querySelector('.nav__drop');

      if(btnCont.classList.contains('active')) {
        btnCont.classList.remove('active');
        drop.style.maxHeight = null;
      } else {
        btnCont.classList.add('active');
        drop.style.maxHeight = drop.scrollHeight + 16 + 'px';
      }
    })
    
  });
}

//btn-menu
if(document.querySelector('.btn-menu')) {
  const menuBtn = document.querySelector('.btn-menu'),
  menu = document.querySelector('.mobile-menu'),
  closeMenu = document.querySelector('.mobile-menu__close'),
  body = document.body;
  
  menuBtn.addEventListener('click', function(e){
    e.preventDefault;
    menu.classList.add('active');
    body.classList.add('menu-opened');
  });

  closeMenu.addEventListener('click', function(e){
    e.preventDefault;
    menu.classList.remove('active');
    body.classList.remove('menu-opened');
  });
}

if(document.querySelector('.reservation') && window.innerWidth > 960) {
  var reservationBlock = document.querySelector('.reservation');
  var header = document.querySelector('.header');
  var reservationBottom = reservationBlock.getBoundingClientRect().bottom + window.scrollY;
  
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset;

    if (scrollTop > reservationBottom) {
      reservationBlock.classList.add('fixed');
      header.classList.add('header-small');
    } else {
      reservationBlock.classList.remove('fixed');
      header.classList.remove('header-small');
    }
  });
}

if(document.querySelector('.header-contacts__btn-drop')) {
  const contactsDropBtns = document.querySelectorAll('.header-contacts__btn-drop');

  contactsDropBtns.forEach(contactsDropBtn => {
    contactsDropBtn.addEventListener('click', ()=> {
      const contactsBody = contactsDropBtn.closest('.header-contacts__body'),
      contactsDrop = contactsBody.querySelector('.header-contacts__drop');

      if(contactsBody.classList.contains('active')) {
        contactsBody.classList.remove('active');
        contactsDrop.style.maxHeight = null;
      } else {
        contactsBody.classList.add('active');
        contactsDrop.style.maxHeight = contactsDrop.scrollHeight + 'px';
      }
    });
  });
}