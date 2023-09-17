//other ways to get html elements

let queryselectorelement=document.querySelectorAll('p')
console.log(queryselectorelement)

// queryselectorelement.forEach(element => {
//     console.log(element)
// });

//get elements by tagname
let tagnameelements=document.getElementsByTagName('p')
console.log(tagnameelements)

// tagnameelements.forEach(element => {
//     console.log(element)
// });

//get elements by classname

let classnameelements=document.getElementsByClassName('coderdost')
console.log(classnameelements)

//get elements by id
let elementbyid=document.getElementById('coders')
console.log(elementbyid)