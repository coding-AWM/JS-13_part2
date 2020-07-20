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
export default toggleMenu;
