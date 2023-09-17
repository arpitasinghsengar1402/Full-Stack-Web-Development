// While loop

let j=1;
while(j<=5)
{
    console.log("while loop" , j)
    j++
}

// array access using while loop

let dishes=["rice","pasta","pizza","pani-puri","chaap"]

let i=0;
while(i<=dishes.length)
{
    console.log(dishes[i])
    i++  //without this statement we will get infinite loop
}
