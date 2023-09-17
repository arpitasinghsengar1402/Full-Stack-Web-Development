function myapp()
{
    const myvar="value1"

    function myfunc()
    {
        const myvar="value59"
        console.log("inside myfunc",myvar)
    }
    const myfunc2=function(){}
    const myfunc3=()=>{}
    console.log(myvar)
    myfunc()
}
myapp()



const myvar="value1"
function myapp()
{
    function myfunc()
    {
        const myfunc2=()=>{
            console.log("inside myfunc",myvar)
        }
         myfunc2()
    }
console.log(myvar)
myfunc()
}
myapp() 