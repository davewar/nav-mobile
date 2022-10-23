const navToggle = document.querySelector('.nav-button');
const nav = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
	nav.classList.toggle('nav--visible');
});
