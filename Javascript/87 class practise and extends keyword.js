class animal{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    eat(){
        return `${this.name} is eating`
    }
    issupercute(){
        return this.age<=1
    }
    iscute(){
        return true
    }
}

// const animal1=new animal("tom",2)
// console.log(animal1)
// console.log(animal1.eat())
// console.log(animal1.issupercute())
class dog extends animal{
    
}
const tommy=new dog("tommy",3)
console.log(tommy)
console.log(tommy.eat())
console.log(tommy.issupercute())


class cat extends animal{

}
const billu=new cat("billu",1)
console.log(billu)