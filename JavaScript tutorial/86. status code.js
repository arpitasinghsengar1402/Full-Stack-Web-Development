//async js

//HTTP response status code

//informational responses(100-199)
//successful responses(200-299)
//redirection messages(300-399)
//client error responses(400-499)
//server error responses(500-599)

let request =new XMLHttpRequest()
console.log(request,request.readyState);

request.addEventListener("readystatechange",()=>{
    console.log(request,request.readyState);
    if(request.readyState===4)
    {
        console.log(request,request.responseText);
    }
})

//set up the request
// request.open("Get","https://jsonplaceholder.typicode.com/todos")
request.open("Get","https://jsonplaceholder.typicode.com/todos00")

//sending the request
request.send();