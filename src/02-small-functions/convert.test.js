import { convert, CELSIUS, FAHRENHEIT, KELVIN } from './convert';

describe('convert(temperature, from, to)', () => {
  describe('Parameter validation', () => {
    it('should throw an error when the "temperature" parameter is not a number', () => {
      const error = 'The "temperature" is not a number';
      expect(() => convert('', '', '')).toThrow(error);
      expect(() => convert('one', '', '')).toThrow(error);
    });

    const INVALID = 'X';
    it.each([
      [CELSIUS, INVALID],
      [FAHRENHEIT, INVALID],
      [KELVIN, INVALID],
      [INVALID, CELSIUS],
      [INVALID, FAHRENHEIT],
      [INVALID, KELVIN]
    ])(
      'should throw an error when the "from" or "to" parameter is not a valid temperature unit: convert(0, \'%s\', \'%s\')',
      (from, to) => {
        expect(() => convert(0, from, to)).toThrow(
          'The "from" or "to" parameter is not a valid temperature unit'
        );
      }
    );
  });

  describe('convert', () => {
    it.each([
      [5, CELSIUS, FAHRENHEIT, 41],
      [5, CELSIUS, KELVIN, 278.15],
      [5, CELSIUS, CELSIUS, 5],
      [41, FAHRENHEIT, CELSIUS, 5],
      [41, FAHRENHEIT, KELVIN, 278.15],
      [41, FAHRENHEIT, FAHRENHEIT, 41],
      [290, KELVIN, CELSIUS, 16.85],
      [290, KELVIN, FAHRENHEIT, 62.33],
      [290, KELVIN, KELVIN, 290]
    ])(
      "should return the result: convert(%d, '%s', '%s')",
      (temperature, from, to, expected) => {
        expect(convert(temperature, from, to)).toBe(expected);
      }
    );
  });
});
