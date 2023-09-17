let parentelement=document.querySelector('.content')
// all children of parent
console.log(parentelement.children)

//we cannot run foreach method on html collection so first convert it into array
console.log(Array.from(parentelement.children))

Array.from(parentelement.children).forEach(function(element){
    element.classList.add("coders")
})

//child element
//find the parent of specific child
// let childelement=document.querySelector('.A')
let childelement=document.querySelector('h2')
console.log(childelement.parentElement)

//find the next/previous sibling of the child
console.log(childelement.nextElementSibling)
console.log(childelement.previousElementSibling)