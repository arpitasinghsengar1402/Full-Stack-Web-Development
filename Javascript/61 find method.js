const myarray=["hello","cat","dog","lion"]

// function islength3(string)
// {
//     return string.length===3
// }
// const ans=myarray.find(islength3)

const ans=myarray.find((String)=>String.length===3)
console.log(ans)


const users=[
    {
        userid:1,firstname:"arpita",age:23
    },
    {
        userid:2,firstname:"karan",age:22
    },
    {
        userid:3,firstname:"neha",age:40
    },
    {
        userid:4, firstname:"saroj",age:30
    }
]
const name=users.find((user)=>user.userid===3)
console.log(name)