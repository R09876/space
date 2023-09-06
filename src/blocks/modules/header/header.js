import { locoScroll } from '../../../js/vendor';

const vp1023 = window.matchMedia('(max-width: 1023px)');

const unitBurgerToggle = () => {
  const header = document.querySelector('header');

  if(!header) {
    return;
  }

  const burger = header.querySelector('.burger');

  burger.addEventListener('click', () => {
    header.classList.toggle('is-active');

    if(header.classList.contains('is-active')) {
      locoScroll.stop();
    } else {
      locoScroll.start();
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