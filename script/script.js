window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //'это таймер
  function countTimer(deadLine) {
    let timerHours = document.getElementById('timer-hours');
    let timerMinutes = document.getElementById('timer-minutes');
    let timerSeconds = document.getElementById('timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadLine).getTime();
      let dateNow = new Date().getTime();
      let timeRemaining = (dateStop - dateNow) / 1000;
      let seconds = Math.floor(timeRemaining % 60);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let hours = Math.floor(timeRemaining / 60 / 60);
      return {
        timeRemaining,
        seconds,
        minutes,
        hours,
      };
    }
    
    //let days = Math.floor(timeRemaining / 60 / 60 / 24);// если нужны дни
    setInterval(function updateClock() {
      let timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
    }, 1000);
    
  }

  countTimer('5 july 2020');
  // setInterval()
});