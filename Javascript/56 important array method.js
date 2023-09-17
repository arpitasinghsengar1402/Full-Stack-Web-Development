//forEach


const num=[4,5,67,9,2]
// function mulby2(n,index)
// {
//     console.log("index is ", index)
//     console.log(`${n}*2=${n*2}`)
// }

// for (let i=0;i<num.length;i++)
// {
//     console.log(i)
//     mulby2(num[i],i)
// }
// foreach can did the work of for loop

num.forEach(function(n,index){
    console.log("index is ", index)
    console.log(`${n}*2=${n*2}`)
})


const users=[
    {
        firstname:"arpita",age:23
    },
    {
        firstname:"karan",age:22
    },
    {
        firstname:"neha",age:40
    },
    {
        firstname:"saroj",age:30
    }
]
// users.forEach(function(user){
//     console.log(user.firstname)
// })

users.forEach((user,index)=>{
    console.log(user.firstname,index)
})


const a=[1,2,3,4,5,6,7,8,9]
a.forEach(function(n,index){
    console.log("index is ",index, a.n)
})