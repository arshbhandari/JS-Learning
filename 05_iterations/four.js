const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb : 'ruby'
}

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby

const arr = ["js","cpp","py","java"]
for(const key in arr){
    console.log(key)    // for getting value we use arr[key].
}
// 0 
// 1
// 2
// 3

// NOTE -> for in loop will not work on map because map is not iterable .
