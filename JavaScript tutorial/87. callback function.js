//async js

//callback function
let todos=(callback)=>{

let request =new XMLHttpRequest()
request.addEventListener("readystatechange",()=>{
    console.log(request,request.readyState);
    if(request.readyState===4 && request.status==200)
    {
        // console.log(request,request.responseText);
        callback(undefined,request.responseText)
    }
    else if(request.readyState===4)
    {
        // console.log("data cannot be fetched");
        callback("data could not fetch",undefined)
    }
})

//set up the request
request.open("Get","https://jsonplaceholder.typicode.com/todos")
// request.open("Get","https://jsonplaceholder.typicode.com/todos00")

//sending the request
request.send();
}
console.log('before calling1');
console.log('before calling2');
todos((error,data)=>{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(data);
    }
})

console.log('before calling3');
console.log('before calling4');