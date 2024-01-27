"use strict";

// To String

//1)
console.log(typeof(String(4)));
console.log((String(null)));// old one

//2)
console.log(typeof(5+""));//будь-яке значення
console.log(5+"");

const num = 6;
console.log("https://fb.com/catalog/"+num);

const fontSize = 26+'px';

//To Number

//1)
console.log(typeof(Number("4")));//old one
//2) - унарний плюс
console.log(typeof(+"4"));
//3)
console.log(typeof(parseInt("15px",10)));

// To boolean

// 0,'',null,undefined,Nan - false
//everything else - true
//1) native
let switcher = null;

if(switcher){
    console.log("working....")
}

//2)
console.log(typeof(Boolean(5)));//old one

//3)
console.log(typeof(!!"444"));//rare one