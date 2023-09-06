const vpTouch = window.matchMedia('(pointer: coarse)');
const vpDesk = window.matchMedia('(min-width: 1024px)');
let windowWidth = window.innerWidth;

const addClass = (img) => {
  if(vpDesk.matches) {
    img.classList.add('is-small');
  } else {
    if(img.classList.contains('is-small')) {
      img.classList.remove('is-small');
    }
  }
};

const setHeight = (img,title,list) => {
  const height = window.innerHeight - title.getBoundingClientRect().height;
  if(height < 605) {
    img.style.height =`${height}px`;
    addClass(img);
    const listH = list.getBoundingClientRect().height;

    if(listH > height) {
      list.style = 'font-size: 10px;';
    } else {
      list.style = '';
    }
  } else {
    img.style.height = '';
  }
};


const addResize = (img,title,list) => {
  if(windowWidth !== window.innerWidth) {
    setHeight(img,title,list);
    windowWidth = window.innerWidth;
  }
};

const createAnimation = (container, steps, path, scale) => {
  let i = 0;


  gsap.timeline({paused: true, scrollTrigger: {
    trigger: container,
    scroller: '[data-scroll-container]',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const progressStep = 1 / steps.length;

      for(i=0; i < steps.length; i++) {
        const progress = i === 0 ? 0.002 : progressStep * i;
        const nextItemProgress = progress + progressStep;

        if (self.progress >= progress && self.progress < nextItemProgress) {
          path[i].setAttribute('clip-path', 'circle(50% at 50% 50%)');
          path[i].setAttribute('fill', '#036cca');
          steps[i].setAttribute('style', `transform: scale(${scale});color:#036cca`);
        }

        if (self.progress < progress && self.progress < nextItemProgress) {
          path[i].setAttribute('clip-path', 'circle(25% at 50% 50%)');
          path[i].setAttribute('fill', '#ffffff');
          steps[i].setAttribute('style', '');
        }
      }
    },
  }});
};


const stepsAnimation = () => {
  const container = document.querySelector('[data-section="steps"]');

  if(!container) {
    return;
  }


  const img = container.querySelector('.steps__consellation');
  const title = container.querySelector('.title');
  const list = container.querySelector('.steps__list');


  setHeight(img,title,list);

  window.addEventListener('resize', () => {
    addResize(img,title,list);
  });


  const path = gsap.utils.toArray('circle');
  const steps = gsap.utils.toArray('[data-step]');
  let scale = 1.7;

  if(vpTouch.matches) {
    scale = 1.02;
  }

  createAnimation(container, steps, path, scale);
};

export {stepsAnimation};