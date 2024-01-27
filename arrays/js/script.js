"use strict";

const arr = [1, 10, 3, 6, 8];
console.log(arr.sort(compareNum));//для чисел
function compareNum(a,b){
    return a-b;
}

arr.pop();
console.log(arr);

arr.push(10);
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(0);
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let el of arr){
    console.log(el);
}

// arr[99]=0;
console.log(arr.length);
console.log(arr);

arr.forEach(function(item,number,arr){
    console.log(`${number}:${item} inside array ${arr}`);
})

const str = prompt("","fgf,djdjd,dd");
const products = str.split(",");
products.sort();//длі рядків

console.log(products);
console.log(products.join(' '));
