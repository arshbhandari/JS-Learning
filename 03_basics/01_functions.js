function sayName(){
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

// sayName()    // print all values

// function addTwoNum(num1 ,num2) {
//     console.log(num1 + num2);
// }

// addTwoNum(3,4)            // 7
// addTwoNum(3,"4")          // 34

function addTwoNum(num1 ,num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2 
}
const result = addTwoNum(4,6)
// console.log("Result: " , result)       // Result:  10

// function loginUserMessage(username){
//     if(!username ){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Arsh"))       //Arsh just logged in
// console.log(loginUserMessage())            //undefined just logged in  
// console.log(loginUserMessage())            //Please enter a username

function loginUserMessage(username = "arsh"){
    if(!username ){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())     // default user name arsh 
// console.log(loginUserMessage("Kris"))   // krish has more priority than arsh


// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,777,800))            // 200


// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,777,800))            // [ 200, 777, 800 ]

function calculateCartPrice(val1 ,val2 ,...num1){
    return num1;
}
// console.log(calculateCartPrice(200,777,800,7889))            // [ 800 , 7889]


const user = {
    username: "arsh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price ${anyobject.price}`);
}

// handleObject(user)      // Username is arsh and price 199
// handleObject({
//     username: "arsh",
//     price:334
// })                          // same ans


const myArr = [200,300,400,600]
function returnSecondVal(getArray){
    console.log(getArray[0])     // return getArray[1]
}
returnSecondVal(myArr)          // console.log(returnSecondVal(myArr))