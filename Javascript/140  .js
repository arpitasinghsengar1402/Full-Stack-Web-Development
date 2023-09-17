const URL="https://jsonplaceholder.typicode.com/posts"
const xhr=new XMLHttpRequest()
console.log(xhr)
console.log(xhr.readyState)
xhr.open("GET",URL)
// console.log(xhr.readyState)
// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4)
//     {
//         console.log(xhr)
//         // console.log(xhr.response)
//         // console.log(typeof xhr.response)
//         const response=xhr.response
//         const data=JSON.parse(response)
//         console.log(data)
//         console.log(typeof data)
//     }
// }

xhr.onload=function(){
    console.log(xhr.readyState)
}
xhr.send()