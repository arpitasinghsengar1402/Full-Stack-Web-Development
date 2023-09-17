// undefined
let firstname;
console.log(typeof firstname);
firstname="ARPITA";
console.log(typeof firstname , firstname);


//null
let myvar=null;
console.log(myvar);
myvar="Arpita";
console.log(myvar, typeof myvar);
console.log(typeof null);//bug


//BigInt
let mynum=BigInt(123);
console.log(mynum ,typeof mynum);
console.log(Number.MAX_SAFE_INTEGER)