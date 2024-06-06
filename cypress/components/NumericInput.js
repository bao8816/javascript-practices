export default class NumericInput {
  constructor(selector) {
    this.selector = selector;
  }
  get value() {
    return this._get('.NumericInput-value');
  }
  _get(selector) {
    return cy.get(`${this.selector} ${selector}`);
  }
  get decreaseButton() {
    return this._getButton('-');
  }
  get increaseButton() {
    return this._getButton('+');
  }
  _getButton(type) {
    return this._get('.NumericInput-button').eq(type === '-' ? 0 : 1);
  }
  clickDecrease() {
    this.decreaseButton.click();
    return this;
  }
  clickIncrease() {
    this.increaseButton.click();
    return this;
  }
}
