# JavaScript Practices

Reference: https://github.dev.cybozu.co.jp/huy-nguyen/javascript-practices
This repository contains the JavaScript challenges.

# Setup

1. Clone this repository to your computer
2. `cd` to `javascript-practices` directory
3. Run `npm install` to install the dependences
4. Run `npm start` to start the local server

# Complete The Challenges

Go to the sub directories of `src`.

1. See the `README.md` file for requirement of the challenge
2. Open the `.js` files to write the code of the challenge
3. Run the tests in the directory with the following command

   ```
   npm test -- src/<directory>

   # For example
   npm test -- src/01-module-function
   ```

Your implementation for the challenge should pass the tests.  
For example,

```
 PASS  src/01-module-function/greeting.test.js
  greeting
    ✓ should export the `sayHello()` function using named exported (3ms)
    ✓ should return a greeting message with the given name (1ms)
    ✓ should return a greeting message with default name
    ✓ should throw an error when the given name is not a string (3ms)
    ✓ should throw an error when the given name is blank (1ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.498s
```

Let's start the challenges!

# The RESTful API

See [api.md](api.md) file.

The data of the API will be persisted to the local database (`server/db.json` file).

Note: The data of local database will be automatically reset when you run tests.

# Commands

1. Start the local server

```
npm start
```

2. Run unit tests

```
npm test -- src/<directory>
```

3. Open e2e test runner (Cypress)

```
npm run cypress:open
```

4. Reset Database

```
npm run db:reset
```
