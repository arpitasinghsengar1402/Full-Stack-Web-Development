//how to store complex data structures like array of objects

//ultimately in localStorage data souce in String formatte

let vehicle=[
    {company:"honda",model:"2009"},
    {company:"toyota",model:"2010"}
]

console.log(vehicle, typeof vehicle)
let Stringofvehicle=JSON.stringify(vehicle)
console.log(Stringofvehicle,typeof Stringofvehicle);

localStorage.setItem("vehicle",Stringofvehicle)
console.log(localStorage);

//get stored item again in the object formatte

let storeddata=localStorage.getItem("vehicle")

let objectformatte=JSON.parse(storeddata)
console.log(objectformatte)