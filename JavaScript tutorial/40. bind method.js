function greet(){
    console.log(`welcome ${this.firstname} ${this.lastname} on coding`)
}

let user={
    firstname:"arpita",
    lastname:"singh"
}

let greets=greet.bind(user)
greets()