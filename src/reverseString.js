function reverseString(str) {
  return str.split("").reverse().join("");
}

module.exports = reverseString
const inputString = "hello world";
const reversedString = reverseString(inputString);
console.log(reversedString); 
