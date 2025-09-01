const marvel_heros = ["thor", "spiderman" , "Ironman"]
const dc_heros = ["superman", "flash" , "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)               // [ 'thor', 'spiderman', 'Ironman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1])         // flash

// const allHeroes = marvel_heros.concat(dc_heros)     
// console.log(allHeroes)                  // [ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros,...dc_heros]     //it spread all the elements inside both arrays
// console.log(all_new_heros)              // [ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array1 = another_array.flat(Infinity)
// const real_another_array2 = another_array.flat(2)
// console.log(real_another_array1)      // [1, 2, 3, 4, 5,6, 7, 6, 7,4,5]
// console.log(real_another_array2)     // [1, 2, 3, 4, 5,6, 7, 6, 7,4,5]


console.log(Array.isArray("Arsh"))      // false
console.log(Array.from("Arsh"))         // [ 'A', 'r', 's', 'h' ]
console.log(Array.from({name: "Arsh"}))    // []  instresting case

let score1 = 100
let score2 = 200
const score3 = 300
console.log(Array.of(score1 , score2, score3))    // [ 100, 200, 300 ]