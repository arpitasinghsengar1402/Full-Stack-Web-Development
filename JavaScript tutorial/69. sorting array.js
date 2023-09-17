//sorting array using sort method

//by default sort method is used to sort strings
//it firstly covert everything into string and then..
let letters=["d","e","f","a","b"]
console.log(letters.sort())
let nums=[2,5,7,-1,-22,-43]
console.log(nums.sort());


//a-b<0 => a<b=>A,B(keep order same)
//a-b>0 => a>b=>B,A(Switch the order)

nums.sort((a,b)=>{
    // if(a<b){
    //     return -1; //if a less than b return negative value(-ve)
    // }
    // if(a>b)
    // {
    //     return 1 //any num greater than 0
    // }
    return b-a
})
console.log("Sorted ", nums);