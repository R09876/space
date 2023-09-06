import Splitting from '../vendor/splitting';
import {initMouseParallax} from '%components%/parallax/parallax';
import {initScrollTo} from '%components%/nav/nav';


window.addEventListener('DOMContentLoaded', () => {
  Splitting();
  initMouseParallax();
  initScrollTo();
});
