import 'isomorphic-fetch';
import {
  getProduct,
  getProducts,
  getInStockProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from './product-service';
import { resetDB } from '../../test-helpers/reset-db';

describe('product-service', () => {
  let allProducts;

  beforeAll(() => {
    resetDB();
    allProducts = require('../../server/db.json').products;
  });

  it('should return a Promise that is resolved with a product', async () => {
    const product = await getProduct(1);

    expect(product).toEqual(allProducts[0]);
  });

  it('should return a Promise that is resolved with all products', async () => {
    const products = await getProducts();

    expect(products).toEqual(allProducts);
  });

  it('should return a Promise that is resolved with products in stock', async () => {
    const products = await getInStockProducts();

    const inStockProducts = allProducts.filter(product => product.isInStock);
    expect(products).toEqual(inStockProducts);
  });

  it('should add the product and return a Promise that is resolved with the added product', async () => {
    const product = { name: 'Bread', price: 1.99, isInStock: true };
    const addedProduct = await addProduct(product);

    expect(addedProduct).toEqual({ id: 21, ...product });
  });

  it('should update the product and return a Promise that is resolved with the updated product', async () => {
    const product = allProducts[2];
    product.isInStock = false;

    const updatedProduct = await updateProduct(product);

    expect(updatedProduct).toEqual(product);
  });

  it('should delete a Product', async () => {
    await deleteProduct(2);

    const product = await getProduct(2);
    expect(product).toEqual({});
  });
});
