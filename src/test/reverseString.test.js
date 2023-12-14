const reversedString = require('../reverseString')

test('revers string' , ()=>{
  const originalStr = "hello world"
  const reversStr = "dlrow olleh"
  const result = reversedString("hello world")
  expect(result).toEqual(reversStr)
})