//arrow functions

//special form of function expression
//it allows us to write function more fast because :-
//No need to use function keyword
//No need to use parenthesis() in case of single parameter
//No need to use curely {} if single line of code in function
//No need to use return statement if single line of code in function

//function expression

// let invitation=function(name)
// {
//     console.log(`welcome ${name} in our event`)
// }
// invitation("Arpita")

//using arrow function
let invitation=name=>
{
     return(`welcome ${name} to this event`)
}
console.log(invitation("coders"))