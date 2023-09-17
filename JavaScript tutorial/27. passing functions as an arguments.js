//passing functions as an arguments (Higher order function example)

let uppercase=function(str){
    return str.toUpperCase()
}
let lowercase=function(str){
    return str.toLowerCase()
}
let transformer=function(str,fun){
    return fun(str)
}
console.log(transformer("hello",uppercase))
console.log(transformer("hello",lowercase))