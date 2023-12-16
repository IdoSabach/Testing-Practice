function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input should be a non-empty array of numbers');
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average: average,
    min: min,
    max: max,
    length: arr.length,
  };
}

module.exports = analyzeArray