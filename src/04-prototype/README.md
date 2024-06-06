# Challenge

In this challenge, you will write functions to manipulate a list of products.

You use JavaScript prototype to implement.

# `ProductList.js` module

The prototype of `ProductList` has the following methods

- `add(name, price, isInStock)`
- `getById(id)`
- `getInStock()`
- `removeById(id)`

We can create many ProductList instances

```js
const productList1 = new ProductList();
const productList1 = new ProductList();
```

## `add(name, price, isInStock)`

- Add a product to the list

### Usage

```js
productList.add('Milk', 2.99, true);
```

### Returns

- The ID of the newly added product
- The ID is an auto-increment number

### Parameters

- `name`: string
  - The product name
- `price`: number
  - The product price, e.g. 19.99
- `isInStock`: boolean
  - `true` if the product is in stock otherwise is `false`

## `getById(id)`

### Usage

```js
productList.getById(1);
```

### Returns

- An object which represents a product
- Properties of an Product object
  - id
  - name
  - price
  - isInStock
- If the product does not exist, the function will throw an error: `The product does not exist`.

### Parameters

- `id`: number
  - The ID of the product you want to get

## `getInStock()`

### Returns

- An array of Product objects which contains the products are available in stock

## `removeById(id)`

- If the product does not exist, the function will throw an error: `The product does not exist`.

### Usage

```js
productList.removeById(1);
```

## Parameters

- `id`: number
  - The ID of the product you want to remove

# Hint

- [Prototype in JavaScript - GeeksforGeeks](https://www.geeksforgeeks.org/prototype-in-javascript/)

# Run and Test

To run the code in the browser, open the below link on your browser

- http://localhost:3000/04-prototype/

To run test, run the below command

```
npm test -- ./src/04-prototype
```
