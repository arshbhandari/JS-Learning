// reduce meathod  

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function(acc , currval){
//     return acc+currval
// }, 0)

// the value after the function is initial value for acc , basically it gives sum .

// console.log(myTotal)            // 6

const myTotal = myNum.reduce((acc,curr) => (acc+curr) , 0)
// console.log(myTotal)            // 6

const shoppingCart = [
    {
        itemName: "Bisquitte",
        price: 1200
    },
    {
        itemName : "Hair Gel",
        price : 600
    },
    {
        itemName : "Face cream",
        price : 500
    },
    {
        itemName: "Books",
        price : 1000
    }
]
    
const billToPay = shoppingCart.reduce((acc, item)=> acc + item.price , 0)

console.log(billToPay)          // 3300
