// basic form validation using regex

//implement username validation

//username can only consits of A-Z or a-z
//length of username bw 6 to 12

let form = document.querySelector('.sign-up-form')
let user=document.querySelector('#name')
let password=document.querySelector('#password')
let usernamepattern=/^[A-Za-z]{6-12}$/

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let username=user.value;
    //"test" method return boolean values
    let result=usernamepattern.test(username)
    if(result==true)
    {
        console.log("username is valid")
    }
    else
    {
        console.log("username is not valid try again")
    }
})

//live feedback

user.addEventListener('keyup',(e)=>
{
    if(usernamepattern.test(e.target.value)){
        user.setAttribute("class","success")
    }
    else{
       user.setAttribute("class","error")
    }
})