const person={
    name:"Arpita",age:22,hobbies:["guitar","sleeping","reading"]
}
console.log(typeof person)
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.hobbies)

person.gender="female"
console.log(person)

console.log(person["name"])
console.log(person["age"])
console.log(person["hobbies"])

person["person"]="male"
console.log(person)