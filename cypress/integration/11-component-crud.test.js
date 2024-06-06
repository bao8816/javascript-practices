class AddItemForm {
  get input() {
    return this._get('input');
  }
  setInput(text) {
    this.input.clear().type(text);
    return this;
  }
  clickAdd() {
    this._get('button').click();
    return this;
  }
  _get(selector) {
    return cy.get(`.AddItemForm ${selector}`);
  }
}

class List {
  get items() {
    return this._get('.ListItem td:first-child');
  }
  getItem(index) {
    const getItem = () => this._get('.ListItem').eq(index);
    const getButton = name => getItem().contains(name);
    return {
      get input() {
        return getItem().find('input');
      },
      setTitle(title) {
        this.input.clear().type(title);
        return this;
      },
      clickEdit() {
        getButton('EDIT').click();
        return this;
      },
      clickDelete() {
        getButton('DELETE').click();
        return this;
      },
      clickCancel() {
        getButton('CANCEL').click();
        return this;
      },
      clickSave() {
        getButton('SAVE').click();
        return this;
      }
    };
  }
  _get(selector) {
    return cy.get(`.List ${selector}`);
  }
}

class ExportView {
  get content() {
    return cy.get('.JsonContent');
  }
  clickExport() {
    cy.get('section:nth-child(3) button').click();
    return this;
  }
}

const ITEMS = [
  { id: 1, title: 'Blandit imperdiet' },
  { id: 2, title: 'Tempor nec' },
  { id: 3, title: 'Elit torquent' },
  { id: 4, title: 'Tortor litora' },
  { id: 5, title: 'Ligula viverra' }
];

const ITEM_TITLES = ITEMS.map(item => item.title);

function deleteAllItems(list) {
  for (let i = ITEM_TITLES.length - 1; i >= 0; i--) {
    list.getItem(i).clickDelete();
  }
}

const updateItem = (index, listView, title) => {
  const item = listView.getItem(index);
  item.clickEdit();

  item.setTitle(title);
  item.clickSave();
};

describe('CRUD App', () => {
  const addItemForm = new AddItemForm();
  const listView = new List();
  const exportView = new ExportView();

  beforeEach(() => {
    cy.visit('/11-component-crud');
  });

  describe('Add item', () => {
    it('should add the new item to the list', () => {
      const title = 'New item';
      addItemForm.setInput(title).clickAdd();

      listView.items.last().should('have.text', title);
    });

    it('should clear the textbox', () => {
      addItemForm.setInput('New item').clickAdd();

      addItemForm.input.should('have.value', '');
    });
  });

  describe('Display items', () => {
    it('should display the items', () => {
      ITEM_TITLES.forEach((title, index) => {
        listView.items.eq(index).should('have.text', title);
      });
    });
  });

  describe('Edit items', () => {
    it('should switch to Edit mode when clicking on the EDIT button', () => {
      const item = listView.getItem(1).clickEdit();

      item.input.should('be.visible').should('have.value', ITEM_TITLES[1]);
    });

    it('should cancel editing the selected item when clicking on the CANCEL button', () => {
      const item = listView
        .getItem(1)
        .clickEdit()
        .clickCancel();

      item.input.should('not.exist');
    });

    it('should save the editing item when clicking on the SAVE button', () => {
      const updatedTitle = 'Updated title';
      updateItem(1, listView, updatedTitle);

      listView.items.eq(1).should('have.text', updatedTitle);
    });
  });

  describe('Delete items', () => {
    it('should delete the selected item when clicking on the DELETE button', () => {
      const item = listView.getItem(2).clickDelete();

      listView.items.should('have.length', 4);
      listView.items.should('not.contain', ITEM_TITLES[2]);
    });

    it('should delete all the items', () => {
      deleteAllItems(listView);

      listView.items.should('have.length', 0);
    });
  });

  describe('Export items', () => {
    it('should export the initial items', () => {
      exportView.clickExport();

      const json = JSON.stringify(ITEMS, null, 2);
      exportView.content.should('have.text', json);
    });

    it('should export an empty array when the list is empty', () => {
      deleteAllItems(listView);

      exportView.clickExport();

      exportView.content.should('have.text', '[]');
    });

    it('shoud contain the newly added item', () => {
      const title = 'New item';
      addItemForm.setInput(title).clickAdd();

      exportView.clickExport();

      exportView.content.should('contain', title);
    });

    it('should contain the updated item', () => {
      const updatedTitle = 'Updated title';
      updateItem(1, listView, updatedTitle);

      exportView.clickExport();

      exportView.content.should('contain', updatedTitle);
    });

    it('should not contain the deleted item', () => {
      listView.getItem(1).clickDelete();

      exportView.clickExport();

      exportView.content.should('not.contain', ITEM_TITLES[1]);
    });
  });
});
