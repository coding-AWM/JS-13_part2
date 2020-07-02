window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //'это таймер
  // function countTimer(deadLIne) {
  const countTimer = (deadLIne) => {
    let timerHours = document.getElementById('timer-hours');
    let timerMinutes = document.getElementById('timer-minutes');
    let timerSeconds = document.getElementById('timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadLIne).getTime();
      let dateNow = new Date().getTime();
      let timeRemaining = (dateStop - dateNow) / 1000;
      let seconds = Math.floor(timeRemaining % 60);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let hours = Math.floor(timeRemaining / 60 / 60);
      if (timeRemaining < 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        clearInterval(idInterval)
      } else {
        return {
          timeRemaining,
          seconds,
          minutes,
          hours,
        };

      }
    }

    //let days = Math.floor(timeRemaining / 60 / 60 / 24);// если нужны дни
    // let idInterval
    let idInterval = setInterval(function updateClock() {
      let timer = getTimeRemaining();
      timerHours.textContent = setZero(timer.hours);
      timerMinutes.textContent = setZero(timer.minutes);
      timerSeconds.textContent = setZero(timer.seconds);
    }, 1000);
    
    

    function setZero(item) {
      if (item < 10) {
        return '0' + item;
      } else {
        return item;
      }
    }
  }
  countTimer('5 july 2020');

  // меню

  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      // if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {
      //   menu.style.transform = 'translate(0)';
      // } else {
      //   menu.style.transform = 'translate(-100%)';
      // }
      // далее замена всего то выше на новый етод работы с классом
      menu.classList.toggle('active-menu');
    }


    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

  };
  toggleMenu();

  //дале будет ПопАп
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup');
    const popUpBtn = document.querySelectorAll('.popup-btn');
    const popUpClose = document.querySelector('.popup-close');

    popUpBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popUp.style.display = 'block';
      });
    });
    popUpClose.addEventListener('click', () => {
      popUp.style.display = 'none';
    });
  };
  togglePopUp();
  
});