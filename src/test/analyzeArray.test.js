const analyzeArray = require('../analyzeArray')

test('analyzeArray returns correct analysis for an array of numbers', () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);

  expect(result.average).toEqual(3);
  expect(result.min).toEqual(1);
  expect(result.max).toEqual(5);
  expect(result.length).toEqual(5);
});

test('analyzeArray throws an error for empty input', () => {
  expect(() => analyzeArray([])).toThrowError('Input should be a non-empty array of numbers');
});

test('analyzeArray throws an error for non-array input', () => {
  expect(() => analyzeArray('not an array')).toThrowError('Input should be a non-empty array of numbers');
});

test('analyzeArray returns correct analysis for an array with negative numbers', () => {
  const result = analyzeArray([-5, -2, 0, 3, 7]);

  expect(result.average).toEqual(0.6);
  expect(result.min).toEqual(-5);
  expect(result.max).toEqual(7);
  expect(result.length).toEqual(5);
});