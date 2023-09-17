let hourhand=document.querySelector(".hour")
let minhand=document.querySelector(".minute")
let sechand=document.querySelector(".second")

let ticking=function(){
    let currentdate=new Date()
    console.log(currentdate)
    let gethour=currentdate.getHours()
    let getmin=currentdate.getMinutes()
    let getsec=currentdate.getSeconds()
    hourhand.textContent=gethour
    minhand.textContent=getmin
    sechand.textContent=getsec
}

setInterval(ticking,1000)