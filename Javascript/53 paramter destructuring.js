const person={
    firstname:"Arpita",
    gender:"female"
}
// function printdetails(obj){
//     console.log(obj.firstname)
//     console.log(obj.gender)
//     console.log(obj.age)
// } 
// or othe method is
function printdetails({firstname,gender,age}){
    console.log(firstname)
    console.log(gender)
    console.log(age)
}

printdetails(person)