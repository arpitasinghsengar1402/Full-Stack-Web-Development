// in Js classes are fake


class createuser{
    constructor(firstname,lastname,email,age,address){
        console.log("constructor called")
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.age=age;
        this.address=address;
    }
    about(){return`${this.firstname} is ${this.age} years old`}
    is18(){ return this.age>=18}
    sing(){return "toon na na na na la la"}
    dance(){return "katak, kuchipudi"}
}

const user1=new createuser("arpita","singh","as999@gmail.com",23,"agra")
const user2=new createuser("neha","singh","neha999@gmail.com",50,"agra")
const user3=new createuser("karan","singh","karan999@gmail.com",21,"agra")

console.log(user1)
console.log(user1.about())
console.log(user1.sing())
console.log(user1.dance())
console.log(user3.is18())
console.log(Object.getPrototypeOf(user1))

//class constructed without new keyword