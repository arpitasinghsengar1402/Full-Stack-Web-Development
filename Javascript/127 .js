const body=document.body
body.addEventListener("keypress",(e)=>{
    console.log(e.key)
})

const mainbutton=document.querySelector(".btn-headline")
mainbutton.addEventListener("mouseover",()=>{
    console.log("mouseover event occurerred")
})


mainbutton.addEventListener("mouseleave",()=>{
    console.log("mouseleave event occurerred")
})