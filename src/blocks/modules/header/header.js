import { locoScroll } from '../../../js/vendor';

const vp1023 = window.matchMedia('(max-width: 1023px)');

const unitBurgerToggle = () => {
  const header = document.querySelector('header');

  if(!header) {
    return;
  }

  const body = document.querySelector('body');
  const burger = header.querySelector('.burger');

  burger.addEventListener('click', () => {
    header.classList.toggle('is-active');

    if(header.classList.contains('is-active')) {
      locoScroll.stop();
      body.classList.add('scroll-lock');
    } else {
      locoScroll.start();
      body.classList.remove('scroll-lock');
    }
  });

  if(vp1023.matches) {
    const links = header.querySelectorAll('.nav__link');

    links.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('is-active');
      });
    });
  }
};

export {unitBurgerToggle};