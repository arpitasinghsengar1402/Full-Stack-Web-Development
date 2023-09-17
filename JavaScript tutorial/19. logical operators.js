// Logical operator
// AND &&
// OR ||
// NOT !

let password="qwerty@"
// if(password.length>5 && password.includes('@'))   //and
if(password.length > 8 || password.includes('@'))   //or
{
    console.log("password strength is strong")
}
else
{
    console.log("change your password")
}

//not 

let status=false;
if(!status)
{
    console.log("your status is " , status)
}

// priorties
// not
// and , or (from left to right)

let result=true&&true||false && !false
console.log(result)