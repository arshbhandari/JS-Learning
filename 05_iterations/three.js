// ********** for of **********

const arr = [1,2,3,4,5]

// for(const num of arr){
    // console.log(num);
// }

// const greeting = "hello world"
// for(const greet  of greeting){
//     console.log(`each char is ${greet}`);
// }


// ******** Maps **********

const map = new Map()

map.set('In',"India")
map.set('USA',"United states of America")
map.set('UK',"Uttarakhand")
map.set('In',"India")

console.log(map)                // it will have unique value

for(const key of map){
    console.log(key);       
}
// [ 'In', 'India' ]
// [ 'USA', 'United states of America' ]
// [ 'UK', 'Uttarakhand' ]

for(const [key,value] of map){
    console.log(key , '->' ,value);       
}

// In -> India
// USA -> United states of America
// UK -> Uttarakhand

// const myObject = {
//     g1 : 'abs',
//     g2 : 'xyz'
// }
// for(const [key ,value ] of myObject){
//     console.log(key , '->' , value)          // error , this  will only work on maps .
// }