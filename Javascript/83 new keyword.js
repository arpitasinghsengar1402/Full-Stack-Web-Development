// function createuser(firstname,age)
// {
//     this.firstname=firstname;
//     this.age=age
// }
// createuser.prototype.about=function()
// {
//     console.log(this.firstname,this.age)
// }
// const user1=new createuser("arpita", 7)
// console.log(user1)

//new keyword
//this={}
//return={}
//


function createuser(firstname,lastname,email,age,address)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.address=address;
}
createuser.prototype.about=function(){
    return`${this.firstname} is ${this.age} years old`
}
createuser.prototype.is18=function(){
    return this.age>=18
}
createuser.prototype.sing=function(){
    return "toon na na na na la la"
}
createuser.prototype.dance=function(){
    return "katak, kuchipudi"
}


const user1=new createuser("arpita","singh","as999@gmail.com",23,"agra")
const user2=new createuser("neha","singh","neha999@gmail.com",50,"agra")
const user3=new createuser("karan","singh","karan999@gmail.com",21,"agra")

console.log(user1)
console.log(user1.about())
console.log(user1.sing())
console.log(user1.dance())
console.log(user3.is18())