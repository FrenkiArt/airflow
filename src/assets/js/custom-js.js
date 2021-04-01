console.log('Hello from custom-js.js file');

/**
 * Эта функция выводит ширину вьюпорта тогда,
 * когда происходит изменение размера окна
 * @date 2021-02-09
 * @return {void}
 */

window.onresize = () => {
  setTimeout(() => {
    console.log(window.innerWidth);
  }, 1);
};

/* Загатовка для js в зависимости от ширины экрана */
if (window.matchMedia('(max-width: 640px)').matches) {
  // do functionality on screens smaller than 640px
} else {
  // Декстоп
}

/**
 * Если  при выборе бюджета кликнули на "Свой вариант",
 * то выводим дополнительный инпут для своего варианта.
 */
if (document.querySelector('.triger-self-variant')) {
  document.querySelectorAll('input[name="budget"]').forEach((input) => {
    input.addEventListener('change', (event) => {
      if (
        event.target.classList.contains('triger-self-variant') &&
        event.target.checked
      ) {
        document.querySelector('.for-self-variant').classList.remove('dn');
        document.querySelector('.for-self-variant input').required = true;
      } else {
        document.querySelector('.for-self-variant').classList.add('dn');
        document
          .querySelector('.for-self-variant input')
          .removeAttribute('required');
      }
    });
  });

  /* document
    .querySelector('.triger-self-variant')
    .addEventListener('input', (event) => {
      console.log(event.target.checked);
    }); */
}

if (document.querySelector('.contact-me')) {
  document.querySelector('.contact-me').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('open');
    document.querySelector('.contact-popup').classList.toggle('open');
  });

  window.addEventListener('click', clickOnWindowHandler);
}

/**
 * Эта функция отслеживает клик в любом месте объекта window.
 * @param {e} e Событие клика
 */
function clickOnWindowHandler(e) {
  /**
   * Если клик был не внутри попапа контактов и попап
   * контактов в это время открыт, то его следует закрыть.
   */
  if (
    !e.target.closest('.contact-me') &&
    document.querySelector('.contact-me.open')
  ) {
    document.querySelector('.contact-me').classList.remove('open');
    document.querySelector('.contact-popup').classList.remove('open');
  }
}
