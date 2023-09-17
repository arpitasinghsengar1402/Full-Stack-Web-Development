const num=[1,2,3,4,6,7,8,9]

const iseven=function(num){
    return num%2==0
}
const evennum=num.filter(iseven)
console.log(evennum)
