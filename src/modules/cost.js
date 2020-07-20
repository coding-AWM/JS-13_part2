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
export default cost;