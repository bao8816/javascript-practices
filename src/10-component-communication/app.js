import NumericInput from './NumericInput.js';

class App {
    render() {
        const numericInput = new NumericInput();
        this.app = document.getElementById('app');
        this.app.append(numericInput.element);
    }
}

new App().render();
