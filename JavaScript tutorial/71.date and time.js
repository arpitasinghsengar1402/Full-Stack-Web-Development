//date and time 

//date object always carry both date and time

//using date method

let currentdate=new Date()
console.log(currentdate);

//using timestamp (integer number represent in"ms" from 1-1-1970) 
let currentdate1=new Date(86400000)
//0 is time in ms
//1 day=24*60*60=864000000ms
console.log(currentdate1)

//to get time in ms
let currentdate2=new Date().getTime()
console.log(currentdate2);
//1693992300832 = total time in ms


//complete date and time
let currentdateandtime=new Date()
console.log(currentdateandtime);

//get full year
console.log(currentdateandtime.getFullYear())

//get month
console.log(currentdateandtime.getMonth());

//get week day
console.log(currentdateandtime.getDay());

//get month day
console.log(currentdateandtime.getDate());

//get hours
console.log(currentdateandtime.getHours());

//get seconds
console.log(currentdateandtime.getSeconds());