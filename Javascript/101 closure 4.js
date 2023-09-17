function func()
{
    let counter=0
    return function()
    {
        if(counter<1)
        {
            console.log("hii you called me")
            counter++
        }
        else
        {
            console.log("i called earlier")
        }
    }
}

const myfunc=func()
myfunc()
myfunc()
myfunc()