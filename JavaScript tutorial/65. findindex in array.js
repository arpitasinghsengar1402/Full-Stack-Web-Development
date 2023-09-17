//findindex method

//executes function for each array element
//it returns "index" of that array element who "first pass the test otherwise -1

let ages=[21,18,23,17,16]
let result=ages.findIndex(age=>{
    return age>20
})
console.log(result)