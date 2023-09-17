//async js

//callback hell(chain of callback function inside one another)

let todos=(resource,callback)=>{

    let request =new XMLHttpRequest()
request.addEventListener("readystatechange",()=>{
        // console.log(request,request.readyState);
    if(request.readyState===4 && request.status==200)
        {
            // console.log(request,request.responseText);
            // let data=JSON.parse(request.responseText)
            callback(undefined,data)  //regular js object
        }
        else if(request.readyState===4)
        {
            // console.log("data cannot be fetched");
            callback("data could not fetch",undefined)
        }
    })
    
    //set up the request
    request.open("Get",resource)
    // // request.open("Get","https://jsonplaceholder.typicode.com/todos")
    // request.open("Get","https://jsonplaceholder.typicode.com/todos00")
    
    //sending the request
    request.send();
    }


//promise genral example
let getsomething=()=>{
    return new Promise((resolve ,reject)=>{
        setTimeout(()=> resolve('hello'),1500)

})
}
getsomething().then((result)=>console.log(`the result is ${result}`)).catch((error)={
    console.log(error)
})
//async code
//chain of todos function(callback)=>callback hell

    todos("data.json",(error,data)=>{  //will take time
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log(data);
        }
        todos("mario.json",(error,data)=>{
            if(error)
        {
            console.log(error);
        }
        else
        {
            console.log(data);
        }
        })
        todos("lurie.json",(error,data)=>{
            if(error)
        {
            console.log(error);
        }
        else
        {
            console.log(data);
        }
        })
    })
