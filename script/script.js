'use strict';

let hello = document.querySelector('.hello');
let present = document.querySelector('.present');
let nowTime = document.querySelector('.now-time');
let xMas = document.querySelector('.x-mas');


let dateNow = new Date();
let neeYear = new Date(2021, 0, 1);
let timeRemaining = (neeYear - dateNow) / 1000;
let seconds = Math.floor(timeRemaining % 60);
let minutes = Math.floor((timeRemaining / 60) % 60);
let hours = Math.floor(timeRemaining / 60 / 60);
let days = Math.floor(timeRemaining / 60 / 60 / 24);

setInterval(function update() {
  if (dateNow.getHours() > 0 || dateNow.getHours() > 22) {
    hello.textContent = 'Доброе утро';
  } else if (dateNow.getHours() > 12) {
    hello.textContent = 'Добрый день';
  } else if (dateNow.getHours() > 18) {
    hello.textContent = 'Добрый вечер';
  }

  switch (dateNow.getDay()) {
    case 1: 
    present.textContent = 'Сегодня понедельник';
    break;
    case 2: 
    present.textContent = 'Сегодня вторник';
    break;
    case 3: 
    present.textContent = 'Сегодня среда';
    break;
    case 4: 
    present.textContent = 'Сегодня четверг';
    break;
    case 5: 
    present.textContent = 'Сегодня пятница';
    break;
    case 6: 
    present.textContent = 'Сегодня суббота';
    break;
    case 7: 
    present.textContent = 'Сегодня воскресенье';
    break;
  }

  nowTime.textContent = 'Текущее время: ' + dateNow.toLocaleTimeString('en');

  xMas.textContent = 'До Нового Года осталось ' + days + ' дня';
}, 1000);
