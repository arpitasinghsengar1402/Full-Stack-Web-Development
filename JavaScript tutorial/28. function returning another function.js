//Function returning another function

let compliment=function(msg)
{
    return function(name)
    {
        console.log(`${msg} ${name}`)
    }
}
compliment("You are a good coder")("carry")

//2nd method

let complimented=compliment("you are a good coder")
complimented("karan")
console.log(complimented)  // give function defination

//compliment is higher order function