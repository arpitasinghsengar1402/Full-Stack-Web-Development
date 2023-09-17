console.log(this)
console.log(window)
this===window

function myfun()
{
    console.log("hello world")
}
window.myfun()

function myfun()
{
    console.log(this)
}
myfun()


"use strict"
function myfun()
{
    console.log(this)
}
myfun()