let hobbies ="     coding reading running singing     ";
console.log(hobbies)

//trim method - used to remove extra spaces
let result=hobbies.trim()
console.log(result)


//indexof
console.log(result.indexOf("coding")) 


//if any string or number does not exists it shows -1 index (case sensetive)
console.log(result.indexOf("SINGING"))


//includes method
console.log(result.includes("reading"))
console.log(result.includes("dancing"))


//slice method
let fullname="wowprogrammer"
console.log(fullname.slice(0,6))
console.log(fullname.slice(3))
console.log(fullname.slice(6,-1))

// Important- Does not mutate original array