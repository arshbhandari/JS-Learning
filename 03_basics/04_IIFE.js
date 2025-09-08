// Immediately Invoked Function Expression (IIFE)
// to remove the pollution of global variable we use IIFE

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                  // DB CONNECTED

//use semicolon after using IIFE, if you want to write another IFFE.

(()=>{
    // unnamed IIFE
    console.log(`DB CONNECTED TWO `);
})();                            // DB CONNECTED TWO


((name)=>{
    // parameterised IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Arsh');                       // DB CONNECTED TWO Arsh