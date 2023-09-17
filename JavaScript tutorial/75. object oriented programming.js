// OOPS IN JAVASCRIPT

//constructors function and the "new" operator
//we cannot use "arrow" function as constructor
//call "constructor" function using "new" keyword

//1. new {object} created empty initially
//2. "this" ={object}
//3. object linked to prototype
//4. function automatically return {object}

let car=function(color,model){
    //instance properties
    this.color=color;
    this.model=model
    //not a goood practise to declare function inside function \
    // this.login=function(){
    //     console.log("logged in")
    // }
}
// let result=new car("black",2023)
// console.log(result);

//method
car.prototype.startengine=function(){
    console.log("this is start engine method");
}

//we can also set "properties" to prototype
console.log(car.prototype);

let instanceofcar=new car("yellow",2021)
let instance = new car("blue",2000)
// console.log(instanceofcar,instance);
// console.log(instance instanceof car);
// instanceofcar.startengine()
console.log(instanceofcar.__proto__);
console.log(instanceofcar.__proto__.isPrototypeOf(instance));

//it is same as 
console.log(car.prototype);
console.log(car.prototype.isPrototypeOf(car));
console.log(car);
console.log(instance);

//car.prototype is protype of all objects created through the car constructor



