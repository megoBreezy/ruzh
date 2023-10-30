class CurrencyButtonManager {
    constructor() {
        this.buttons = document.querySelectorAll('.currency-btn');
        this.addClickListeners();
    }

    addClickListeners() {
        this.buttons.forEach((button) => {
            button.addEventListener('click', () => {
                this.handleButtonClick(button);
            });
        });
    }

    handleButtonClick(clickedButton) {
        let cont = clickedButton.closest('.currency-list')
        let btnGroup = cont.querySelectorAll('.currency-btn')
        btnGroup.forEach((btn) => {
            btn.classList.remove('active');
        });
        clickedButton.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const currencyButtonManager = new CurrencyButtonManager();
});