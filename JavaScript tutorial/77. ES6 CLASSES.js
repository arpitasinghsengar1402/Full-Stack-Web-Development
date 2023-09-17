//OOPS 

//ES6 classes (they still implement prototypal inheritence behind the scenes)

//class declartion
class car{
   constructor(color,model){
         this.color=color;
         this.model=model
   }
   startrngine(){
    console.log("this is start engine method of car class");
   }
}

car.prototype.breakmethod=function(){
    console.log("break method of car");
}

let honda=new car("red",2022)
console.log(honda);
console.log(honda.__proto__);
console.log(honda.__proto__.isPrototypeOf(honda));
honda.startrngine()
honda.breakmethod()


//important points
//classes are not hoisted
//classes are also first class citizens(pass as an argument or return)
//classes are executed in strict mode
