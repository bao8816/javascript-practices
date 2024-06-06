import ProductList from './ProductList';

const product1 = {
  name: 'product 1',
  price: 1.99,
  isInStock: true
};

const product2 = {
  name: 'product 2',
  price: 2.99,
  isInStock: false
};

const product3 = {
  name: 'product 3',
  price: 4.99,
  isInStock: true
};

const productDoesNotExistError = 'The product does not exist';

describe('ProductList', () => {
  describe('add', () => {
    it('should add a product', () => {
      const list = new ProductList();
      list.add(product1.name, product1.price, product1.isInStock);
      expect(list.getById(1)).toEqual({ id: 1, ...product1 });
    });

    it('should return the product ID which is an auto-increment number', () => {
      const list = new ProductList();
      const id1 = list.add(product2.name, product2.price, product2.isInStock);
      const id2 = list.add(product3.name, product3.price, product3.isInStock);
      expect(id2).toBeGreaterThan(id1);
    });
  });

  describe('getById', () => {
    it('should return a product when the product exists', () => {
      const list = new ProductList();
      const id = list.add(product1.name, product1.price, product1.isInStock);
      expect(list.getById(id)).toEqual({ id, ...product1 });
    });

    it('should throw an error when the product does not exist', () => {
      const list = new ProductList();
      expect(() => list.getById(999)).toThrow(productDoesNotExistError);
    });
  });

  describe('getInStock', () => {
    it('should return products which are in stock', () => {
      const list = new ProductList();
      const id1 = list.add(product1.name, product1.price, product1.isInStock);
      list.add(product2.name, product2.price, product2.isInStock);
      const id3 = list.add(product3.name, product3.price, product3.isInStock);

      expect(list.getInStock()).toEqual([
        { id: id1, ...product1 },
        { id: id3, ...product3 }
      ]);
    });
  });

  describe('removeById', () => {
    it('should remove the product when the product exists', () => {
      const list = new ProductList();
      const id = list.add(product1.name, product1.price, product1.isInStock);
      list.removeById(id);
      expect(() => list.getById(1)).toThrow(productDoesNotExistError);
    });

    it('should throw an error when the product does not exist', () => {
      const list = new ProductList();
      expect(() => list.removeById(999)).toThrow(productDoesNotExistError);
    });
  });
});
