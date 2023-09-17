let foo="foo"
console.log(foo)
function getfullname(firstname,lastname)
{
    console.log(arguments)
    let myvar="var inside func"
    console.log(myvar)
    const fullname=firstname+" "+lastname
    return fullname
}

const personname=getfullname("arpita","singh")
console.log(personname)