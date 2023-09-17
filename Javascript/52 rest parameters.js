// function myfunc(a,b,...c)
// {
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// myfunc(3,4,5,6,7,8)


function addall(...num)
{  
    let total=0
    for(let n of num){
        total=total+n
    }
    return total
}
const ans=addall(1,2,3,4,5,6,7,8,9)
console.log(ans)