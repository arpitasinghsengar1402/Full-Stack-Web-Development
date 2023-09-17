const usermethod={
    about:function(){
        return`${this.firstname} is ${this.age} years old`
    },
    is18:function(){
        return this.age>=18
    },
    sing:function(){
        return "toon na na na na la la"
    },
    dance:function(){
        return "katak, kuchipudi"
    }
}
function createuser(firstname,lastname,email,age,address)
{
    const user=Object.create(usermethod)
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    return user

return user
}

const user1=createuser("arpita","singh","as999@gmail.com",23,"agra")
const user2=createuser("neha","singh","neha999@gmail.com",50,"agra")
const user3=createuser("karan","singh","karan999@gmail.com",21,"agra")
console.log(user1.about())
console.log(user2.about())
console.log(user3.about())

