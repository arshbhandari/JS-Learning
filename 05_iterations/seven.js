const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// map is also callback function and return value
// const value = myNumbers.map((num)=>num+10)
// console.log(value);       //[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

// const value = myNumbers.map((num)=>{num+10})
// console.log(value);             // [undefined ,undefined ,...] without scope it will return undefined


// ***** CHAINING -> using two three meathods together *****

const newNums = myNumbers
                .map((num)=> num+10)       //[11,12,13,14,15, 16, 17, 18,19, 20] 
                .map((num)=> num +1)       // [12,13,14,15, 16, 17, 18,19, 20, 21]
                .filter((num) => num>=15)    // [15, 16, 17, 18,19, 20, 21]
console.log(newNums);           // [15, 16, 17, 18,19, 20, 21]

// filter will return in true and false but map will return everything

