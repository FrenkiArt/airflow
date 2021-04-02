// Вендоры
import 'normalize.css';
import '../node_modules/svgxuse/svgxuse.min.js';
import Cleave from '../node_modules/cleave.js/dist/cleave.min.js';
import '../node_modules/cleave.js/dist/addons/cleave-phone.ru';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
// core version + navigation, pagination modules:
import SwiperCore, {Navigation, Pagination} from 'swiper/core';
// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

// Шрифты
// import './assets/fonts/blacklist/font.css';

// Миксины
import './views/mixins/mixins.scss';

// Стили для сайта
import './assets/styles/style.scss';

// Модули нашего проекта
//import './views/components/breadcrumbs/breadcrumbs.scss';
//import './views/components/buttons/button.scss';
import './views/components/social/social.scss';
import './views/components/first/first.scss';
import './views/components/slider/slider.scss';
import './views/components/puzzle-me/puzzle-me.scss';
import './views/components/uni-author/uni-author.scss';
import './views/components/footer/footer.scss';
import './views/components/form/form.scss';
import './views/components/header/header.scss';
//import './views/components/links/link.scss';
//import './views/components/menu/menu.scss';
//import './views/components/tabs/tabs.scss';
//import './views/components/tabs/tabs.js';
//import './views/components/cart/cart.scss';
//import './views/components/cart/cart.js';
//import './views/components/pagination/pagination.scss';
//import './views/components/popup/popup.scss';
//import {myPopup} from './views/components/popup/popup.js';

import './views/components/about/about.scss';
import './views/components/portfolio/portfolio.scss';

// Страницы
// import './views/components/pages/index.scss';

AOS.init({
  once: true,
  duration: 1500,
  anchorPlacement: 'center-bottom',
});

var cleave = new Cleave('.input-phone', {
  phone: true,
  phoneRegionCode: 'ru',
});

/* Про Попапы */
if (document.querySelector('[data-popup]')) {
  myPopup(document.querySelectorAll('[data-popup]'));
}

const swiper = new Swiper('.portfolio-slider', {
  /* slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4, */

  pagination: {
    el: '.slider__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      // return '<span class="' + className + '">' + (index + 1) + '</span>';
      return `<div class="${className}"> 
                <div class="wrap-circle">
                  <div class="circle"></div>
                </div> 
                <div class="wrap-number">
                  <div class="number">${index + 1}</div>
                </div>
              </div>`;
    },
  },

  breakpoints: {
    // when window width is >= 320px
    318: {
      slidesPerView: 1,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
  },
});

swiper.on('slideChange', function () {
  const pagCount = document
    .querySelector('.slider .swiper-pagination-bullet-active .number')
    .textContent.trim();

  const tripleTitleText = '0' + pagCount;

  document.querySelector('.slider .triple-title').textContent = tripleTitleText;
  document.querySelector(
    '.slider .triple-title'
  ).dataset.text = tripleTitleText;

  document.querySelectorAll('.slider .bg-img').forEach((img) => {
    img.style.opacity = 0;
  });

  if (document.querySelectorAll('.slider .bg-img')[pagCount - 1]) {
    document.querySelectorAll('.slider .bg-img')[
      pagCount - 1
    ].style.opacity = 1;
  }
});

const customJsScript = document.createElement('script');
customJsScript.type = 'text/javascript';
customJsScript.defer = true;
customJsScript.src = './assets/js/custom-js.js';

document.body.appendChild(customJsScript);
