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
console.log(loginUserMessage())     // default user name arsh 
console.log(loginUserMessage("Kris"))   // krish has more priority than arsh