import './vendor/swiper';
import {gsap} from './vendor/gsap.min';
import {ScrollTrigger} from './vendor/ScrollTrigger.min';
import LocomotiveScroll from './vendor/locomotive-scroll.min';

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

locoScroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector('[data-scroll-container]').style.transform ? 'transform' : 'fixed'
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.defaults({ scroller: '[data-scroll-container]' });

const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'flip',


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


export {locoScroll};