// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score  = 100
const scoreVal = 100.3

const isLogged = false
const temp = null
let userEmail    //undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid)  // false  

const bigNumber = 78456644865554n


// Reference (Non Primitive - reference will be directly allocated in memory )
// type : Array , Object , Functions

const heros = ["spiderman","shaktiman","doga"];

let myObj ={
    name: "arsh",
    age: 18
}

const myFunction = function(){
    console.log("Hello World");
}

//typeof null => object
//typeof undefined => undefined 
//typeof function => function 
//typeof array and object => object 

console.log(typeof heros)  //object 
console.log(typeof myObj)  //object
console.log(typeof myFunction)  //function


console.log(typeof id)  //Symbol
console.log(typeof bigNumber)  //bigint