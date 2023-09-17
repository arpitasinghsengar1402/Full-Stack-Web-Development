let n="Arpita";
let age=22;
if(n[0]==="A"){
    console.log("your name starts with A")
}

if(age>18){
    console.log("you are above 18")
}
//other method to define

if(n[0]==="A" && age>18){
    console.log("Name starts with A and is above 18")
}
else{
    console.log("inside else")
}

//or
if(n[0]==="A"||age>18){
    console.log("inside if");
}
else{
    console.log("inside else")
}