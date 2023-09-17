//form events

let form=document.querySelector('.sign-up-form')
console.log(form);
// let email=document.querySelector("#email")
// let password=document.querySelector("#password")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("submit the form successfully")
    // console.log(email.value,password.value)
    console.log(form.email.value,form.password.value)
})