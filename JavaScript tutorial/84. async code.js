//asynchronous javascript

//async code eg


console.log(1)
console.log(2)
//async code
setTimeout(() => {
    console.log("call back function called after 3 seconds")
}, 3000); //after 3 sec

//in this code block execuation for 3 second? no
console.log(3)
console.log(4)