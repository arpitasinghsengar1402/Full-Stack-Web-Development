const users=[
    {
        userid:1,
        firstname:"harshit",
        gender:"male"
    },
    {
        userid:2,
        firstname:"arpita",
        gender:"female"
    },
    {
        userid:3,
        firstname:"karan",
        gender:"male"
    }
]

const[user1,user2,user3,user4]=users
const [{firstname}, ,{gender}]=users
console.log(user1)
console.log(firstname)
console.log(gender)