const btn=document.querySelector(".btn-headline")
// console.log(btn)
// console.dir(btn)
// btn.onclick=function(){
//     console.log("you clicked me!!!!!!!!!")
// }


//another method
function clickme(){
    console.log("you clicked me ,yeah")
}
btn.addEventListener("click",clickme)