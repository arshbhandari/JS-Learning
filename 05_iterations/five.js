const coding = ['c','c++','java','python','js']

coding.forEach( function (item){
    // console.log(item);
   //**  it will return all values of array one by one
} )  

// ******* the function inside forEach is a callback function and callback function has no name

// coding.forEach( (item)=> {
//     console.log(item)    // same ans using arrow function
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)    // smae ans by explicitly defining function


// coding.forEach( (item , index ,arr) =>{
//     console.log(item,index,arr)   
// } ) 
/* ans ->
c 0 [ 'c', 'c++', 'java', 'python', 'js' ]
c++ 1 [ 'c', 'c++', 'java', 'python', 'js' ]
java 2 [ 'c', 'c++', 'java', 'python', 'js' ]
python 3 [ 'c', 'c++', 'java', 'python', 'js' ]
js 4 [ 'c', 'c++', 'java', 'python', 'js' ]
*/

const mycoding = [
    {
        langName :"javascript",
        langFile : "js"
    },
    {
        langName :"java",
        langFile : "java"
    },
    {
        langName :"python",
        langFile : "py"
    }
]
mycoding.forEach((item)=>{
    console.log(item.langName)
} )

/* ans->
javascript
java
python
*/