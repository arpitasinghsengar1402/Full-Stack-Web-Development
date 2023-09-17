// const navitems=document.getElementsByTagName("a")
// console.log(navitems)

// for(let i=0;i<navitems.length;i++)
// {
//     const navitem=navitems[i]
//     navitem.style.backgroundColor="#fff"
//     navitem.style.color="green"
//     navitem.style.fontWeight="bold"
// }

//we cant use foreach method to iterate through html collection

//for of loop
for(let navitem of navitems)
{
    navitem.style.backgroundColor="#fff"
    navitem.style.color="green"
    navitem.style.fontWeight="bold"
}

Array.from(navitems)
navitems.array.forEach((navitem)=> {
    navitem.style.backgroundColor="#fff"
    navitem.style.color="green"
    navitem.style.fontWeight="bold"
});

console.log(Array.isArray(navitems))
const navitems=document.querySelectorAll(".navitem")
console.log(navitems[1])