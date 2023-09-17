const usermethod={
    about:function(){
        return`${this.firstname} is ${this.age} years old`
    },
    is18:function(){
        return this.age>=18
    }
}
function createuser(firstname,lastname,email,age,address)
{
    const user={}
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=usermethod.about;
    user.is18=usermethod.is18;

return user
}

const user1=createuser("arpita","singh","as999@gmail.com",23,"agra")

console.log(user1.about())


const user2=createuser("neha","singh","neha999@gmail.com",50,"agra")

console.log(user2.about())


const user3=createuser("karan","singh","karan999@gmail.com",21,"agra")

console.log(user3.about())
