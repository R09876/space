const vpTouch = window.matchMedia('(pointer: coarse)');

const initAboutUsAnimation = () => {
  const container = document.querySelector('[data-section="about-us"]');

  if (!container) {
    return;
  }

  const cards = gsap.utils.toArray('.about-card');

  cards.forEach((card, index)=> {
    const text = card.querySelector('.about-card__text');
    const img = card.querySelector('.about-card__img');

    let y = 0;
    let yt = 0;
    let x = 0;
    let start;
    let end;

    if(vpTouch.matches) {
      y = '20%';
      yt = '-10%';
      start ='start 70%';
      end = '80% 30%';
    } else {
      y = '20%';
      x = '15%';
      yt = '10%';
      start ='-30% 70%';
      end = '110% 30%';

      if((index + 1) % 2 === 0) {
        y = '20%';
        x = '-15%';
      }
    }

    gsap.timeline({
      paused: true,
      scrollTrigger: {
        scroller: '[data-scroll-container]',
        trigger: card,
        start: start,
        end: end,
        scrub: vpTouch.matches? true : 1.5,
      }
    }).to(text, {y: yt, ease: 'power1.out'}, 0).to(img, {y: y, x: x, ease: 'power1.out'}, 0);
  });

};

export {initAboutUsAnimation};