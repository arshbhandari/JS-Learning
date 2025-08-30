const name = "Arsh"
const count = 50

// console.log(name + count +"bhandari")

// console.log(`${Hitesh} ${ count}`) // not valid
console.log(`Hitesh ${ count}`) // valid

// console.log(`Helo my name is ${name} and cacount ${count} `)

const getName = new String ('hitesh-hc')

// console.log(getName[0]);
console.log(getName.__proto__); // tells about the inner properties
// console.log(getName.length);
// console.log(getName.toUpperCase());
// console.log(getName.charAt(2));
// console.log(getName.indexOf('t'));

// const newString = getName.substring(0,4);
// console.log(newString);
const anotherString = getName.slice(0,4);
console.log(anotherString);

// const newStringOne = "    Arsh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url =" https://arsh.com/arsh%20bhandari"
// url.replace('%20','-')
// console.log(url.replace('%20','-'))

// console.log(url.includes('sundar'))
// const nameOf = new String ('hitesh-hc-q-r-bbb')
// console.log(nameOf.split('-'))