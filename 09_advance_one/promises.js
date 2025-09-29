const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls , cryptography , network

    setTimeout(function(){
        console.log('Async task is done')      // Async task is done
        resolve()                             // Promise Consumed
    },1000)
})
 
promiseOne.then(function(){
    console.log("Promise Consumed");
})

//***********************//

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//***********************//

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"xyz", email:"xyz@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);                // { username: 'xyz', email: 'xyz@example.com' }
})

//***********************//

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"xyz", email:"xyz@example.com"})
        } else {
            reject('ERROR: SOmething went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>console.log("The Promise is either resolved or rejected"))

//***********************//

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username:"Javascript",password:"1234"
            })
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
   try{
        const response = await promiseFive
        console.log(response);
   } catch(error){
        console.log(error);
   }
}
consumePromiseFive();

//***********************//

/*
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log("E:", error);
    }
}
getAllUsers()
*/

//***********************//

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))