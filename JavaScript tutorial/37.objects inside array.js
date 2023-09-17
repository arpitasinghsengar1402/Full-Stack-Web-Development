let college=[{name:"arpita",city:"agra",domain:"machine learning"},{name:"karan",city:"delhi",domain:"mern stack"}]
console.log(college)
for(let i=0;i<college.length;i++)
{
    console.log(college[i])
    console.log(`user ${college[i].name} of domain ${college[i].domain}`)
}