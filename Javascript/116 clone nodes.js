const ul=document.querySelector(".todo-list")
const li=document.createElement("li")
li.textContent="new todo"
const li2=li.cloneNode(true) //clone means coypy
ul.append(li)
ul.prepend(li2)