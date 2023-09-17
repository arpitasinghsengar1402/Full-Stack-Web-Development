//async js

//making http request

let request=new XMLHttpRequest()
console.log(request);
request.addEventListener("readystatechange",()=>{
    // console.log(request,request.readyState);
    if(request.readyState===4)
    {
        console.log(request.responseText);
    }
})

//set up the request

request.open("Get","https://jsonplaceholder.typicode.com/todos")

//sending the request
request.send()

//use this link for practise to get json data in response

//value state description
//0. unsent client has been created.open() not called yet
//1. opened open() has been called
//2. headers_received send() has been called and headers
//3. loading  body is being transferred from server to browser
//4. done transfer complete