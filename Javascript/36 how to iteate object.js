const person={
    name:"Arpita",
    age:22,
    "person hobbies":["guitar","sleeping","reading"]
}

//for in loop
for(let key in person)
{
    console.log(person[key])
    console.log(`${person[key]}`)
    console.log(key,person[key])
}

console.log(Object.keys(person))

for(let key of Object.keys(person))
{
    console.log(person)
}