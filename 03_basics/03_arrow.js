const user = {
    username : "Krishna",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        console.log(this)
    }
}
// user.welcomeMessage()           // Krishna, welcome
                                    // {
                                    //   username: 'Krishna',
                                    //   price: 999,
                                    //   welcomeMessage: [Function: welcomeMessage]
                                    // }
// user.username = "Paras"  

// user.welcomeMessage()           // Paras, welcome
                                    // {
                                    //   username: 'Paras',
                                    //   price: 999,
                                    //   welcomeMessage: [Function: welcomeMessage]
                                    // }


// console.log(this)                  // {}


// function exmple(){
//     let username = "Neeraj"
//      console.log(this.username)              // undefined
//      console.log(this)              // gives various values
// }
// exmple()

// const chai = ()=>{
//     let username = "Neeraj"
//     console.log(this)               // {}
//     console.log(this.username)          // undefined
// }
// chai()

// const addtwo = (num1 , num2)=>{
//     return num1+num2             // explicit return
// }
// const addtwo = (num1 , num2)=> (num1+num2)    // implicit return 
const addtwo = (num1 , num2)=> ({username:"Neeraj"})   // { username: 'Neeraj' }

console.log(addtwo(3,8))

