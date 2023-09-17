//no duplicate allowed in set
//sets also have its own methods
//no index based access
//order is not guarenteed(unique items only)
//we can store different datatypes

const numbers=new Set([1,2,3]) 
//add
numbers.add(4)
numbers.add(5)
numbers.add("A")
// numbers.add(["X","Z"])
//has
// if(numbers.has(1)){
//     console.log("1 is present")
// }
// else
// {
//     console.log("1 is not present")
// }
console.log(numbers)
console.log(typeof numbers)
// console.log(numbers[2])

for(let number of numbers)
{
    console.log(number)
}

//convert of array to set
const myarray=[1,2,4,5,6,7,7,8,6]
const uniqueelements=new Set(myarray)
let length=0
for(let element of uniqueelements){
    length++
}
console.log(length)
// console.log(uniqueelements)
// console.log(myarray)

//cannot use length function



