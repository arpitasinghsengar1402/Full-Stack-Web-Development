//flatmap method
//it is a combination of the map() method
//and flatMap(). It applies a function to each element in an array, and then flattens (concatenates)
//the result into one big list.
let cart=[{
    name:"mobile-number",qty:2,price:500
},
{
    name:"tablet",qty:1,price:1000
}]
let newcart=cart.flatMap(item=>{
    if(item.name==="mobile-number"){
        return [item,{
            name:"screen protector",qty:1,price:0
        }]
    }
})
console.log(cart)
console.log(newcart)