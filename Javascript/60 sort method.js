const num=[6,3,89,123,4567,43,65]
// num.sort((a,b)=>{
//     return a-b  //a-b for acending and b-a for decending
// })

// or

num.sort((a,b)=>a-b)
console.log(num)



const name=["A","B","z","D","o","r"]   //uppercase and lowercase has different ascii values
name.sort()
console.log(name)



const usercart=[
    {productid:1,prodctname:"mobile",price:12000},
    {productid:2,prodctname:"laptop",price:50000},
    {productid:3,prodctname:"shoes",price:18000},
    {productid:4,prodctname:"headphone",price:10000}
]
const lowtohigh=usercart.slice(0).sort((highprice , lowprice)=>{
    return highprice.price-lowprice.price
})
console.log(lowtohigh)