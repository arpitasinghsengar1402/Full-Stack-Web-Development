//Updating and changing content

//innerText
//inner spaces
//retrive and set content in plain text
let content=document.querySelector('.content')
console.log(content.innerText);
content.innerText="<p>Great Learning</p>"
console.log(content.innerText);

//innerhtml
//It does not ignore spaces
//retrives and set content in html formatte
console.log(content.innerHTML)
content.innerHTML="<p>Great Learning</p>"
console.log(content.innerHTML)
content.innerHTML+="<h3>Great Learning</h3>"
console.log(content.innerHTML)