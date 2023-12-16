const calculator = require('../calculator')

test('add',()=>{
  const add = calculator.add(10,10)
  const numAdd = 20
  expect(add).toEqual(numAdd)
})

test('sub',()=>{
  const subtract = calculator.subtract(10,10)
  const numSub = 0
  expect(subtract).toEqual(numSub)
})

test('mul',()=>{
  const multiply = calculator.multiply(10,10)
  const numMultiply = 100
  expect(multiply).toEqual(numMultiply)
})



test('div',()=>{
  const divide = calculator.divide(10,10)
  const numDivide = 1
  expect(divide).toEqual(numDivide)
})