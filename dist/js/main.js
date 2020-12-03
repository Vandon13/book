	'use strict';
	
	const btn = document.querySelectorAll('.hero__button');
	const modal = document.querySelector('.modal-bg');
	const btnClose = document.querySelector('.modal__close');

	btn.forEach(function (i) {
		i.addEventListener('click', function () {
		modal.classList.add('modal-bg_active');
	});
	});

	btnClose.addEventListener('click', function () {
		modal.classList.remove('modal-bg_active');
	});