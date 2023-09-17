const num=[4,6,8,10,2]
const ans=num.every((number)=>number%2===0)
console.log(ans)


const usercart=[
    {productid:1,prodctname:"mobile",price:1200},
    {productid:2,prodctname:"laptop",price:5000},
    {productid:3,prodctname:"shoes",price:18000},
    {productid:4,prodctname:"headphone",price:10000}
]
const user=usercart.every((cartprice)=>cartprice.price<30000)
console.log(user)
// true bcz price of every item is not less than 30000