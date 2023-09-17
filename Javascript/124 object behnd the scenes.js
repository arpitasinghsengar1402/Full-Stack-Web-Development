console.log("script start")
const allbtn=document.querySelectorAll(".my-buttons button")
allbtn.forEach((button)=>
{
    button.addEventListener("click",(e)=>{
        let num=0
        for(let i=0;i<=10000000;i++)
        {
            num+=i
        }
        console.log(e.currentTarget.textContent,num)
    })
})
let outervar=0
for(let i=0;i<=10000000;i++)
{
    outervar+=i
}
console.log("value of outer var=",outervar)
console.log("script end")