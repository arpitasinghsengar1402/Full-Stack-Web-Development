function myfunc2(name)
{
    console.log("inside my func2")
    console.log(`your name is ${name}`)
}

function myfunc(callback)
{
    // console.log(a)
    console.log("hello world")
    callback("arpita")
}

myfunc(myfunc2)