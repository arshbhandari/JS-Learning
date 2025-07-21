let value = null

console.log(typeof value)
console.log(typeof (value))

let valueInNumber = Number(value)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abs" => NaN
// true => 1 , flase=> 0
// null =>0 , udefined => NaN , "arsh " => NaN

let isLoggedIn = "arsh"

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

// 1=> true , 0 =>false
// "" => false
// "arsh" => true

let score = 33

let stringNumber = String(score)
console.log(stringNumber)
console.log(typeof stringNumber);


//****************** Operations *****************

let val = 3
let negValue = -val
console.log(negValue)

console.log(2**3)  //8

console.log("1"+2);  //12
console.log(1+"2");  //12
console.log("1"+2+2);  //112
console.log(1+2+"2");  //32

console.log(+true) //1
console.log(+"")   //0

let counter = 100
let game = 10
let y = counter++
let x = y++
console.log(counter); // 101
console.log(y);       // 101
console.log(game);    // 11
console.log(x);        // 100
