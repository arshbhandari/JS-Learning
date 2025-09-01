// array 

// when u copy arrays it does shallow copy , shallow copy of an object is a copy whose properties share the same references . 

const myArr = [0, 9, 2, 3, 4, 5]
// const myHeroes = ["Arsh", "Bhandari"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1])    // 9

// Array Meathods

// myArr.push(6)      //[0, 9, 2, 3,4, 5, 6]
// myArr.pop()        //[0, 9, 2, 3,4, 5]

// myArr.unshift(7)     //[7,0, 9, 2, 3, 4, 5]
// myArr.shift()        //[0, 9, 2, 3,4, 5]

// console.log(myArr.includes(11));     // flase
// console.log(myArr.indexOf(11));      // -1

// const newArr = myArr.join()
// console.log(typeof newArr)          // string
// console.log(newArr)                 // 0,9,2,3,4,5
// console.log(myArr)                  // [0, 9, 2, 3,4, 5]


// slice , splice

console.log("A" ,myArr)      // A [ 0, 9, 2, 3, 4, 5 ]

const newN1 = myArr.slice(1,3)
console.log(newN1)          // [ 9, 2 ]
console.log("B" , myArr)    // B [ 0, 9, 2, 3, 4, 5 ]

const newN2 = myArr.splice(1,3)
console.log(newN2)          // [ 9, 2, 3 ]
console.log("C " , myArr)   // C  [ 0, 4, 5 ]

