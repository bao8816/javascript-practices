export default class NumericInput {
    //create NumericInput component as follows:
    //       <!-- Mockup : begin -->
    //       <span class="NumericInput">
    //         <button class="NumericInput-button" disabled>
    //           <i class="fas fa-minus"></i>
    //         </button>
    //         <span class="NumericInput-value">0</span>
    //         <button class="NumericInput-button">
    //           <i class="fas fa-plus"></i>
    //         </button>
    //       </span>
    //       <!-- Mockup : end -->

    /**
     * @param {number} value
     *
     */
    constructor(value= 0) {
        this.value = value;
        this.element = document.createElement('span');
        this.element.className = 'NumericInput';
        this.element.innerHTML = `
            <button class="NumericInput-button" disabled>
                <i class="fas fa-minus"></i>
            </button>
            <span class="NumericInput-value">${this.value}</span>
            <button class="NumericInput-button">
                <i class="fas fa-plus"></i>
            </button>
        `;
        this.element.addEventListener('click', this.onClick.bind(this));
        this.element.querySelector('.NumericInput-button:nth-child(1)').disabled = this.value === 0;
    }

    //onClick method:
    /**
     * @param {MouseEvent} event
     *
     */
    onClick(event) {
        const button = event.target.closest('button');
        // console.log(event.target);
        if (!button) {
            return;
        }
        if (button.matches('.NumericInput-button:nth-child(1)')) {
            this.value--;
        } else {
            this.value++;
        }
        this.element.querySelector('.NumericInput-value').textContent = this.value;
        this.element.querySelector('.NumericInput-button:nth-child(1)').disabled = this.value === 0;
    }
}
