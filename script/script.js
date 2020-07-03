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
	countTimer('5 july 2020');

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

});
