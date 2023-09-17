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
    get description()
    {
        return `color of bike is ${this.color} and the year in which bike is modelled is ${this.model}`

    }
 }
 let honda=new car("red",2022)
 console.log(honda.description)