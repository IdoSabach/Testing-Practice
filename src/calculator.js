const calculator = {
  add: (a,b)=>{
    return a+b
  },
  subtract: (a,b)=>{
    return a-b
  },
  multiply: (a,b)=>{
    return a*b
  },
  divide: (a,b)=>{
    return a/b
  },
}

module.exports = calculator

console.log(calculator.add(9,8))
console.log(calculator.subtract(9,8))
console.log(calculator.multiply(9,8))
console.log(calculator.divide(9,8))