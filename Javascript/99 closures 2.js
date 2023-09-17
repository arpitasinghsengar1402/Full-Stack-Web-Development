function hello(x)
{
    const a="A"
    const b="B"
    return function()
    {
        console.log(a,b,x)
    }
}

const ans=hello("arg")
ans()