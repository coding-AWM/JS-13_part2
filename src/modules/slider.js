const slider = () => {
	const slides = document.querySelectorAll('.portfolio-item');
	const btns = document.querySelectorAll('.portfolio-btn'); // потом надо попробовать по индексу поработать
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
export default slider;
