//more events

//copy events

let copyrightelement=document.querySelector('.copy')
copyrightelement.addEventListener('copy',()=>{
         console.log("nooo, you cannt copy")
})

//mouse move event

let box=document.querySelector('.box')
box.addEventListener('mousemove',(e)=>{
    console.log(e.offsetX,e.offsetY)
})