//getting html element/s using queryselector /all
//queryselector returns "first element" that match css selector
//to get all matched elements we use queryselectorall

let resultedelement=document.querySelector('p')
console.log(resultedelement)

let resultedelement1=document.querySelectorAll('p')
console.log(resultedelement1)

//access elements with class
let resultedelement2=document.querySelector('.coderdost')
console.log(resultedelement2)

//acess elements with id
let resultedelement3=document.querySelector('#coders')
console.log(resultedelement3)