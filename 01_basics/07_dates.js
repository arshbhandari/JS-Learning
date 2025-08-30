//Dates

let myDate = new Date()
// console.log(myDate.toString());   //Sat Aug 30 2025 06:21:16 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString())   // Sat Aug 30 2025

// console.log(myDate.toISOString())    // 2025-08-30T06:24:23.782Z
// console.log(myDate.toJSON())      // 2025-08-30T06:24:23.782Z
// console.log(myDate.toLocaleDateString())  // 8/30/2025
// console.log(myDate.toLocaleString())    // 8/30/2025, 6:24:23 AM

// console.log(typeof(myDate))      // object.


// let myCreatedDate = new Date(2023 ,0 ,23)
// console.log(myCreatedDate.toDateString())   // Mon Jan 23 2023

// let myCreatedDate = new Date(2023 ,0 ,23 ,5,3)
// console.log(myCreatedDate.toLocaleString())   // 1/23/2023, 5:03:00 AM

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString())  // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp)    // used in comparison of answers in a game and answers will be in miliseconds.
// console.log(myCreatedDate.getTime())   // current date time

// console.log(Date.now()/1000)   // answer will be in seconds but decimal  1756536074.158

// console.log(Math.floor(Date.now()/1000))   // answer will be in seconds but integer   1756536074


let newDate = new Date();
// console.log(newDate)      // 2025-08-30T06:44:33.428Z
// console.log(newDate.getDate())  // 30
// console.log(newDate.getDay())   // 6 (means sat)
// console.log(newDate.getMonth())  // 7 (means month (0-11))

console.log(newDate.toLocaleDateString('default' ,{
    weekday: "long" 
}))  // Saturday


