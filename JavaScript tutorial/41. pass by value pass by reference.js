let arr=[1,2,3,4,5,6]
let getref=arr
getref[7]=8
console.log("Original array",arr)
console.log("getref array",getref);

//pass by value
let getvalue=[...arr]
getvalue[6]=10
console.log("Original array",arr)
console.log("getref array",getvalue)