class Accordion {
    constructor() {
        this.accordionHeaders = document.querySelectorAll('.accordion__header');
        this.accordionBodies = document.querySelectorAll('.accordion__body');
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

        this.accordionBodies.forEach((otherBody) => {
            const otherHeader = otherBody.previousElementSibling;
            if (otherHeader !== clickedHeader && otherHeader.classList.contains(this.activeClass)) {
                otherHeader.classList.remove(this.activeClass);
                otherBody.style.maxHeight = '0px';
            }
        });

        if (clickedHeader.classList.contains(this.activeClass)) {
            clickedHeader.classList.remove(this.activeClass);
            body.style.maxHeight = '0px';
        } else {
            clickedHeader.classList.add(this.activeClass);
            const height = body.querySelector('.accordion__inner').scrollHeight + 'px';
            body.style.maxHeight = height;
        }
    }
}

const accordion = new Accordion();