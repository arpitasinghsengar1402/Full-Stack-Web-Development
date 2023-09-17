// Control flow
// For loop

//Run the specific task 10 times
//without for loop

// console.log("Run the task")
// console.log("Run the task")
// console.log("Run the task")
// console.log("Run the task")
// console.log("Run the task")
// console.log("Run the task")
// console.log("Run the task")
// console.log("Run the task")
// console.log("Run the task")
// console.log("Run the task")

// with for loop
for (let i=1;i<=10;i++)
{
    console.log("Run the task",i)
}

// Uscase of the loop

let dishes=["rice","pasta","pizza","pani-puri","chaap"]

// Access the array values

for(let i=0;i<dishes.length;i++) //i-- runs infinitely causes the browser hang
{
    console.log(dishes[i])
}