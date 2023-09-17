function myfunc(power)
{
    return function(number)
    {
        return number**power
    }
}

const cube=myfunc(3)
const ans=cube(3)
console.log(ans)

const square=myfunc(2)
const ans2=square(3)
console.log(ans2)

