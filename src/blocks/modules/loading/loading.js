import { locoScroll } from '../../../js/vendor';

const initLoading = () => {
  const body = document.querySelector('body');
  const loading = document.querySelector('.loading');
  const intro = document.querySelector('.intro');

  if(!loading) {
    return;
  }

  if(locoScroll) {
    locoScroll.stop();
  }

  setTimeout(() => {
    if(body.classList.contains('scroll-lock')) {
      body.classList.remove('scroll-lock');

      if(locoScroll) {
        locoScroll.start();
      }
    }
  
    if(!loading.classList.contains('hidden')) {
      loading.classList.add('hidden');
    }

    if(intro && !intro.classList.contains('is-active')) {
      intro.classList.add('is-active');
    }
  }, 2000);
};

export {initLoading};