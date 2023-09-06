const vpTouch = window.matchMedia('(pointer: coarse)');

const parallaxIt = (target, movement, mouse, rect)=> {
  if(target.dataset.mouseParallax === 'rotate') {
    target.classList.add('is-active');

    gsap.to(target, {
      rotateX: (mouse.x - rect.width) / rect.width * (movement/2.5),
      rotateY: (mouse.y - rect.height) / rect.height * movement,
      duration: 0.4,
      ease: 'Power1.inOut',
    });
  } else {
    gsap.to(target, {
      x: (mouse.x - rect.width) / rect.width * movement,
      y: (mouse.y - rect.height) / rect.height * movement,
      duration: 0.4,
      ease: 'Power1.inOut',
    });
  }
};

const initMouseParallax = () => {
  const parallax = gsap.utils.toArray('[data-mouse-parallax]');
  let shift;

  if(!parallax.length || vpTouch.matches) {
    return;
  }

  const body = document.querySelector('body');

  let rect = body.getBoundingClientRect();
  let mouse = {x: 0, y: 0, moved: false};

  const handleMouseMove = (evt) => {
    mouse.moved = true;
    mouse.x = evt.clientX - rect.left;
    mouse.y = evt.clientY - rect.top;
  };

  gsap.ticker.add(() => {
    if(mouse.moved) {
      parallax.forEach((item, index)=> {
        if(((index+1) % 2) == 0) {
          shift = 20;
        } else {
          shift = -20;
        }
        parallaxIt(item, shift, mouse, rect);
      });
    }
    mouse.moved = false;
  });

  body.addEventListener('mousemove', handleMouseMove);
};

export { initMouseParallax };