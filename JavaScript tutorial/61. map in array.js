//higher oder array methods

//map method

//create new array from original array by applying tranforation function

let salaries=[3000,5000,8000,6000,9000]

let newsalaries=salaries.map(salary=>{
    let incrementedamount=salary/2
    return salary+incrementedamount
})
console.log("after 50% bonus new salaries are",newsalaries)

//length of new array always equals to the original array