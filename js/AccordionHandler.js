class Accordion {
    constructor() {
        this.accordionHeaders = document.querySelectorAll('.accordion__header');
        this.activeClass = 'active';
        this.bindEvents();
    }

    bindEvents() {
        this.accordionHeaders.forEach((header) => {
            header.addEventListener('click', () => {
                this.toggleAccordion(header);
            });
        });
    }

    toggleAccordion(clickedHeader) {
        const body = clickedHeader.nextElementSibling;

        if (clickedHeader.classList.contains(this.activeClass)) {
            clickedHeader.classList.remove(this.activeClass);
            body.classList.remove('active');
        } else {
            clickedHeader.classList.add(this.activeClass);
            const height = body.querySelector('.accordion__inner').scrollHeight + 'px';
            body.classList.add('active');
        }
    }
}

const accordion = new Accordion();