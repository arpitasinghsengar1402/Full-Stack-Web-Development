function outfunc()
{
    function innerfunc()
    {
        console.log("hello world")
    }
    return innerfunc
}
const ans=outfunc()
ans()





function fullname(firstname,lastname)
{
    function name()
    {
        console.log(firstname,lastname)
    }
    return name
    
}

const answer=fullname("arpita","singh")
answer()