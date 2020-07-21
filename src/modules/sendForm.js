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

			const phoneNumber = function () {
				// this.value = this.value.replace(/[\da-zA-Z]/g, '');
				if (this.value.length < 18) {
					this.style.backgroundColor = 'red';
				} else {
					this.style.backgroundColor = '';
				}
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
					if (event.type == "blur" && this.value.length < 15) {
						this.value = "";
						this.style.backgroundColor = '';
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
			if (target.matches('.form-phone')) {
				target.addEventListener('input', phoneNumber);
			}


		});

		ourForm.addEventListener('submit', event => {
			event.preventDefault();
			ourForm.appendChild(statusMessage);
			statusMessage.textContent = loadMessage;

			const formData = new FormData(ourForm);
			const body = {};

			formData.forEach((val, key) => {
				body[key] = val;
			});

			postData(body)
				.then(response => {
					if (response.status !== 200) {
						throw new Error('status network not 200!');
					}
					statusMessage.textContent = successMessage;
				})
				.catch(error => {
					console.log(error);
					statusMessage.textContent = errorMessage;
				});

			const inputs = ourForm.querySelectorAll('input');

			inputs.forEach(val => {
				val.value = '';
			});
		});
	};

	sendEachForm(form[0]);
	sendEachForm(form[1]);
	sendEachForm(form[2]);

	const postData = body =>

		fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/json'
			},
			body: JSON.stringify(body)
		});
};
export default sendForm;