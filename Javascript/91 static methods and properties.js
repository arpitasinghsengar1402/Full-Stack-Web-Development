class person{
    constructor(firstname,lastname,age)
    {
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }
    static classinfo(){
        return "thois is person class"
    }
    get fullname(){
        return`${this.firstname} ${this.lastname}`
    }
    setname(firstname,lastname)
    {
        this.firstname=firstname
        this.lastname=lastname
    }
    set fullname(fullname)
    {
       const[firstname,lastname]= fullname.split(" ")
       this.firstname=firstname
       this.lastname=lastname
    }
}

const person1=new person("arpita","sharma",8)
// console.log(person1.eat())
console.log(person.classinfo())