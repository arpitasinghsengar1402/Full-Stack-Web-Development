const num=[3,5,11,9]
const ans=num.some((n)=>n%2===0)
console.log(ans)



const usercart=[
    {productid:1,prodctname:"mobile",price:12000},
    {productid:2,prodctname:"laptop",price:50000},
    {productid:3,prodctname:"shoes",price:18000},
    {productid:4,prodctname:"headphone",price:250000}
]

const answer=usercart.some((usercart)=>usercart.price>100000)
console.log(answer)