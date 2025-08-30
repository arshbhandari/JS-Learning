const score = 400
// console.log(score)    // 400

const balance = new Number (1000)
// console.log(balance)      //  Number:1000

// console.log(balance.toString().length)     // 1000 but type will be string length =4
// console.log(balance.toFixed(2))     //1000.00

const otherNum = 123.8933;

// console.log(otherNum.toPrecision(3))   // 124

const hundred = 1000000
// console.log(hundred.toLocaleString())      // 1,000,000
// console.log(hundred.toLocaleString('en-IN'))  // 10,00,000


//*********Maths ******************

// console.log(Math)

// console.log(Math.abs(-4))      // 4
// console.log(Math.round(4.6))      // 5
// console.log(Math.min(4,3,6,7,2,16))      // 2
// console.log(Math.max(4,3,6,7,2,16))      // 16

console.log(Math.random())          // 0-1 between value

console.log((Math.random()*10) +1)   // greator and equal to 1
console.log(Math.floor(Math.random()*10) +1)   // lowest value

// we are adding 1 in every step to avoid the ans to be zero, 
const min =10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) +min)   //valur in between 10 and 20


