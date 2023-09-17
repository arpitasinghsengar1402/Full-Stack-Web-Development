// function inside object is called as methods

function personinfo()
{
        console.log("firstname=",this.firstname)
        console.log("age =",this.age)
        console.log(`person name is ${this.firstname} and age is ${this.age}`)
}
const person1={
    firstname:"arpita",
    age:23,
    about:personinfo
}
const person2={
    firstname:"neha",
    age:35,
    about:personinfo
}

const person3={
    firstname:"karan",
    age:21,
    about:personinfo
}

person3.about()















