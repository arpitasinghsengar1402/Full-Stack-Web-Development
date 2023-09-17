//prototype inheritance (using constructor function)

//parent class
let car=function(color,model)
{
    this.color=color;
    this.model=model
}

car.prototype.startengine=function(){
    console.log("this is start engine method");
}

let honda = new car("blue",2023)
console.log(honda);

//child class
let bike=function(color,model,enginecapacity)
{
    car.call(this,color,model)
    this.enginecapacity=enginecapacity
}
//inherited from parent class
bike.prototype=Object.create(car.prototype)

//not inherited
bike.prototype.ownbike=function(){
    console.log("this is my own bike");
}
let bike1=new bike("green",2019,"200cc")
let bike2=new bike("green",2015,"200cc")
console.log(bike1,bike2);