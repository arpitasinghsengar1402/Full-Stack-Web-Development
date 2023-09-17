// this method
//in each method we have an access of special keyword called "this"
//this keyword represent the object . calling the method in which this is present

let person={
    firstname:"arpita",
    lastname:"singh",
    city:"agra",
    birthyear:"2002",
    education:"web developer",
    getsummary:function(){
        return `${this.firstname} ${this.lastname} lives in ${this.city}. His birthyear is ${this.birthyear}`
    }
}
console.log(person.getsummary())