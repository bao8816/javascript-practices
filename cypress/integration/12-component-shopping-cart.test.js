import NumericInput from '../components/NumericInput';

class CartRow {
  constructor(selector) {
    this.selector = selector;
  }
  _get(selector) {
    return cy.get(`${this.selector} ${selector}`);
  }
  clickDelete() {
    return this._get('.CartCell-actions button').click();
  }
  get image() {
    return this._get('.CartItem img');
  }
  get name() {
    return this._get('.CartItem span');
  }
  get quantity() {
    return new NumericInput(`${this.selector} .NumericInput`);
  }
  get subtotal() {
    return this._get('.CartCell--subtotal');
  }
}

class Cart {
  get itemNames() {
    return cy.get('.CartItem span');
  }
  get total() {
    return cy.get('.Total-value');
  }
  getRow(index) {
    return new CartRow(`.CartListView .CartRow:nth-child(${index + 1})`);
  }
}

const CART_ROWS = [
  {
    name: 'Vinegar - Tarragon',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
    price: '$9.54',
    quantity: '1',
    subtotal: '$9.54'
  },
  {
    name: 'Cookie Trail Mix',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
    price: '$6.06',
    quantity: '2',
    subtotal: '$12.12'
  },
  {
    name: 'Cheese - Mozzarella',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
    price: '$9.29',
    quantity: '1',
    subtotal: '$9.29'
  }
];

const cart = new Cart();

const deleteAllItems = cart => {
  for (let i = CART_ROWS.length - 1; i >= 0; i--) {
    cart.getRow(i).clickDelete();
  }
};

describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.resetDB();
    cy.visit('/12-component-shopping-cart');
  });

  it('should display cart items', () => {
    CART_ROWS.forEach((product, index) => {
      const row = cart.getRow(index);

      row.image.should('have.attr', 'src', product.imageUrl);
      row.name.should('have.text', product.name);
      row.quantity.value.should('have.text', product.quantity);
      row.subtotal.should('have.text', product.subtotal);
    });
  });

  describe('Quantity', () => {
    it('should be increased', () => {
      const row = cart.getRow(0);
      row.quantity.clickIncrease();

      row.quantity.value.should('have.text', '2');
    });

    it('should be decreased', () => {
      const row = cart.getRow(1);
      row.quantity.clickDecrease();

      row.quantity.value.should('have.text', '1');
    });

    it('should not be decreased to 0', () => {
      const row = cart.getRow(1);
      row.quantity.clickDecrease();
      row.quantity.decreaseButton.click({ force: true });

      row.quantity.decreaseButton.should('be.disabled');
      row.quantity.value.should('have.text', '1');
    });
  });

  describe('Subtotal', () => {
    it('should be updated when increasing the quantity', () => {
      const row = cart.getRow(1);
      row.quantity.clickIncrease();

      row.subtotal.should('have.text', '$18.18');
    });

    it('should be updated when decreasing the quantity', () => {
      const row = cart.getRow(1);
      row.quantity.clickDecrease();

      row.subtotal.should('have.text', '$6.06');
    });
  });

  describe('Delete', () => {
    it('should delete the selected item', () => {
      cart.getRow(1).clickDelete();

      cart.itemNames.should('not.contain', CART_ROWS[1].title);
    });

    it('should delete all items', () => {
      deleteAllItems(cart);

      cart.itemNames.should('have.length', 0);
    });
  });

  describe('Total', () => {
    it('should be updated when an item is deleted from the cart', () => {
      cart.getRow(1).clickDelete();

      cart.total.should('have.text', '$18.83');
    });

    it('should be updated when all item are deleted from the cart', () => {
      deleteAllItems(cart);

      cart.total.should('have.text', '$0.00');
    });
  });

  describe('Persist cart items', () => {
    it('should persist the Quantity when increasing the Quantity of the selected item', () => {
      const row = cart.getRow(0);
      row.quantity.clickIncrease();

      cy.reload();

      row.quantity.value.should('have.text', '2');
    });

    it('should persist the Quantity when decreasing the Quantity of the selected item', () => {
      const row = cart.getRow(1);
      row.quantity.clickDecrease();

      cy.reload();

      row.quantity.value.should('have.text', '1');
    });

    it('should delete the selected item when clicking on the DELETE button', () => {
      cart.getRow(0).clickDelete();

      cy.reload();

      cart.itemNames.should('not.contain', CART_ROWS[0].title);
    });
  });
});
