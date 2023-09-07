const vpTouch = window.matchMedia('(pointer: coarse)');

const initBookingAnimation = () => {
  const container = document.querySelector('[data-section="booking"]');

  if (!container) {
    return;
  }

  const img = container.querySelector('.booking img');

  gsap.timeline({
    paused: true,
    scrollTrigger: {
      scroller: '[data-scroll-container]',
      trigger: container,
      start: '40% 70%',
      end: '80% 70%',
      scrub: vpTouch.matches ? 1.5 : true,
    }
  }).to(img, {filter: 'grayscale(0)', ease: 'power1.in'});

};

export { initBookingAnimation };