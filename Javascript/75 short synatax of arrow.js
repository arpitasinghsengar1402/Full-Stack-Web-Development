const user1={
    firstname:"arpita",
    age:25,
    about(){
        console.log(this)
        console.log(this.firstname,this.age)
    }
}
user1.about()