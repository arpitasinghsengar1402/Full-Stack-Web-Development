//arrays

let dishes=["Biryani", "Chaat","Pasta","Pizza"]

//access
console.log(dishes)

//particular access 
console.log(dishes[2])

//modify the array 
dishes[0]="ZIGGI"
console.log(dishes)

//array methods

//1 join method
console.log(dishes.join(","))

//2 index of method
console.log(dishes.indexOf("Chaat"))

//3 includes of method
console.log(dishes.includes("Chaat"))

//Concatenation method
let newdishes=["Colddrink", "Pani-puri"]
// console.log(dishes.concat(newdishes))
let updateddishes=dishes.concat(newdishes)
console.log(updateddishes)

//length method
console.log(dishes.length)
console.log(newdishes.length)
console.log(updateddishes.length)

//push method
console.log(updateddishes.push("samosa"))
console.log(updateddishes)

//pop method
console.log(dishes.pop())
console.log(dishes)