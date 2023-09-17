//Event basics (click me)

let eventelement=document.querySelector(".clickme")
console.log(eventelement)

eventelement.addEventListener('click',function(){
    console.log("clicked  me")
})


let elements=document.querySelectorAll('li')
console.log(elements)
elements.forEach(function(element){
    element.addEventListener('click',function(e){
        console.log("item clicked")
        console.log(e)
        console.log(e.target)
        e.target.style.textDecoration="line-through"
    })
})