let age=15;
let weight=60
if(age >18)
{
    console.log("qualify")
}
else
{
    console.log("Fail")
}

//Ternary operator (? :)

let result=age>18 ? weight>55 ? "qualify" :"weightissue": "ageissue";
console.log(result)