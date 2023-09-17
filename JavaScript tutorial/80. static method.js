//oops

//static method (method which is not present on constructor)
//prototype property but constructor itself

//class declaration

class car{
    constructor(color,model){
          this.color=color;
          this.model=model
    }
    startengine(){
     console.log("this is start engine method of car class");
    }
}

//static method

car.breakmethod=function(){
    console.log('this is break method');
}
let honda=new car("red",2023)
honda.startengine()
car.breakmethod()

console.log(Number.parseInt(12))
console.log(Array.from(document.querySelectorAll(h2)))