// this loop is used in object
 let car={
    color:"white",
    model:2024,
    company:"bmw"
 }
 console.log(car)
 let x=""
  for(let key in car)
  {
    x=x+car[key]
  }
  console.log(x)