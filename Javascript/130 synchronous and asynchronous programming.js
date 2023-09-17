// javascript is synchronous programming and single threaded
// synchronous means every line executes one after other

//set timeout
console.log("script starts")

const id= setTimeout(()=>
{
    console.log("inside set timeout")
},0)

for(let i=1;i<100;i++)
{
    console.log("......")
}

console.log("settimeout id is ",id)

console.log("clearing time out")
clearTimeout(id)

console.log("script end")