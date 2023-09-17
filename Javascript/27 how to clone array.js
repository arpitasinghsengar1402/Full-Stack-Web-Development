let array1=["1","2"]
// let array2=["1","2"]
// let array2=array1.slice(0)
// let array2=[].concat(array1)

let array2=[...array1]
array1.push("3")
console.log(array1===array2)
console.log(array1)
console.log(array2)