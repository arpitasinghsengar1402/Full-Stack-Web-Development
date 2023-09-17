//forEach method of array
//Its another type of loop which we used to traverse over the array

let dishes=["chaap","kurkure","rice","momos"]

//using the loop
for(let i=0;i<dishes.length;i++)
{
    console.log(dishes[i])
}

//using forEach method

dishes.forEach(function(element)
{
    console.log(element)
})