const app=()=>{
    const myfunc=()=>{
        console.log("hello from myfunc")
    }
    const addtwo=(a,b)=>{
        return a+b
    }
    const mul=(a,b)=>a*b

    console.log("inside app")
    
    myfunc()
    console.log( addtwo(2,3))
    console.log(mul(5,5))
}
app()