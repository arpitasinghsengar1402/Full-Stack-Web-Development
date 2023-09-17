//Bubbling and delegation

// creating
// const ul=document.querySelector('ul')
// ul.addEventListener("click",()=>{
//     console.log("inside Ul")
// })


// let button=document.querySelector(".clickme")
// console.log(eventElement)

button.addEventListener("click",function(){
    let li=document.createElement("li")
    li.textContent="something new added"
    ul.prepend(li)
})

//removing

// let elements=document.querySelectorAll('li')
// elements.forEach(function(element){
//     element.addEventListener('click',e=>{
//         console.log("item clicked")
//         console.log(e.target);
//         e.target.style.textDecoration="line-through"
//         console.log("inside li")
//         e.target.remove()
//     })
// })

//delegation

const ul=document.querySelector('ul')
ul.addEventListener("click",(e)=>{
    // console.log("inside ul");
    if(e.target.nodeName=="LI"){
        e.target.remove()
    }
})