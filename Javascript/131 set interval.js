// set interval

// console.log("script starts")
// setInterval((total) => {
//     console.log(Math.random(total))
// },100)
// console.log(
//     "script end"
// )



const body=document.body;
const button=document.querySelector("button")
const interval=setInterval(()=>
{
    const red=Math.floor(Math.random()*126)
    const green=Math.floor(Math.random()*126)
    const blue=Math.floor(Math.random()*126)
    const rgb=`rgb(${red} ,${green},${blue})`
    body.style.background=rgb
    console.log(rgb)
},1000)

button.addEventListener("click",()=>{
    clearInterval(interval)
    button.textContent=body.style.background
})

console.log(interval)