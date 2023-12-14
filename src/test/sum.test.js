const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  const sum3= sum(1, 2)
  expect(sum3).toBe(3);
});