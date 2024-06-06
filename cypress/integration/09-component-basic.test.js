import NumericInput from '../components/NumericInput';

describe('NumericInput', () => {
  const numericInput = new NumericInput('.NumericInput');

  beforeEach(() => {
    cy.visit('/09-component-basic');
  });

  it('should render with the initial value', () => {
    numericInput.value.should('have.text', '3');
  });

  it('should increase the value when clicking on the "Increase" button', () => {
    numericInput.clickIncrease();
    numericInput.value.should('have.text', '4');
  });

  it('should decrease the value when clicking on the "Decrease" button', () => {
    numericInput.clickDecrease();
    numericInput.value.should('have.text', '2');
  });

  it('should disable the "Decrease" button when the value is 0', () => {
    numericInput
      .clickDecrease()
      .clickDecrease()
      .clickDecrease();

    numericInput.decreaseButton.should('be.disabled');
  });
});
