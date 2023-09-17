let car=
{
    color:"black",
    model:"2023",
    company:"renult"
}
console.log(car , typeof car)

//accessing the javascript object properties
console.log(car["color"])
//other way
console.log(car.company)

let propertyname="color";
console.log(car[propertyname])
console.log(car.propertyname) 

//modify the object
car.color="white"
console.log(car.color)
console.log(car)