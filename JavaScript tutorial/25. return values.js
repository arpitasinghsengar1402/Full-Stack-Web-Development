//  Returning values (How to return values from the function)

let agecalculation=function(birthyear,currentyear=2023)
{
    let age  =currentyear-birthyear
    // console.log(`your current age is = ${age} `)
    return age
}
// agecalculation(2005)
let functionresult=agecalculation(2001)
console.log(`your age is ${functionresult}`)