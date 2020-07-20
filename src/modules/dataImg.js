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
export default dataImg;
