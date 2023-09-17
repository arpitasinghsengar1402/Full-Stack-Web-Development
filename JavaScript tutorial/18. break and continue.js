// break and continue statement

//also called jump statements

//used to skip some values on loop

for(let i=1;i<=10;i++)
{
    if(i==2)
    {
        continue;
    }
    console.log("Value of i" , i)
}

// break statement
//used to terminate the loop and control tranfer from outside 

for(let j=1;j<=5;j++)
{
    if(j==3)
    {
        break
    }
    console.log("values of j",j)
}
console.log("outside the scope")