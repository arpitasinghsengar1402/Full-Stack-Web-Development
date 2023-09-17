function createuser(firstname,lastname,email,age,address)
{
    const user={}
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return`${this.firstname} is ${age} years old`
    }
    user.is18=function(){
        return this.age>=18
    }
return user
}

const user1=createuser("arpita","singh","as999@gmail.com",23,"agra")
console.log(user1)
const is18=user1.is18()
console.log(is18)
const about=user1.about()
console.log(about)

