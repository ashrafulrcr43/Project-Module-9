const greet = require('./index');

test('greet returns correct value', () => {
  expect(greet("Alice")).toBe("Hello, Alice");
});