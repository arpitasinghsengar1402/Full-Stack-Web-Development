const numbers=[1,2,3,4,5,6]

const sum=numbers.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
})
console.log(sum)

//21

const usercart=[
    {productid:1,prodctname:"mobile",price:12000},
    {productid:2,prodctname:"laptop",price:50000},
    {productid:3,prodctname:"shoes",price:18000},
    {productid:4,prodctname:"headphone",price:10000}
]
const add=usercart.reduce((totalprice,currentproduct)=>{
     return currentproduct.price+totalprice
},0)
console.log(add)

//90000