//Regular expression (Regex)
//it is a pattern of characters used to do pattern matching
//or we can say for "data validation"

//implementation of password validation

//at least contain one upper case
//at least contains one lower case
//at least contain one diigit 0 to 9

let form=document.querySelector('.sign-up-form')
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let passwordpattern="^(?=.*?[A-Z]) ^(?=.*?[a-z]) ^(?=.*?[0-9]) .{8,10}$"

form.addEventListener('submit',(e)=>{
e.preventDefault()
let passwordvalue=password.value;
console.log(passwordvalue)
let result=passwordvalue.match(passwordpattern)
console.log(result)
if(result){
    console.log("your password is strong")
}
else
{
    console.log("not strong")
}
})