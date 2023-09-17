//oops

//class inheritance (sub class)

//class declaration

//parent class

class car{
    constructor(color,model){
          this.color=color;
          this.model=model
    }
    startengine(){
     console.log("this is start engine method of car class");
    }
}

//child method

class bike extends car{
   //add some new properties and method as well
   constructor(color,model,enginecapacity)
   {
    super(color,model)
    this.enginecapacity=enginecapacity
   }
   BIKEmethod(){
    console.log("this is a method of bike class");
   }
}

let newbike= new bike("black",2018,"125CC")
let bike2=new bike("brown",2021,"200CC")
console.log(newbike,bike2);
console.log(newbike.__proto__);

let honda= new car("red",2023)
console.log(honda)