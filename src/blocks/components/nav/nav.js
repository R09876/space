import { locoScroll } from '../../../js/vendor';

const initScrollTo = () => {
  const nav = document.querySelectorAll('nav');
  const body = document.querySelector('body');

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

          if(body.classList.contains('scroll-lock')) {
            body.classList.remove('scroll-lock');
      
            if(locoScroll) {
              locoScroll.start();
            }
          }

          locoScroll.scrollTo(to, true);
        }
      }
    });
  });
};

export {initScrollTo};