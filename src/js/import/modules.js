import {unitBurgerToggle} from '%modules%/header/header';
import {stepsAnimation} from '%modules%/steps/steps';
import {initAboutUsAnimation} from '%modules%/about-us/about-us';
import {addServicesAnimation} from '%modules%/add-services/add-services';
import {initLoading} from '%modules%/loading/loading';
import {initBookingAnimation} from '%modules%/booking/booking';


window.addEventListener('DOMContentLoaded', () => {
  unitBurgerToggle();
  stepsAnimation();
  initAboutUsAnimation();
  addServicesAnimation();
  initBookingAnimation();

  window.addEventListener('load', () => {
    initLoading();
  });
});