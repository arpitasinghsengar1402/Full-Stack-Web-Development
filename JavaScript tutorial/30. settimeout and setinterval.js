//settimeout :> Run function once after interval of time

//setinterval :> Run function repeatedly , starting after the interval of time then repaeating...

//settimeout
//syntax ->  setTimeOut(func | code, delay , arg1,arg2,...)
function greeting(name)
{
    console.log(`Welcome ${name} to our coder dost family`)
}
// setTimeout(greeting,5000,"arpita") 
//5000ms=5sec


//setInterval
setInterval(greeting,1000,"arpita")
