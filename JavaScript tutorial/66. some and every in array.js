//some and every method in array

//some mathod returns true if any array element pass the test
//every mathod returns true if all array element pass the test


//some
let scores=[25,34,67,65,80,92]

let result=scores.some(score=>{
    return score>95
})
console.log(result)

//every
let newscore=[54,65,58,75,81,76]

let result1=newscore.every(newscore=>{
    return newscore>50
})
console.log(result1)