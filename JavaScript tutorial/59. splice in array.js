//splice in array

//used to add new elements into the array
//array.splice(index,deletevalue,valuetobeadded)
//return deleted items in the form of array

let num=[3,5,7,9,2]
let updated=num.splice(1,0,1,4)
console.log("original array= ",num)
console.log('updated array = ',updated);