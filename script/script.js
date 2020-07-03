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
    const popupContent = document.querySelector('.popup-content');
    console.dir('popupContent: ', popupContent);
    const popUpBtn = document.querySelectorAll('.popup-btn');
    let clientWidth = document.documentElement.clientWidth;
    let count = 0;

    popUpBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popUp.style.display = 'block';
        clientWidth = document.documentElement.clientWidth;
        if (clientWidth > 768) {
          moveMenu();
        }
      });
    });

    // popUpClose.addEventListener('click', () => {
    //   popUp.style.display = 'none';
    //   count = 0;
    // }); //ненужен так как перенесли в обработчик ниже
    popUp.addEventListener('click', () => {
      let target = event.target;

      if (target.classList.contains ('popup-close')) {
        popUp.style.display = 'none';
        count = 0;
      } else {
        target = target.closest('.popup-content');

        if (!target) {
          popUp.style.display = 'none';
          count = 0;
        }
      }


    });

    const moveMenu = () => {
      count +=0.01;
      popupContent.style.opacity = count;
      if (count < 1) {
        setTimeout(moveMenu, 5);
      }
    }

  };
  togglePopUp();

  
});