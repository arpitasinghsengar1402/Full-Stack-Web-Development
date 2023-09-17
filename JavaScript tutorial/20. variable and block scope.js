// Scope -> Area where variables is defined or accessible

let score=90; //global scope
if(true)
{
    score=50     //block scope
    console.log(score)  
}
console.log(score) 