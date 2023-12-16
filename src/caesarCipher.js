function caesarCipher(str, shift) {
  return str
    .split('')
    .map(char => shiftChar(char, shift))
    .join('');
}

function shiftChar(char, shift) {
  if (char.match(/[a-z]/i)) {
    const code = char.charCodeAt(0);
    const isUpperCase = code >= 65 && code <= 90;
    const shiftAmount = shift % 26; // Ensure shift is within the range of 26 letters

    let shiftedCode = code + shiftAmount;

    if ((isUpperCase && shiftedCode > 90) || (!isUpperCase && shiftedCode > 122)) {
      shiftedCode -= 26;
    } else if ((isUpperCase && shiftedCode < 65) || (!isUpperCase && shiftedCode < 97)) {
      shiftedCode += 26;
    }

    return String.fromCharCode(shiftedCode);
  } else {
    return char;
  }
}


module.exports = caesarCipher