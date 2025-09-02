// const tinderUser = new Object()        // {} ---> singelton 
const tinderUser ={}                // {}  ---> Non Singelton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)             // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "ar33@gmail.com" ,
    fullname : {
        userfullname :{
            firstName: "Arsh",
            lastName: "Bhandari"
        }
    }
}

// console.log(regularUser.fullname.firstName)     // undefined
// console.log(regularUser.fullname.userfullname.firstName)   // Arsh


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

// const obj3 = {?obj1 , obj2}     // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({} ,obj1 ,obj2)    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 ={...obj1 , ...obj2}     // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj3)

console.log(Object.keys(tinderUser));     // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));    // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));   // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true

