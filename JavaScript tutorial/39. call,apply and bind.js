//Call and apply method
//we can manually set the value of "this" keyword using "call"
"use strict"

let mainplane={
    airline:"fly india",
    iatacode:"FI",
    booking:[],
    book:function(flightnum,name)
    {
        console.log(`${name} booked flight on ${this.airline} with fight number ${this .flightnum}`)
        this.booking.push({flightname:`${this.airline}`, name:name,flightnum:`${this.iatacode}`})
    }
}
mainplane.book(553,"arpita")
mainplane.book(225,"karan")
console.log(mainplane)

//new plane launched of same group

let childplane={
    airline:"child plane",
    iatacode:"CP",
    booking:[]
}
let book=mainplane.book
// book(665,"kirti")

book.call(childplane,689,"zack")
console.log(childplane)

book.call(mainplane,99,"neha")
console.log(mainplane)

//apply method
book.apply(childplane,[768,"anshu"])
console.log(childplane)