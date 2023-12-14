function capitalize(str) {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize
const inputString = "hello world";
const capitalizedString = capitalize(inputString);
console.log(capitalizedString); 
