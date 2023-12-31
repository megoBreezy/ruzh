class Dropdown {
	constructor(selector) {
		this.dropdownBtns = document.querySelectorAll(selector);
		this.attachEvents();
	}

	attachEvents() {
		this.dropdownBtns.forEach(dropdownBtn => {
			dropdownBtn.addEventListener('click', this.toggleDropdown.bind(this));
		});
	}

	toggleDropdown(event) {
		event.preventDefault();
		const btnCont = event.currentTarget.closest('.js-dropdown-cont');
		const dropdown = btnCont.previousElementSibling;

		event.currentTarget.classList.toggle('active');
		dropdown.classList.toggle('active');
	}
}

const dropdown = new Dropdown('.js-dropdown-btn');
