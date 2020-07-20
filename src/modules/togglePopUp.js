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
export default togglePopUp;
