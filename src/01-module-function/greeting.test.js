import * as greeting from './greeting';

describe('greeting', () => {
  const { sayHello } = greeting;

  it('should export the `sayHello()` function using named exported', () => {
    expect(typeof sayHello).toBe('function');
  });

  it('should return a greeting message with the given name', () => {
    expect(sayHello('Tony')).toBe('Hello, Tony!');
  });

  it('should return a greeting message with default name', () => {
    expect(sayHello()).toBe('Hello, World!');
  });

  it('should throw an error when the given name is not a string', () => {
    const error = 'The "name" is not a string';
    expect(() => sayHello(null)).toThrow(error);
    expect(() => sayHello({ name: 'Tony' })).toThrow(error);
  });

  it('should throw an error when the given name is blank', () => {
    const error = 'The "name" is blank';
    expect(() => sayHello('')).toThrow(error);
    expect(() => sayHello('  ')).toThrow(error);
  });
});
