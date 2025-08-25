const { hello } = require('./script');

test('should return greeting with firstname', () => {
  expect(hello('Ada')).toBe('Hello Ada');
  expect(hello('Frances')).toBe('Hello Frances');
});
