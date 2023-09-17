// function addtwo(a,b)
// {
//     if(typeof b==undefined)
//     {
//         b=1
//     }
//     return a+b
// }

// const ans=addtwo(4,5)
// console.log(ans)


//or


function addtwo(a,b=0)
{
    return a+b
}

const ans=addtwo(4,5)
console.log(ans)