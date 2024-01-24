"use strict";

const str = "test";
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);

console.log(str.toLowerCase());
console.log(str.toUpperCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("k"));

const logg = "Hello world";

console.log(logg.slice(0,5));
console.log(logg.slice(6,11));//з якої починаємо, яку вже не включаємо по індексах
console.log(logg.slice(6));
console.log(logg.slice(-1,-5));
console.log(logg.substring(6,11));
console.log(logg.substr(6,2));


const num = 12.3;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

