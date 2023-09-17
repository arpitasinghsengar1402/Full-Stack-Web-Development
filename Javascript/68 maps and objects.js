// const person=
// {
//     firstname:"arpita",age:21,1:"one"
// }
// // console.log(person.firstname)
// // console.log(person["firstname"])
// console.log(person[1])
// for(let key in person)
// {
//     console.log(typeof key)
// }


//key value pair
// const person=new Map()
// person.set("firstname","arpita")
// person.set("age",7)
// person.set(1,"one")
// person.set([1,2,3],"onetwothree")
// person.set({1:"one"},"one")
// console.log(person.get(1))
// console.log(person)
// for(let key of person.keys())
// {
//     console.log(key,typeof key)
// }
// for(let key of person)
// {
//     console.log(key)
// }

const person1=
{
    id:1,
    firstname:"arpita"
}
const userinfo=new Map()
userinfo.set(person1,{age:25,gender:"female"})
// console.log(userinfo)
console.log(person1.id)
console.log(userinfo.get(person1).gender)