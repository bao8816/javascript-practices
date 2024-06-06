import NumericInput from '../components/NumericInput';

const RESULT_EQUAL = 'A is equal to B';
const RESULT_GREATER = 'A is greater than B';
const RESULT_LESS = 'A is less than B';

class App {
  get numberA() {
    return new NumericInput(this._getNumericInputLocator(1));
  }
  get numberB() {
    return new NumericInput(this._getNumericInputLocator(2));
  }
  _getNumericInputLocator(index) {
    return `tr:nth-child(${index}) .NumericInput`;
  }
  get result() {
    return cy.get('tr:nth-child(3) td');
  }
  clickOnReset() {
    return cy.get('.ResetButton').click();
  }
}

describe('Comparing Numbers', () => {
  const app = new App();

  beforeEach(() => {
    cy.visit('/10-component-communication');
  });

  it('should render with the correct values', () => {
    app.numberA.value.should('have.text', '0');
    app.numberB.value.should('have.text', '0');

    app.result.should('have.text', RESULT_EQUAL);
  });

  [
    ['Number A', () => app.numberA],
    ['Number B', () => app.numberB]
  ].forEach(([testGroup, getInput]) => {
    describe(testGroup, () => {
      it('should increase the value to 1', () => {
        getInput().clickOnIncrease();

        getInput().value.should('have.text', '1');
      });

      it('should decrease the value to 0', () => {
        getInput().clickOnIncrease();
        getInput().clickOnDecrease();

        getInput().value.should('have.text', '0');
      });
    });
  });

  describe('Result', () => {
    beforeEach(() => {
      // set A = 2 and B = 2
      app.numberA.clickIncrease().clickIncrease();
      app.numberB.clickIncrease().clickIncrease();
    });

    describe('When increasing A', () => {
      it('should be A > B', () => {
        app.numberA.clickIncrease();

        app.result.should('have.text', RESULT_GREATER);
      });

      it('should be A = B', () => {
        app.numberB.clickIncrease();
        app.numberA.clickIncrease();

        app.result.should('have.text', RESULT_EQUAL);
      });

      it('should be A < B', () => {
        app.numberB.clickIncrease();

        app.result.should('have.text', RESULT_LESS);
      });
    });

    describe('When decreasing A', () => {
      it('should be A > B', () => {
        app.numberA
          .clickIncrease()
          .clickIncrease()
          .clickDecrease();

        app.result.should('have.text', RESULT_GREATER);
      });

      it('should be A = B', () => {
        app.numberA.clickIncrease().clickDecrease();

        app.result.should('have.text', RESULT_EQUAL);
      });

      it('should be A < B', () => {
        app.numberA.clickDecrease();

        app.result.should('have.text', RESULT_LESS);
      });
    });

    describe('When increasing B', () => {
      it('should be A > B', () => {
        app.numberB
          .clickDecrease()
          .clickDecrease()
          .clickIncrease();

        app.result.should('have.text', RESULT_GREATER);
      });

      it('should be A = B', () => {
        app.numberB.clickDecrease().clickIncrease();

        app.result.should('have.text', RESULT_EQUAL);
      });

      it('should be A < B', () => {
        app.numberB.clickIncrease().clickIncrease();

        app.result.should('have.text', RESULT_LESS);
      });
    });

    describe('When decreasing B', () => {
      it('should be A > B', () => {
        app.numberB.clickDecrease();

        app.result.should('have.text', RESULT_GREATER);
      });

      it('should be A = B', () => {
        app.numberB.clickIncrease().clickDecrease();

        app.result.should('have.text', RESULT_EQUAL);
      });

      it('should be A < B', () => {
        app.numberB
          .clickIncrease()
          .clickIncrease()
          .clickDecrease();

        app.result.should('have.text', RESULT_LESS);
      });
    });
  });

  describe('Reset', () => {
    it('should reset the numbers to 0', () => {
      app.numberA.clickIncrease();
      app.numberB.clickIncrease();
      app.clickOnReset();

      app.numberA.value.should('have.text', '0');
      app.numberB.value.should('have.text', '0');
    });

    it('should reset the Result', () => {
      app.numberA.clickIncrease();
      app.clickOnReset();

      app.result.should('have.text', RESULT_EQUAL);
    });
  });
});
