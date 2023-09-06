import { locoScroll } from '../../../js/vendor';

const initScrollTo = () => {
  const nav = document.querySelectorAll('nav');

  if(nav.length === 0) {
    return;
  }

  nav.forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
      const target = e.target;
  
      if(target.closest('.nav__link')) {
  
        const to = target.getAttribute('href');

  
        if(to[0] === '#') {
          e.preventDefault();
          locoScroll.scrollTo(to, true);
          locoScroll.start();
        }
      }
    });
  });
};

export {initScrollTo};