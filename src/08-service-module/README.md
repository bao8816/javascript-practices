# Challenge

In this challenge, you will create `product-service.js` module to manipulate products via the RESTful API.

## The API

- See [api.md](../api.md)

## `product-service.js` module

Export the following functions

- `getProduct(id)`
- `getProducts()`
- `getInStockProducts()`
- `addProduct(product)`
- `updateProduct(product)`
- `deleteProduct(id)`

### Example usage

```js
import { addProduct } from './product-service';

const newProduct = { name: 'Milk', price: 2.99, isInStock: true };

addProduct(newProduct).then(addedProduct => {
  console.log(addedProduct.id);
});

// or

const addedProduct = await addProduct(newProduct);
console.log(addedProduct.id);
```

# Run and Test

To run the code in the browser, open the below link on your browser

- http://localhost:3000/08-service-module/

To run test, run the below command

```
npm test -- ./src/08-service-module
```
