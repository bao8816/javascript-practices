export default class NumericInput {
    //      <table>
    //         <tr>
    //           <th>Number A</th>
    //           <td>
    //             <span class="NumericInput">
    //               <button class="NumericInput-button">
    //                 <i class="fas fa-minus"></i>
    //               </button>
    //               <span class="NumericInput-value">2</span>
    //               <button class="NumericInput-button">
    //                 <i class="fas fa-plus"></i>
    //               </button>
    //             </span>
    //           </td>
    //         </tr>
    //
    //         <tr>
    //           <th>Number B</th>
    //           <td>
    //             <span class="NumericInput">
    //               <button class="NumericInput-button">
    //                 <i class="fas fa-minus"></i>
    //               </button>
    //               <span class="NumericInput-value">1</span>
    //               <button class="NumericInput-button">
    //                 <i class="fas fa-plus"></i>
    //               </button>
    //             </span>
    //           </td>
    //         </tr>
    //
    //         <tr>
    //           <th>Result</th>
    //           <td>A is greeter than B</td>
    //         </tr>
    //
    //         <tr>
    //           <td></td>
    //           <td><button class="ResetButton">Reset</button></td>
    //         </tr>
    //       </table>
    constructor(value_A = 0, value_B = 0) {
        this.valueA = value_A;
        this.valueB = value_B;
        this.result = 'A is equal to B';

        this.element = document.createElement('table');
        this.element.innerHTML = `
            <tr>
              <th>Number A</th>
              <td>
                <span class="NumericInput">
                  <button class="NumericInput-button">
                    <i class="fas fa-minus"></i>
                  </button>
                  <span class="NumericInput-value">${this.valueA}</span>
                  <button class="NumericInput-button">
                    <i class="fas fa-plus"></i>
                  </button>
                </span>
              </td>
            </tr>

            <tr>
              <th>Number B</th>
              <td>
                <span class="NumericInput">
                  <button class="NumericInput-button">
                    <i class="fas fa-minus"></i>
                  </button>
                  <span class="NumericInput-value">${this.valueB}</span>
                  <button class="NumericInput-button">
                    <i class="fas fa-plus"></i>
                  </button>
                </span>
              </td>
            </tr>

            <tr>
              <th>Result</th>
              <td>${this.result}</td>
            </tr>

            <tr>
              <td></td>
              <td><button class="ResetButton">Reset</button></td>
            </tr>
            `;

        this.element.addEventListener('click', this.onResult.bind(this));
        this.element.getElementsByClassName('NumericInput')[0].addEventListener('click', this.onClickA.bind(this));
        this.element.getElementsByClassName('NumericInput')[1].addEventListener('click', this.onClickB.bind(this));
        this.element.getElementsByClassName('ResetButton')[0].addEventListener('click', this.onReset.bind(this));

        this.element.getElementsByTagName('tr')[0].querySelector('.NumericInput-button:nth-child(1)').disabled
            = this.valueA === 0;
        this.element.getElementsByTagName('tr')[1].querySelector('.NumericInput-button:nth-child(1)').disabled
            = this.valueB === 0;
    }

    onResult() {
        let newResult = '';

        if (this.valueA === this.valueB) {
            newResult = 'A is equal to B';
        }

        else if (this.valueA < this.valueB) {
            newResult = 'A is less than B';
        }

        else {
            newResult = 'A is greater than B';
        }

        this.element.getElementsByTagName('tr')[0].querySelector('.NumericInput-button:nth-child(1)').disabled
            = this.valueA === 0;
        this.element.getElementsByTagName('tr')[1].querySelector('.NumericInput-button:nth-child(1)').disabled
            = this.valueB === 0;

        this.element.getElementsByTagName('tr')[0].querySelector('.NumericInput-value').innerText = this.valueA;
        this.element.getElementsByTagName('tr')[1].querySelector('.NumericInput-value').innerText = this.valueB;

        this.element.getElementsByTagName('tr')[2].getElementsByTagName('td')[0].innerText = newResult;
    }

    onClickA(event) {
        const button = event.target.closest('button');
        if (!button) {
            return;
        }
        if (button.matches('.NumericInput-button:nth-child(1)')) {
            this.valueA--;
        }
        else {
            this.valueA++;
        }
    }

    onClickB(event) {
        const button = event.target.closest('button');
        if (!button) {
            return;
        }
        if (button.matches('.NumericInput-button:nth-child(1)')) {
            this.valueB--;
        }
        else {
            this.valueB++;
        }
    }

    onReset() {
        this.valueA = 0;
        this.valueB = 0;
    }
}

//There are still 4 test cases
