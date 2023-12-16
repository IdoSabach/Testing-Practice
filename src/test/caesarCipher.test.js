const caesarCipher = require('../caesarCipher')

test("caesarCipher shifts letters correctly", () => {
  expect(caesarCipher("abc", 1)).toEqual("bcd");
  expect(caesarCipher("xyz", 3)).toEqual("abc");
  expect(caesarCipher("ABC", 2)).toEqual("CDE");
});

test("caesarCipher maintains case and non-alphabetic characters", () => {
  expect(caesarCipher("Hello, World!", 5)).toEqual("Mjqqt, Btwqi!");
});

test("caesarCipher handles negative shifts and wraps around", () => {
  expect(caesarCipher("abc", -1)).toEqual("zab");
  expect(caesarCipher("ABC", -2)).toEqual("YZA");
});

test("caesarCipher handles shifts larger than 26", () => {
  expect(caesarCipher("abc", 28)).toEqual("cde");
});

test("caesarCipher does not modify non-alphabetic characters", () => {
  expect(caesarCipher("123!@#", 5)).toEqual("123!@#");
});
