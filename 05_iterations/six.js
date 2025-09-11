const coding = ['c','c++','java','python','js']

// const values = coding.forEach((item)=>{
    // return item
// }) 
// console.log(values)   // undefined (forEach will not return any value)

const myNums = [1,2,3,4,5,6,7,8,9]
// const values = myNums.filter((num)=>num>4)  // callback fun is used inside filter.
// console.log(values)                 // [ 5, 6, 7, 8, 9 ]

// const values = myNums.filter((num)=>{
//     num>4
// })  
// console.log(values)                 // []

// const values = myNums.filter((num)=>{
//     return num>4
// })  
// console.log(values)                 // [ 5, 6, 7, 8, 9 ]


// const newNums = []
// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)             // [ 5, 6, 7, 8, 9 ]


const Books = [
    {title: 'Book 1', genre:'fiction' , publish: 1971, edition: 1982},
    {title: 'Book 2', genre:'science' , publish: 1972, edition: 1983},
    {title: 'Book 3', genre:'fiction' , publish: 1973, edition: 1990},
    {title: 'Book 4', genre:'non-fiction' , publish: 1974, edition: 1985},
    {title: 'Book 5', genre:'science' , publish: 1975, edition: 1989},
    {title: 'Book 6', genre:'science' , publish: 1976, edition: 1990},
];

// const userBooks = Books.filter((bk)=> bk.genre == "science")
const userBooks = Books.filter((bk)=> {
    return bk.publish >=1970 && bk.genre == "science" })
console.log(userBooks)