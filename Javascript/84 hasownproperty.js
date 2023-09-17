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

for(let key in user1)
{
    // console.log(key)
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}