// working with array (Simple methods)

let letters=["a","b","c","d"]

//reverse (mutate the originaal array)
let reverse =letters.reverse()
console.log(reverse)
console.log(letters)

let nums=[1,2,3,4,5,6]
let concated=nums.concat(letters)
console.log(...nums,...letters)
console.log(concated)

//join
let joined=letters.join(" ")
console.log(joined)
console.log(typeof joined)