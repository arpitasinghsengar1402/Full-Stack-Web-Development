//create and remove the elements

//creating
const ul=document.querySelector('ul')
let button=document.querySelector(".clickme")
console.log(button)

button.addEventListener("click",function(){
    console.log("clicked me")
    let li=document.createElement('li')
    li.textContent="More"
    ul.append(li)
    // ul.prepend(li)
})

//removing

let elements=document.querySelectorAll('li')

elements.forEach(function(element){

    element.addEventListener("click",e=>{
        console.log("item clickedd")
        console.log(e.target);
        e.target.style.textDecoration="line-through"
        console.log("inside li")
        e.target.remove()
})
    
})