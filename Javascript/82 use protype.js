
function createuser(firstname,lastname,email,age,address)
{
    const user=Object.create(createuser.prototype)
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    return user
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


const user1=createuser("arpita","singh","as999@gmail.com",23,"agra")
const user2=createuser("neha","singh","neha999@gmail.com",50,"agra")
const user3=createuser("karan","singh","karan999@gmail.com",21,"agra")

console.log(user1)
console.log(user1.about())
console.log(user1.sing())
console.log(user1.dance())
console.log(user3.is18())