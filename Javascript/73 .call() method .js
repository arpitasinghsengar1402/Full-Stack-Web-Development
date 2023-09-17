// /about call method


// const user1={
//     firstname:"arpita",
//     age:25,
//     about:function(){
//         console.log(this.firstname,this.age)
//     }
// }
// const user2={
//     firstname:"mohit",
//     age:45
// }
// user1.about.call(user1)
// user1.about.call(user2)
// user1.about.call()


//apply method


function about(hobby,musician)
{
    console.log(this.firstname , this.age , hobby,musician)
}
const user1={
    firstname:"arpita",
     age:25
}
const user2={
     firstname:"mohit",
     age:45
}
// about.apply(user1,["guitar","bach"])


//bind method

const func=about.bind(user2,"guitar","bach")
func()