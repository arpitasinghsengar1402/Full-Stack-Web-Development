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
class dog extends animal{
    constructor(name,age,speed){
      super(name,age)
      this.speed=speed
    }
    eat(){
        return`modified eat: ${this.name} is eating`
    }
    run(){
        return `${this.name} is running at ${this.speed} kmph`
    }
}

const tommy=new dog("tommy",2,24)
console.log(tommy.run())
console.log(tommy.eat())


const animal1=new animal("sheru",2)
console.log(animal1)