window.addEventListener('DOMContentLoader', function () {
  'use strict';

  //'это таймер
  function countTimer(deadLine) {
    let timerHours = document.getElementById('timer-hours');
    let timerMinutes = document.getElementById('timer-minutes');
    let timerSeconds = document.getElementById('timer-seconds');
    let dateStop = new Date(deadLine).getTime();
    let dateNow = new Date().getTime();

    console.log(dateStop);
    console.log(dateNow);
  }

  countTimer('5 july 2020');
});