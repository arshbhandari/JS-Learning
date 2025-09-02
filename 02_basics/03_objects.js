// singleton - it is made by constructors
// Object.create


//objects literals  - it cannot make singletons

const mySym = Symbol("Key")     // defining symbol

const JsUser = {
    name: "Arsh",
    "full name": "Arsh Bhandari",
    [mySym]: "myKey1",
    age: 13,
    location: "Uttarakhand",
    email: "arshbhandari39@gmail.com",
    lastlogin: ["Mon","tue"]
}

// console.log(JsUser.email)           // arshbhandari39@gmail.com

// console.log(JsUser["email"])        // arshbhandari39@gmail.com  (more preferable)
// console.log(JsUser."full name")     // error

// console.log(JsUser[mySym])         // myKey1

JsUser.email = "arsh.abes.in"
// Object.freeze(JsUser)       // freezez
JsUser.email = "arsh.google.in"
// console.log(JsUser)    //  "arsh.abes.in"

JsUser.greeting = function(){
    console.log("hello")
}

// console.log(JsUser.greeting)        // [Function (anonymous)] ---(function return back)
// console.log(JsUser.greeting())      // hello
 
JsUser.greetingTwo = function(){
    console.log(`hello , ${this.name}`)
}

console.log(JsUser.greetingTwo())    // hello , Arsh
