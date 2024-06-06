# Challenge

In this challenge, you will write a function in an ES module.

# `greeting.js` module

- Write the `sayHello(name)` function which returns a string like the below example.

  ```js
  sayHello('Tony'); // returns 'Hello, Tony!'
  ```

- If the `name` parameter is not specified, the `World` will be used as the default value.

  ```js
  sayHello(); // returns 'Hello, World!'
  ```

- If the given parameter is an empty string, the function will throw `The "name" is blank` error

  ```js
  sayHello({ name: 'Tony' }); // ERROR
  ```

- If the given parameter is not a string, the function will throw `The "name" is not a string` error

  ```js
  sayHello({ name: 'Tony' }); // ERROR
  ```

- Export the `sayHello()` function using named export.

# Hint

- [Template strings - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Functions - Default values - javascript.info](https://javascript.info/function-basics#default-values)
- [Throwing errors - javascript.info](https://javascript.info/try-catch#throwing-our-own-errors)
- Using Import and Export
  - https://javascript.info/import-export
  - https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
  - https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/import

# Run and Test

To run the code in the browser, open the below link on your browser

- http://localhost:3000/01-module-function/

To run test, run the below command

```
npm test -- ./src/01-module-function
```
