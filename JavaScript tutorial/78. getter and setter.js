//oops
//getter and setter method in javascript

//they are used to allow  you to define object accessors(computed properties)
//we can  also use in class
//class declaration

class car{
    constructor(color,model){
          this.color=color;
          this.model=model
    }
    startengine(){
     console.log("this is start engine method of car class");
    }
    get _startengine(){
        console.log("this is start engine method using get");
    }
    set changeColor(color){
        console.log(this.color=color);
    }
 }

 let honda=new car("red",2022)
 honda.startengine() //accessing as function
 honda._startengine //accessing as property
 //changes color
 honda.changeColor="blue" //set as property