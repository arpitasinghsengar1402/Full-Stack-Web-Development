//slice method

//uused to extract part of the array
//array.slice(startindex,lastindex(excluded))
//return new array of extracted elements

let num=[3,5,7,8,9,4]
let extractedarray=num.slice(1,4)
console.log("original array = ",num)
console.log("extracted array = ",extractedarray)
let extractedarray1=num.slice(1)
console.log("original array = ",num)
console.log("extracted array = ",extractedarray1)
let extractedarray2=num.slice(-1)
console.log("original array = ",num)
console.log("extracted array = ",extractedarray2)