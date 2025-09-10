// ********* for **********

// for(let index = 0; index< 10; index++){
//     const element = index;
//     console.log(element);
// }


// for (let i = 0; i <=10; i++) {
//     for(let j = 0;j<=10;j++){
//         console.log(i+ '*'+j+ '='+ i*j);
//     }   
// }

// let myArray = ["flash","batman","superman"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i]
//     console.log(element); 
// }


//*********** break and continue ***************

// for(let i=0;i<=20;i++){
//     if(i == 5){
//         break;
//     }
//     console.log(`Value of i is ${i}`)
// }

for(let i=0;i<=20;i++){
    if(i == 5){
        continue                // it will not print 5, directly jump to 6 without executing the next step.
    }
    console.log(`Value of i is ${i}`)
}
