# Challenge

In this challenge, you will write a function to convert temperatures to and from celsius, fahrenheit, and kelvin.

# `convert.js` module

- Exports
  - 3 constants: `CELSIUS`, `FAHRENHEIT`, `KELVIN`
  - `convert(temperature, fromUnit, toUnit)` function

## Usage example

```js
convert(5, CELSIUS, FAHRENHEIT); // returns 41;
convert(290, KELVIN, FAHRENHEIT); // returns 62.33;
```

## Returns

- The temperature value is rounded upto 2 decimal places, e.g. `5.7`, `12.34`

## Parameters

- `temperature`: nunber
  - If the given temperature is not a number, the `convert` function will throw an error: `The "temperature" is not a number`
- `fromUnit`: string
- `toUnit`: string

  - If the `fromUnit` or `toUnit` parameter is not `CELSIUS`, `FAHRENHEIT` or `KELVIN`, the `convert` function will throw an error: `The "from" or "to" parameter is not a valid temperature unit`

# Best Practices

- Break the implementation of the `convert` function into small functions which should not be longer than 20 lines of code.

# Hint

1. [Temperature conversion formulas - Wikipedia](https://en.wikipedia.org/wiki/Temperature#Conversion)
2. [The Art of Writing Small and Plain Functions - dmitripavlutin](https://dmitripavlutin.com/the-art-of-writing-small-and-plain-functions/)
3. [Numbers - javascript.info](https://javascript.info/number)

# Run and Test

To run the code in the browser, open the below link on your browser

- http://localhost:3000/02-small-functions/

To run test, run the below command

```
npm test -- ./src/02-small-functions
```
