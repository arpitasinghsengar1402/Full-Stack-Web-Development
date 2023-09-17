const ul=document.querySelector(".todo-list")
// const listitems=document.querySelector(".todo-list li")
const listitems=ul.getElementsByTagName("li")


const sixthli=document.createElement("li")
sixthli.textContent="item6"
// const ul=document.querySelector(".todo-list")
ul.append(sixthli)
console.log(listitems)

//queryselector=static list
//getelementbysomething =live list