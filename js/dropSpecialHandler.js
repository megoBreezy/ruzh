class ToggleClass {
  constructor(btnClass, targetClass) {
    this.btn = document.querySelector(`.${btnClass}`);
    this.target = document.querySelector(`.${targetClass}`);
    this.btn.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    this.btn.classList.toggle("active");
    this.target.classList.toggle("active");
  }
}

const toggleSpecialClass = new ToggleClass("btn-drop-special", "drop-special");