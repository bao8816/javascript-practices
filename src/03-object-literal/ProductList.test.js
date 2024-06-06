import ProductList from './ProductList';

const product1 = {
  id: 1,
  name: 'product 1',
  price: 1.99,
  isInStock: true
};

const product2 = {
  id: 2,
  name: 'product 2',
  price: 2.99,
  isInStock: false
};

const product3 = {
  id: 3,
  name: 'product 3',
  price: 4.99,
  isInStock: true
};

const productDoesNotExistError = 'The product does not exist';

describe('ProductList', () => {
  describe('add', () => {
    it('should add a product', () => {
      ProductList.add(product1.name, product1.price, product1.isInStock);
      expect(ProductList.getById(1)).toEqual(product1);
    });

    it('should return the product ID which is an auto-increment number', () => {
      const id1 = ProductList.add(
        product2.name,
        product2.price,
        product2.isInStock
      );
      const id2 = ProductList.add(
        product3.name,
        product3.price,
        product3.isInStock
      );
      expect(id2).toBeGreaterThan(id1);
    });
  });

  describe('getById', () => {
    it('should return a product when the product exists', () => {
      expect(ProductList.getById(1)).toEqual(product1);
    });

    it('should throw an error when the product does not exist', () => {
      expect(() => ProductList.getById(999)).toThrow(productDoesNotExistError);
    });
  });

  describe('getInStock', () => {
    it('should return products which are in stock', () => {
      expect(ProductList.getInStock()).toEqual([product1, product3]);
    });
  });

  describe('removeById', () => {
    it('should remove the product when the product exists', () => {
      ProductList.removeById(1);
      expect(() => ProductList.getById(1)).toThrow(productDoesNotExistError);
    });

    it('should throw an error when the product does not exist', () => {
      expect(() => ProductList.removeById(999)).toThrow(
        productDoesNotExistError
      );
    });
  });
});
