//get multiple elements using getelements by class name
//give html collection

// const navitems=document.getElementsByClassName("nav-item")
// console.log(navitems)
// console.log(navitems[0])
// console.log(navitems[1])
// console.log(typeof navitems)
// console.log(Array.isArray(navitems))

//get multiple elements items using queryselectorall
//give nodelist collection

const navitems=document.querySelector(".nav-item")
console.log(navitems)
console.log(navitems[0])
console.log(navitems[1])
console.log(typeof navitems)
console.log(Array.isArray(navitems))