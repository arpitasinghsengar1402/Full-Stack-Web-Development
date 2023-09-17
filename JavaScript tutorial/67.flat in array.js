//lat method in array

//it creates a new array with the elements of the subarrays "concatenated " into it

let arr=[1,2,3,[4,5,6,7]]
console.log(arr) 

let result=arr.flat() //by default 1 value
 //this will change the value at index 0 to be equal to 9 and not [9]
 console.log("result",result);
