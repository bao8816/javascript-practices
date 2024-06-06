import { convert, CELSIUS, FAHRENHEIT, KELVIN } from './convert';

console.log('convert(5, CELSIUS, FAHRENHEIT)', convert(5, CELSIUS, FAHRENHEIT));

console.log(
  'convert(290, KELVIN, FAHRENHEIT)',
  convert(290, KELVIN, FAHRENHEIT)
);

console.log(
  "convert('five', CELSIUS, FAHRENHEIT)",
  convert('five', CELSIUS, FAHRENHEIT)
);
