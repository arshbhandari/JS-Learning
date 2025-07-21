
console.log("2" > 1)  //true
console.log("02" > 1)  //true

//avoid these comparisons
console.log(null > 0);   //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

// equality check and comparison works differently , comparison check will change null into number that is  0 than compare  

console.log(undefined == 0 )  //false
console.log(undefined > 0 )    //false
console.log(undefined >= 0 )    //false

//===   strict check

console.log("2" === 2) //false check the datatype