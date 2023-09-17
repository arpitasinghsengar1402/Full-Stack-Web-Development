let age=22
let string1="Arpita"
let string2="Singh"
let fullname=string1+" "+string2;
console.log(fullname)

// let aboutme="My name is " + fullname+" and my age is"+age;
let aboutme=`my name is ${fullname} and my age is ${age}`;
console.log(aboutme)


let a="21"
let b="12"
let c=a+b;
console.log(c)
console.log(typeof(c))
c=+a+ +b;
console.log(c)
console.log(typeof(c))