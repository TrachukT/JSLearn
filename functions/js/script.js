"use strict";

let num = 13;

function showFirstMessage(text){
    console.log(text);
    num = 13;
}

showFirstMessage("function Forst message");

function calc(a,b){
    return a+b;
}

console.log(calc(3,5));

const logger = function(){
    console.log("hello");
};  

logger(); 

const calc1 = (a,b) => a+b;//стрілочна функція
const calc2 = (a,b) => {
    console.log(a+b);
    return a+b;
};//стрілочна функція

