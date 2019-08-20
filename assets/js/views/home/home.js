$(document).ready(function () {

	/*========================= Variables =========================*/
	/* Animation */
	var homeBtnDown = $('#btnDown');
	var win = $(window);
	var line1 = $('#line');
	var line2 = $('#line2');
	var recTab = $('#rectTab');
	var svgCircle = $('.svgCircle circle');
	var svgText = $('.svgCircle text');
	/* Home */
	var homeBtnLogin = $('#btnLogin');
	var homeBtnRegister = $('#btnRegister');
	var modalBtnClose = $('.btnCloseModal');
	/* Modal Register */
	var registerModal = $('#registerModal');
	var registerIcon = $('#registerIcon');
	var registerTitle = $('#registerTitle');
	var registerMsg = $('#registerMsg');
	var registerInput1 = $('#registerInput1');
	var registerInput2 = $('#registerInput2');
	var registerDivCheck = $('#registerDivCheck');
	var registerCheckError = $('#registerCheckError');
	var registerCheckbox = $('#registerCheckbox');
	var registerLinkNumber = $('#registerLinkNumber');
	var registerBtn = $('#registerBtn');
	var registerDivLogin = $('#registerDivLogin');
	var registerLinkLogin = $('#registerLinkLogin');
	var registerDivResend = $('#registerDivResend');
	var registerLinkResend = $('#registerLinkResend');
	var registerLinkBack = $('#registerLinkBack');
	/* Modal Login */
	var loginModal = $('#loginModal');
	var loginIcon = $('#loginIcon');
	var loginInput1 = $('#loginInput1');
	var loginInput2 = $('#loginInput2');
	var loginLinkRecovery = $('#loginLinkRecovery');
	var loginLinkNumber = $('#loginLinkNumber');
	var loginBtn = $('#loginBtn');
	var loginLinkRegister = $('#loginLinkRegister');
	var loginLinkBack = $('#loginLinkBack');
	/* Modal Recovery Password */
	var recoveryModal = $('#recoveryModal');
	var recoveryIcon = $('#recoveryIcon');
	var recoveryTitle = $('#recoveryTitle');
	var recoveryMsg = $('#recoveryMsg');
	var recoveryDivQuestion = $('#recoveryDivQuestion');
	var recoveryQuestion = $('#recoveryQuestion');
	var recoveryInput1 = $('#recoveryInput1');
	var recoveryInput2 = $('#recoveryInput2');
	var recoveryDivError = $('#recoveryDivError');
	var recoveryErrorTitle = $('#recoveryErrorTitle');
	var recoveryErrorMsg = $('#recoveryErrorMsg');
	var recoveryBtn = $('#recoveryBtn');
	var recoveryDivResend = $('#recoveryDivResend');
	var recoveryLinkResend = $('#recoveryLinkResend');
	var recoveryLinkBack = $('#recoveryLinkBack');

	/*========================= Methods =========================*/
	/* Button Down */
	homeBtnDown.click(function () {
		var aux = $(this).data();
		if (aux.value == 'up') {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
		} else {
			$('html, body').animate({
				scrollTop: $('#home').height()
			}, 800);
		}
	});
	/* Scroll Animation */
	win.scroll(function () {
		if ($(this).scrollTop() > 0) {
			line1.removeClass('lineAnimation');
			line2.addClass('lineAnimation');
			recTab.addClass('borderContentTabShow');
			homeBtnDown.removeClass('rotateBtn2').addClass('rotateBtn');
			changeData(homeBtnDown, 'value', 'up');
		} else {
			line1.addClass('lineAnimation');
			line2.removeClass('lineAnimation');
			recTab.removeClass('borderContentTabShow');
			homeBtnDown.removeClass('rotateBtn').addClass('rotateBtn2');
			changeData(homeBtnDown, 'value', 'down');
		}
	});
	/* Social Network - Mobiles */
	if (win.width() < 500) {
		$('#socialNetwork').removeClass('offset-11 col-1 position-fixed').addClass('col-12');
		$('#socialNetwork>div').removeClass('ml-auto').addClass('mx-auto');
		$('#socialNetwork nav').removeClass('nav flex-column').addClass('list-inline');
		$('#socialNetwork a').removeClass('nav-link').addClass('list-inline-item');
		recTab.addClass('borderContentTabShow');
	}
	/* Circle Animation */
	if (win.width() < 991) {
		svgCircle.attr('r', '35%');
		svgText.attr('x', '34%');
		svgText.attr('y', '68%');
	}
	if ((win.width() > 992) && (win.width() < 1199)) {
		svgCircle.attr('r', '40%');
		svgText.attr('x', '38%');
		svgText.attr('y', '64%');
	}
	/* Gee¿neral Methods */
	function openModal(modal) {
		modal.removeClass("closedModal").addClass("openedModal");
		clearInputs();
		clearErrors();
	}

	function closeModal(modal) {
		modal.addClass("closedModal").removeClass("openedModal");
		clearInputs();
		clearErrors();
	}

	function clearInputs() {
		$('input').val("");
		//registerCheckbox.attr("checked",""); 
		$('#registerDivCheck :checkbox').attr('checked', false);
	}

	function clearErrors() {
		$('input').removeClass('inputError');
		hideElement(registerCheckError, 'd');
		hideElement(recoveryDivError, 'v');
		// Recovery
		recoveryTitle.text('Recuperar contraseña');
		changeIcon(recoveryIcon, 'login', 'icono-recuperar-contraseña');
		changeIcon(recoveryBtn, 'login', 'boton-recuperar-contraseña-siguiente');
		hideElement(recoveryInput1, 'd');
	}

	function showElement(element, type) {
		if (type == 'v') {
			element.removeClass('invisible').addClass('visible');
		}
		if (type == 'd') {
			element.removeClass('d-none');
		}
	}

	function hideElement(element, type) {
		if (type == 'v') {
			element.addClass('invisible').removeClass('visible');
		}
		if (type == 'd') {
			element.addClass('d-none');
		}
	}

	function changeIcon(element, folder, name) {
		element.attr('src', 'assets/img/views/' + folder + '/' + name + '.png');
	}

	function changePlaceholder(element, text) {
		element.attr('placeholder', text);
	}

	function includeInputError(element) {
		element.addClass('inputError');
	}

	function changeData(element, dat, value) {
		element.removeData();
		element.data(dat, value);
		//alert(value)
	}
	/* Home - Register */
	homeBtnRegister.click(function () {
		clearInputs();
		clearErrors();
		openModal(registerModal);
		changeIcon(registerIcon, 'register', 'icono-registro');
		hideElement(registerTitle, 'd');
		hideElement(registerMsg, 'd');
		showElement(registerInput1, 'd');
		comboboxPhone(registerInput1, true);
		changePlaceholder(registerInput2, 'Contraseña');
		showElement(registerDivCheck, 'd');
		showElement(registerDivCheck, 'v');
		showElement(registerLinkNumber, 'd');
		changeIcon(registerBtn, 'register', 'play-registro');
		showElement(registerDivLogin, 'd');
		hideElement(registerDivResend, 'd');
		hideElement(registerLinkBack, 'd');
		changeData(registerBtn, 'register', 'phone');
	});
	/* Register - Not Telephone */
	registerLinkNumber.click(function () {
		clearInputs();
		clearErrors();
		comboboxPhone(registerInput1, false);
		hideElement(registerLinkNumber, 'd');
		changeIcon(registerBtn, 'register', 'play-registro');
		changeData(registerBtn, 'register', 'email');
		showElement(registerLinkBack, 'd');
	});
	/* Register - Play and Confirm */
	registerBtn.click(function () {
		var aux = $(this).data();
		switch (aux.register) {
			case 'phone': // Validate Telephone
				if (registerInput1.val() == "" || registerInput2.val() == "") {
					includeInputError(registerInput1);
					includeInputError(registerInput2);
					changeIcon(registerBtn, 'register', 'icono-error-llave-pantalla-1');
					changeData(registerBtn, 'register', 'phone');
				} else if (registerCheckbox.is(':checked') == false) {
					clearErrors();
					showElement(registerCheckError, 'd');
					showElement(registerCheckError, 'v');
					changeIcon(registerBtn, 'register', 'icono-error-llave-pantalla-1');
					changeData(registerBtn, 'register', 'phone');
				} else {
					changeData(registerBtn, 'register', 'sms');
					registerBtn.click();
				}
				break;
			case 'email': // Validate Email
				if (registerInput1.val() == "" || registerInput2.val() == "") {
					includeInputError(registerInput1);
					includeInputError(registerInput2);
					changeIcon(registerBtn, 'register', 'icono-error-llave-pantalla-1');
					changeData(registerBtn, 'register', 'email');
				} else if (registerCheckbox.is(':checked') == false) {
					clearErrors();
					showElement(registerCheckError, 'd');
					showElement(registerCheckError, 'v');
					changeIcon(registerBtn, 'register', 'icono-error-llave-pantalla-1');
					changeData(registerBtn, 'register', 'email');
				} else {
					changeData(registerBtn, 'register', 'sms');
					registerBtn.click();
				}
				break;
			case 'sms': // Validate SMS
				clearErrors();
				registerBtn.addClass('mt-3');
				registerBtn.addClass('pt-3');
				changeIcon(registerIcon, 'register', 'icono-registro-llave');
				showElement(registerTitle, 'd');
				registerTitle.text('¡Listo!');
				showElement(registerMsg, 'd');
				registerMsg.text('¡Su registro ha sido satisfactorio! Ingrese el código de validación enviado a su número telefónico.')
				comboboxPhone(registerInput1, false);
				hideElement(registerInput1, 'd');
				changePlaceholder(registerInput2, 'Código');
				hideElement(registerDivCheck, 'd');
				hideElement(registerCheckError, 'd');
				hideElement(registerLinkNumber, 'd');
				changeIcon(registerBtn, 'register', 'boton-registro-confirmar');
				changeData(registerBtn, 'register', 'confirm');
				hideElement(registerDivLogin, 'd');
				showElement(registerDivResend, 'd');
				showElement(registerLinkBack, 'd');
				break;
			case 'confirm': // Validate Confirm
				if (registerInput2.val() == "") {
					changeIcon(registerIcon, 'register', 'icono-codigo-incorrecto');
					registerTitle.text('Código incorrecto');
					registerMsg.text('Por favor ingrese el código enviado a su teléfono o correo electrónico registrado')
					includeInputError(registerInput2);
					changeIcon(registerBtn, 'register', 'boton-error-registro-confirmar');
					changeData(registerBtn, 'register', 'confirm');
				} else {
					closeModal(registerModal);
					registerBtn.removeClass('mb-3');
					registerBtn.removeClass('pb-3');
				}
				break;
		}
		clearInputs();
	});
	/* Register - Login */
	registerLinkLogin.click(function () {
		closeModal(registerModal);
		homeBtnLogin.click();
	});
	/* Register - Back */
	registerLinkBack.click(function () {
		closeModal(registerModal);
		homeBtnRegister.click();
	});
	/* Register - Resend */
	registerLinkResend.click(function () {
		//alert('Código enviado nuevamente a su teléfono o correo electrónico.');
		changeData(registerBtn, 'register', 'sms');
		registerBtn.click();
	});
	/* Home - Login */
	homeBtnLogin.click(function () {
		clearInputs();
		clearErrors();
		openModal(loginModal);
		comboboxPhone(loginInput1, true);
		changePlaceholder(loginInput2, 'Contraseña');
		showElement(loginLinkNumber, 'd');
		changeIcon(loginBtn, 'login', 'play-iniciar-sesion');
		changeData(loginBtn, 'login', 'phone');
		hideElement(loginLinkBack, 'd');
	});
	/* Login - Not Telephone */
	loginLinkNumber.click(function () {
		clearInputs();
		clearErrors();
		comboboxPhone(loginInput1, false);
		hideElement(loginLinkNumber, 'd');
		changeIcon(loginBtn, 'login', 'play-iniciar-sesion');
		changeData(loginBtn, 'login', 'email');
		showElement(loginLinkBack, 'd');
	});
	/* Login - Play */
	loginBtn.click(function () {
		var aux = $(this).data();
		if (aux.login == 'phone') { // Validate Telephone
			if (loginInput1.val() == "" || loginInput2.val() == "") {
				includeInputError(loginInput1);
				includeInputError(loginInput2);
				changeIcon(loginBtn, 'login', 'boton-inicio-de-sesion-datos-invalidos');
				changeData(loginBtn, 'login', 'phone');
			} else {
				closeModal(loginModal);
			}
		} else if (aux.login == 'email') { // Validate Email
			if (loginInput1.val() == "" || loginInput2.val() == "") {
				includeInputError(loginInput1);
				includeInputError(loginInput2);
				changeIcon(loginBtn, 'login', 'boton-inicio-de-sesion-datos-invalidos');
				changeData(loginBtn, 'login', 'email');
			} else {
				closeModal(loginModal);
			}
		}
		clearInputs();
	});
	/* Login - Register */
	loginLinkRegister.click(function () {
		closeModal(loginModal);
		homeBtnRegister.click();
	});
	/* Login - Back */
	loginLinkBack.click(function () {
		closeModal(loginModal);
		homeBtnLogin.click();
	});
	/* Login - Recovery Password */
	loginLinkRecovery.click(function () {
		clearInputs();
		clearErrors();
		closeModal(loginModal);
		openModal(recoveryModal);
		recoveryMsg.text('Ingrese su número de teléfono o correo electrónico registrado.');
		hideElement(recoveryInput1, 'd');
		changePlaceholder(recoveryInput2, 'Número de teléfono o correo');
		recoveryInput2.attr('type', 'text');
		hideElement(recoveryDivResend, 'd');
		changeData(recoveryLinkBack, 'back', 'login');
		changeData(recoveryBtn, 'recovery', 'phone-email');
	});
	/* Recovery - Next and Finalize */
	recoveryBtn.click(function () {
		clearErrors();
		var aux = $(this).data();
		switch (aux.recovery) {
			case 'phone-email': // Validate Email or Phone
				recoveryMsg.text('Ingrese su número de teléfono o correo electrónico registrado.');
				hideElement(recoveryDivQuestion, 'v');
				changePlaceholder(recoveryInput2, 'Número de teléfono o correo');
				recoveryInput2.attr('type', 'text');
				hideElement(recoveryDivResend, 'd');
				changeData(recoveryLinkBack, 'back', 'login');
				if (recoveryInput2.val() == "") {
					changeIcon(recoveryIcon, 'login', 'icono-error-recuperar-contraseña');
					includeInputError(recoveryInput2);
					showElement(recoveryDivError, 'v');
					recoveryErrorTitle.text('Datos inválidos');
					recoveryErrorMsg.text('El número de teléfono o correo no se encuentra registrado.');
					changeIcon(recoveryBtn, 'login', 'boton-error-recuperar-contraseña-siguiente');
					changeData(recoveryBtn, 'recovery', 'phone-email');

				} else {
					recoveryMsg.text('Ingresa la respuesta a la pregunta secreta.')
					showElement(recoveryDivQuestion, 'v');
					recoveryQuestion.text('Marca de carro favorita');
					changePlaceholder(recoveryInput2, 'Respuesta de pregunta secreta');
					changeData(recoveryBtn, 'recovery', 'question');
					changeData(recoveryLinkBack, 'back', 'phone-email');
				}
				break;
			case 'question': // Validate Question
				recoveryMsg.text('Ingresa la respuesta a la pregunta secreta.')
				showElement(recoveryDivQuestion, 'v');
				recoveryQuestion.text('Marca de carro favorita');
				changePlaceholder(recoveryInput2, 'Respuesta de pregunta secreta');
				hideElement(recoveryDivResend, 'd');
				changeData(recoveryLinkBack, 'back', 'phone-email');
				if (recoveryInput2.val() == "") {
					changeIcon(recoveryIcon, 'login', 'icono-error-recuperar-contraseña');
					includeInputError(recoveryInput2);
					showElement(recoveryDivError, 'v');
					recoveryErrorTitle.text('Datos inválidos');
					recoveryErrorMsg.text('La respuesta ingresada no es correcta.');
					changeIcon(recoveryBtn, 'login', 'boton-error-recuperar-contraseña-siguiente');
					changeData(recoveryBtn, 'recovery', 'question');

				} else {
					recoveryMsg.text('Ingresa el código de seguridad enviado a su número de teléfono o correo registrado.')
					hideElement(recoveryDivQuestion, 'v');
					recoveryInput2.attr('type', 'password');
					changePlaceholder(recoveryInput2, 'Código');
					changeData(recoveryBtn, 'recovery', 'code');
					showElement(recoveryDivResend, 'd');
					changeData(recoveryLinkBack, 'back', 'question');
				}
				break;
			case 'code': // Validate Code
				recoveryMsg.text('Ingresa el código de seguridad enviado a su número de teléfono o correo registrado.')
				hideElement(recoveryDivQuestion, 'v');
				recoveryInput2.attr('type', 'password');
				changePlaceholder(recoveryInput2, 'Código');
				showElement(recoveryDivResend, 'd');
				changeData(recoveryLinkBack, 'back', 'question');
				if (recoveryInput2.val() == "") {
					changeIcon(recoveryIcon, 'login', 'icono-error-recuperar-contraseña');
					includeInputError(recoveryInput2);
					showElement(recoveryDivError, 'v');
					recoveryErrorTitle.text('Código inválido');
					recoveryErrorMsg.text('Al tercer intento su usuario sera bloqueado temporalmente.');
					changeIcon(recoveryBtn, 'login', 'boton-error-recuperar-contraseña-siguiente');
					changeData(recoveryBtn, 'recovery', 'code');
				} else {
					changeIcon(recoveryIcon, 'login', 'icono-codigo-verificado');
					recoveryTitle.text('Código verificado');
					recoveryMsg.text('Por favor introduce una nueva contraseña.')
					showElement(recoveryInput1, 'd');
					changePlaceholder(recoveryInput1, 'Nueva contraseña');
					recoveryInput1.attr('type', 'password');
					changePlaceholder(recoveryInput2, 'Confirmar contraseña');
					changeIcon(recoveryBtn, 'login', 'boton-recuperar-contraseña-finalizar');
					changeData(recoveryBtn, 'recovery', 'finalize');
					hideElement(recoveryDivResend, 'd');
					changeData(recoveryLinkBack, 'back', 'code');
				}
				break;
			case 'finalize': // Validate New Password
				changeIcon(recoveryIcon, 'login', 'icono-codigo-verificado');
				recoveryTitle.text('Código verificado');
				recoveryMsg.text('Por favor introduce una nueva contraseña.')
				showElement(recoveryInput1, 'd');
				changePlaceholder(recoveryInput1, 'Nueva contraseña');
				recoveryInput1.attr('type', 'password');
				changePlaceholder(recoveryInput2, 'Confirmar contraseña');
				changeIcon(recoveryBtn, 'login', 'boton-recuperar-contraseña-finalizar');
				hideElement(recoveryDivResend, 'd');
				changeData(recoveryLinkBack, 'back', 'code');
				if (recoveryInput1.val() == "" || recoveryInput2.val() == "" || (recoveryInput1.val() != recoveryInput2.val())) {
					includeInputError(recoveryInput1);
					includeInputError(recoveryInput2);
					showElement(recoveryDivError, 'v');
					hideElement(recoveryErrorTitle, 'd');
					recoveryErrorMsg.text('Las contraseñas ingresas no coinciden, por favor intenta nuevamente.');
					changeIcon(recoveryBtn, 'login', 'boton-error-recuperar-contraseña-finalizar');
					changeData(recoveryBtn, 'recovery', 'finalize');
				} else {
					closeModal(recoveryModal);
				}
				break;
		}
		clearInputs();
	});
	/* Recovery - Back */
	recoveryLinkBack.click(function () {
		var aux = $(this).data();
		if (aux.back == 'login') {
			closeModal(recoveryModal);
			homeBtnLogin.click();
		} else {
			changeData(recoveryBtn, 'recovery', aux.back);
			recoveryBtn.click();
			clearErrors();
		}
	});
	/* Recovery - Resend */
	recoveryLinkResend.click(function () {
		alert('Código enviado nuevamente a su teléfono o correo electrónico.');
	});
	/* Button Close Modal */
	modalBtnClose.click(function () {
		closeModal(registerModal);
		closeModal(loginModal);
		closeModal(recoveryModal);
	});
	/* Input International Telephone  */
	function comboboxPhone(input, boolean) {
		if (boolean == true) {
			$('.formPhone > div').addClass('intl-tel-input');
			$('.formPhone > div').addClass('allow-dropdown');
			$('.formPhone .flag-container').removeClass('d-none');
			input.attr('type', 'tel');
			changePlaceholder(input, 'Número de teléfono');
			input.intlTelInput({
				initialCountry: "auto",
				geoIpLookup: function (callback) {
					$.get('https://ipinfo.io', function () {}, "jsonp").always(function (resp) {
						var countryCode = (resp && resp.country) ? resp.country : "";
						callback(countryCode);
					});
				},
				utilsScript: "assets/js/views/home/utils.js"
			});
		} else {
			$('.formPhone > div').removeClass('intl-tel-input');
			$('.formPhone > div').removeClass('allow-dropdown');
			$('.formPhone .flag-container').addClass('d-none');
			input.attr('type', 'email');
			changePlaceholder(input, 'Correo eléctronico');
			showElement(input, 'd');
		}
	}
});