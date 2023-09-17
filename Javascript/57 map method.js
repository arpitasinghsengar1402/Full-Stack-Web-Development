const numbers=[3,4,5,6,7,8]

const square=function(number){
    return number*number
}
const squarenumber=numbers.map(square)
console.log(squarenumber)


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
const usernames=users.map((user)=>{
    return user.firstname
})
console.log(usernames)