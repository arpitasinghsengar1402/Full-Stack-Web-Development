function sum(a,b){
     return a+b
}
const returnedvalue=sum(9,5)
console.log(returnedvalue)


const hbd=function(){
    console.log("happy bithday to you.....")
}
hbd()

//odd or even

function iseven(num){
    if(num%2==0){
        return true
    }
    else{
        return false
    }
}
console.log(iseven(3))



function firstchar(anystring){
    return anystring[0]
}
console.log(firstchar("zbc"))



function findtarget(array,target){
    for(let i=0;i<array.length;i++)
    {
        if(array[i]===target)
        {
            return i
        }
    }
    return -1
}
const myarray=[1,3,8,90]
const ans=findtarget(myarray,8)
console.log(ans)