const vpTouch = window.matchMedia('(pointer: coarse)');

const addServicesAnimation = () => {
  const container = document.querySelector('.add-services');

  if(!container) {
    return;
  }

  gsap.timeline({
    paused: true,
    scrollTrigger: {
      scroller: '[data-scroll-container]',
      trigger: '.add-services__img',
      start: 'top 70%',
      end: 'top 30%',
      scrub: vpTouch.matches ? 1.5 : true,
    }
  }).to('.add-services__img img', {duration: 1, y:0, 'z-index': '1'}).set('.add-services__img', {overflow: 'visible'})

};

export {addServicesAnimation};