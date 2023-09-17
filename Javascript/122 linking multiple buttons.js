// const firstbtn=document.querySelector("button")
// firstbtn.addEventListener("click",function()
// {
//     console.log("you clicked me")
// })

const allbtn=document.querySelectorAll(".my-buttons button")
// console.log(allbtn)

//for of loop
// for (let button of allbtn)
// {
//   button.addEventListener("click",function(){
//     console.log("you clicked me,,,")
//   })
// }

//this event
// for (let button of allbtn)
// {
//   button.addEventListener("click",function(){
//     console.log(this)
//     console.dir(this)
//     console.log(this.textContent)
//   })
// }

//traditional loop
// for(let i=0;i<allbtn.length;i++)
// {
//     allbtn[i].addEventListener("click",function(){
//         console.log(this)
//     })
// }

//forEach loop
allbtn.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this)
    })
})