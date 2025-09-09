// const userEmail = "arsh@1233"

// if(userEmail){
//     console.log("got email");    
// }else {
//     console.log("didnt get email");
// }

// falsy value ->
// false ,0 ,-0,BigINT 0n , null ,"",undefined ,NaN

// truthy values ->
// "0", 'false', " ", [] , {} , function(){}


// const userEmail = []

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length===0){     // Object.keys(emptyObj) returns an array
//     console.log("empty")
// }


// Nullish coalescing Operator (??)  -> null or undefined
let val1;
val1 = 5 ?? 10                      // 5
val1 = null ?? 12                   // 12
val1 = undefined ?? 1               // 1
val1 = null ?? 12 ?? 33             //12

console.log(val1)