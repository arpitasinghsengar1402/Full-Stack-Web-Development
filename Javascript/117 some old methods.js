const ul=document.querySelector(".todo-list")
const li=document.createElement("li")
li.textContent="new todo"
const referencenode=document.querySelector(".first-todo")
// ul.appendChild(li)
// ul.insertBefore(li,referencenode)
// ul.replaceChild(li,referencenode)
ul.removeChild(referencenode)