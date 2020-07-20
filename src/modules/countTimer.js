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
export default countTimer;
