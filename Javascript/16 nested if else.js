let winningnum=19
let userguess=userguess+prompt("Guess a number")
console.log(userguess)
if(userguess===19){
    console.log("your guess is correct")
}
else{
    if(userguess>19){
        console.log("too high")
    }
    else{
        console.log("too low")
    }
}