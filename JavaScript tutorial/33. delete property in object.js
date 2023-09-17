let obj={
    prop1:"value1",
    prop2:"value2"
}
let returnvalue=delete obj["prop1"]

//it always return true
console.log(obj.prop1,returnvalue)