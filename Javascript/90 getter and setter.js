class person{
    constructor(firstname,lastname,age)
    {
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
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
const person1=new person("arpita","singh",6)
// // console.log(person1.fullname)
// console.log(person1.firstname)
// console.log(person1.lastname)
// // person1.setname("karan","kumar")
// person1.firstname="karan"
// person1.lastname="kumar"
// console.log(person1.firstname)
// console.log(person1.lastname)
person1.fullname="karan kumar"
console.log(person1)


