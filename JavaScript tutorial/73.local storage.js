//local storage

//in previous todo list task when we refresh the browser we can lose our current state data
//store and retrieve data from database
//for now our focus is on local storage
//store and retrieve data from local storage
//it is an api provided by browser to store data inside browser

console.log(localStorage)


//set item
//get item
//update item

//set the item in local storaage

localStorage.setItem("passion","programming")
localStorage.setItem("age",24)
console.log(localStorage)

//get item from local storage

console.log(localStorage.getItem("age"))

//update
let age = localStorage.setItem('age',26) //we are updating value of age variable 
console.log(localStorage)

//remove item
localStorage.removeItem("ag")
localStorage.removeItem("age")