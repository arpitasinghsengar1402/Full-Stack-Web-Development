function hellloo(){
    console.log("hello world")
}
hellloo.prototype.abc="abc"
hellloo.prototype.xyz="xyz"
hellloo.prototype.sing=function(){
    return "lallalalala"
}
console.log(hellloo.prototype.sing())