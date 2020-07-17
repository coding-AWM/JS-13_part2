window.addEventListener('DOMContentLoaded', () => {

	//'это таймер
	const countTimer = deadLIne => {
		const timerHours = document.getElementById('timer-hours');
		const timerMinutes = document.getElementById('timer-minutes');
		const timerSeconds = document.getElementById('timer-seconds');

		const idInterval = setInterval(() => {
			const timer = getTimeRemaining();
			timerHours.textContent = setZero(timer.hours);
			timerMinutes.textContent = setZero(timer.minutes);
			timerSeconds.textContent = setZero(timer.seconds);
		}, 1000);

		function getTimeRemaining() {
			const dateStop = new Date(deadLIne).getTime();
			const dateNow = new Date().getTime();
			const timeRemaining = (dateStop - dateNow) / 1000;
			const seconds = Math.floor(timeRemaining % 60);
			const minutes = Math.floor((timeRemaining / 60) % 60);
			const hours = Math.floor(timeRemaining / 60 / 60);
			if (timeRemaining < 0) {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
				clearInterval(idInterval);
			} else {
				return {
					timeRemaining,
					seconds,
					minutes,
					hours,
				};

			}
		}





		function setZero(item) {
			if (item < 10) {
				return '0' + item;
			} else {
				return item;
			}
		}
	};
	countTimer('20 july 2020');

	// меню

	const toggleMenu = () => {
		const menu = document.querySelector('menu');

		document.addEventListener('click', () => {
			const target = event.target;

			if (target.closest('.menu')) {
				menu.classList.toggle('active-menu');
			}

			if (target.classList.contains('close-btn')) {
				menu.classList.toggle('active-menu');
			}

			if (target.closest('.active-menu>ul>li')) {
				menu.classList.toggle('active-menu');
			}
		});



	};
	toggleMenu();

	//дале будет ПопАп
	const togglePopUp = () => {
		const popUp = document.querySelector('.popup');
		const popupContent = document.querySelector('.popup-content');
		const popUpBtn = document.querySelectorAll('.popup-btn');
		const clientWidth = document.documentElement.clientWidth;

		let count = 0;
		const moveMenu = () => {
			count += 0.01;
			popupContent.style.opacity = count;
			if (count < 1) {
				setTimeout(moveMenu, 5);
			}
		};

		popUpBtn.forEach(elem => {
			elem.addEventListener('click', () => {
				popUp.style.display = 'block';
				if (clientWidth > 768) {
					moveMenu();
				}
			});
		});


		popUp.addEventListener('click', () => {
			let target = event.target;
			if (target.classList.contains('popup-close')) {
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



	};
	togglePopUp();

	//ТАБЫ
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header');
		const tab = tabHeader.querySelectorAll('.service-header-tab');
		const tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};

		tabHeader.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.service-header-tab'); // если не нашел, то идёт выше и ищет у родителя.

			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}

				});
			}
		});
	};
	tabs();

	//слайдер

	const slider = () => {
		const slides = document.querySelectorAll('.portfolio-item');
		const btns = document.querySelectorAll('.portfolio-btn');
		const slider = document.getElementById('all-progects');
		const portfolioDots = document.querySelector('.portfolio-dots');

		let curentSlide = 0;
		let interval;

		const getDot = () => {
			const newDot = document.createElement('li');
			newDot.classList.add('dot');
			portfolioDots.append(newDot);
		};
		for (let i = 0; i < slides.length; i++) {
			getDot();
		}

		const dots = document.querySelectorAll('.dot');
		dots[0].classList.add('dot-active');

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const autoPlaySlides = () => {
			prevSlide(slides, curentSlide, 'portfolio-item-active');
			prevSlide(dots, curentSlide, 'dot-active');
			curentSlide++;

			if (curentSlide >= slides.length) {
				curentSlide = 0;
			}

			nextSlide(slides, curentSlide, 'portfolio-item-active');
			nextSlide(dots, curentSlide, 'dot-active');
		};

		const startSlides = (time = 3000) => {
			interval = setInterval(autoPlaySlides, time);
		};

		const stopSlides = () => {
			clearInterval(interval);
		};

		slider.addEventListener('click', (event => {
			event.preventDefault();
			const target = event.target;

			if (!target.matches('.portfolio-btn, .dot')) {
				return;
			}
			prevSlide(slides, curentSlide, 'portfolio-item-active');
			prevSlide(dots, curentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				curentSlide++;
				if (curentSlide >= slides.length) {
					curentSlide = 0;
				}
			} else if (target.matches('#arrow-left')) {
				curentSlide--;
				if (curentSlide < 0) {
					curentSlide = slides.length - 1;
				}
			} else if (target.matches('.dot')) {
				dots.forEach((elem, index) => {
					if (elem === target) {
						curentSlide = index;
					}
				});
			}


			nextSlide(slides, curentSlide, 'portfolio-item-active');
			nextSlide(dots, curentSlide, 'dot-active');
		}));

		slider.addEventListener('mouseover', event => { //mouseenter не подойдёт
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				stopSlides();
			}
		});

		slider.addEventListener('mouseout', event => { //mouseleave не подойдёт
			if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) {
				startSlides();
			}
		});
		startSlides(2000);
	};

	slider();

	// расчёт стоимости
	const cost = () => {
		const inputCost = document.querySelectorAll('.calc-item'); //Надо потом попробовать перевести на родителя
		const calcBlock = document.querySelector('.calc-block');

		calcBlock.addEventListener('input', event => {
			let target = event.target;
			target = target.closest('.calc-item');
			if (target) {
				target.value = target.value.replace(/\D/g, '');
			}
		});
	};
	cost();

	//дата картинки

	const dataImg = () => {
		const command = document.getElementById('command');
		let mainSrc;
		command.addEventListener('mouseover', event => {
			let target = event.target;
			target = target.closest('.command__photo');
			mainSrc = event.target.src;
			if (target) {
				target.src = target.dataset.img;
			}
		});

		command.addEventListener('mouseout', event => {
			let target = event.target;
			target = target.closest('.command__photo');
			if (target) {
				target.src = mainSrc;
			}
		});

	};
	dataImg();

	//калькулятор работ

	const calculator = (price = 100) => {
		const calcBlock = document.querySelector('.calc-block');
		const calcType = document.querySelector('.calc-type');
		const calcSquare = document.querySelector('.calc-square');
		const calcDay = document.querySelector('.calc-day');
		const calcCount = document.querySelector('.calc-count');
		const totalValue = document.getElementById('total');

		const countSum = () => {
			let total = 0,
				countValue = 1,
				dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value;
			const squareValue = +calcSquare.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}

			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}

			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
			}

			totalValue.textContent = total;
		};

		calcBlock.addEventListener('change', event => {
			const target = event.target;
			if (target.matches('select') || target.matches('input')) {
				countSum();
			}


		});
	};
	calculator(100);

	//отправка аякс = форм

	const sendForm = () => {
		const errorMessage = 'Что то не так пошло...';
		const loadMessage = 'Загрузка...';
		const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
		const form = document.getElementsByTagName('form');
		const statusMessage = document.createElement('div');

		const sendEachForm = ourForm => {

			ourForm.addEventListener('input', event => {
				const target = event.target;
				const noShowNumber = function () {
					this.value = this.value.replace(/[\da-zA-Z]/g, '');
				};

				function maskPhone(selector, masked = '+7 (___) ___-__-__') {
					const elems = document.querySelectorAll(selector);

					function mask(event) {
						const keyCode = event.keyCode;
						const template = masked,
							def = template.replace(/\D/g, ""),
							val = this.value.replace(/\D/g, "");
						// console.log(template);
						let i = 0,
							newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
						i = newValue.indexOf("_");
						if (i != -1) {
							newValue = newValue.slice(0, i);
						}
						let reg = template.substr(0, this.value.length).replace(/_+/g,
							a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
						reg = new RegExp("^" + reg + "$");
						if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
							this.value = newValue;
						}
						if (event.type == "blur" && this.value.length < 5) {
							this.value = "";
						}
					}

					for (const elem of elems) {
						elem.addEventListener("input", mask);
						elem.addEventListener("focus", mask);
						elem.addEventListener("blur", mask);
					}
				}

				if (target.matches('.form-name') || target.matches('.mess')) {
					target.addEventListener('input', noShowNumber);
				}
				if (target.matches('.form-phone')) {
					target.addEventListener('input', maskPhone('.form-phone'));
				}
			});

			ourForm.addEventListener('submit', event => {
				event.preventDefault();
				ourForm.appendChild(statusMessage);
				statusMessage.textContent = loadMessage;

				const formData = new FormData(ourForm);
				const body = {};

				//перебор значений
				// for (let val of formData.entries()) {
				// 	body[val[0]] = val[1];
				// }

				// либо такой перербор значений
				formData.forEach((val, key) => {
					body[key] = val;
				});
				postData(body,
					() => {
						statusMessage.textContent = successMessage;
					},
					error => {
						console.log(error);
						statusMessage.textContent = errorMessage;
					});

				const inputs = ourForm.querySelectorAll('input');
				inputs.forEach((val) => {
					val.value = '';
				});
			});

		};

		sendEachForm(form[0]);
		sendEachForm(form[1]);
		sendEachForm(form[2]);

		const postData = (body, outputData, errorData) => {
			const request = new XMLHttpRequest();
			request.addEventListener('readystatechange', () => {
				if (request.readyState !== 4) {
					return;
				}

				if (request.status === 200) {
					outputData();
				} else {
					errorData(request.status);
				}
			});

			request.open('POST', './server.php');
			//если отправка формы то так как ниже, если сервер понимает, то лдучше так
			// request.setRequestHeader('Content-Type', 'multipart/form-data');

			//если отпрака через джейсон то как ниже
			request.setRequestHeader('Content-Type', 'multipart/json');

			//если отправка формы то так как ниже, если сервер понимает, то лдучше так
			// request.send(formData);

			//если отпрака через джейсон то как ниже
			request.send(JSON.stringify(body));
			// let clear = () => {
			// 	console.log(formName);
			// 	formName.textContent = 'bvdcb';
			// }
			// clear();

		};
		// console.log();
		// formName.textContent = 'bvdcb';
	};
	sendForm();

});