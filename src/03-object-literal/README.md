# Challenge

In this challenge, you will write functions to manipulate a list of products.

You use JavaScript object literal to implement.

# `ProductList.js` module

Export the `ProductList` object which has the following methods

- `add(name, price, isInStock)`
- `getById(id)`
- `getInStock()`
- `removeById(id)`

## `add(name, price, isInStock)`

- Add a product to the list

### Usage

```js
ProductList.add('Milk', 2.99, true);
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
ProductList.getById(1);
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
ProductList.removeById(1);
```

## Parameters

- `id`: number
  - The ID of the product you want to remove

# Hint

- [Objects: the basics - javascript.info](https://javascript.info/object-basics)
- [Array methods - javascript.info](https://javascript.info/array-methods)

# Run and Test

To run the code in the browser, open the below link on your browser

- http://localhost:3000/03-object-literal/

To run test, run the below command

```
npm test -- ./src/03-object-literal
```
