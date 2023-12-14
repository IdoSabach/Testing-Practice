const capitalize = require('../capitalize')

test('big char on first word',()=>{
  expect(capitalize('hello world')).toBe('Hello world')
})