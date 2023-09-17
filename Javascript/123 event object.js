//selects only first function
// const firstbutton=document.querySelector("#one")
// // firstbutton.addEventListener("click",function(){
// //     console.log(this)
// firstbutton.addEventListener("click",function(event){
//         console.log(event)
// })


const allbtn=document.querySelectorAll(".my-buttons button")
allbtn.forEach(function(button){
    button.addEventListener("click",function(e){
        console.log(e)
        console.log(e.target)
        console.log(e.currentTarget)
    })
})