# Challenge

In this challenge, you will access the RESTful API to manipulate the products.

You use the `fetch` function and the Promise syntax to implement.

# The API

- See [api.md](../api.md)

# `main()` function

Write the `main()` function to perform the following operations

1. Get all products
2. Update the `isInStock` of the first product to `false`
3. Add a new product

   ```js
   { name: 'Eggs', price: 5.99, isInStock: true }
   ```

4. Delete the product added at the previous step
5. Add other new products

   ```js
   [
     { name: 'Bread', price: 1.99, isInStock: true },
     { name: 'Carrots', price: 2.99, isInStock: true }
   ];
   ```
6. Get all products which are in stock and the price is less than 2
7. The `main` function returns a Promise will be fulfilled with the name of the products which you get at the previous step

# Hint

- [Promise - javascript.info](https://javascript.info/promise-basics)
- [fetch - javascript.info](https://javascript.info/fetch)
- [Using fetch - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

# Best Practices

- [How to escape Promise Hell - Ronald Chen](https://medium.com/@pyrolistical/how-to-get-out-of-promise-hell-8c20e0ab0513)

# Run and Test

To run the code in the browser, open the below link on your browser

- http://localhost:3000/06-promise-fetch/

To run test, run the below command

```
npm test -- ./src/06-promise-fetch
```
