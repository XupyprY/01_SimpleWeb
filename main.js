console.log("JavaScript file loaded successfully!");

console.log('Bro');

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onClick = function () {
	dropDownMenu.classList.toggle('open');
	const isOpen = dropDownMenu.classList.contains('open');

	toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}
