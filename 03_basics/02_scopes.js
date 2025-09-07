
let a =300 
// if(true){
//     let a = 30
//     const b =20
//     console.log("Inner :" ,a)       // Inner : 30
// }
// console.log(a)                      // 300


function one(){
    const username = "Arsh"
    function two(){
        const website = " youtube "
        console.log(username);
    }
    // console.log(website);                // error
    // two()                                   // Arsh
}
// one()


if(true){
    const username = "arsh"
    if(username == "arsh"){
        const website = " youtube"              // arsh youtube
        // console.log(username +website)
    }
    // console.log(website)             // error
}
// console.log (username)               // error


// ******************* Conceptual Example  **********************

console.log(addone(5))              // 6
function addone(num){
    return num + 1
}

addtwo(5)                           //  Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num+1
}