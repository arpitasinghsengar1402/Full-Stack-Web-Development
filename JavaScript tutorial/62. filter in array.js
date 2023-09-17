//filter method - used to perform filtration on array

let gifts=["watch","ring","chocolates","teddy-bear","watch","ring"]

//now you want to filter only watch and ring gifts only

let filteredarray=gifts.filter(gift=>{
    if(gift=="watch" || gift=="ring")
    {
        return gift
    }
})
//it returns new array
console.log(filteredarray);

console.log(gifts);

//note:- length of new array may or may not be equal to original array