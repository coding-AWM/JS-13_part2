// eslint-disable-next-line strict
'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import cost from './modules/cost';
import dataImg from './modules/dataImg';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

//'это таймер
countTimer('21 july 2020');

// меню
toggleMenu();

//дале будет ПопАп
togglePopUp();

//ТАБЫ
tabs();

//слайдер
slider();

// расчёт стоимости
cost();

//дата картинки
dataImg();

//калькулятор работ
calculator(100);

//отправка аякс = форм
sendForm();
