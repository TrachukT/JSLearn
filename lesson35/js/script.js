"use strict";

let a=5,
    b=a;

b=b+5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

function duplicate(mainObj){
    let objCopy = {};
    let key;
    for(key in mainObj){
        if(typeof(mainObj[key])=='object'){
            objCopy[key] = duplicate(mainObj[key]);
        }else{
        objCopy[key] = mainObj[key];
        }
    }
    return objCopy;
}

const numbers = {
    a:1,
    b:2,
    c:{
        x:5,
        y:4
    }
};

const duplicateNumbers = duplicate(numbers);
duplicateNumbers.a = 10;
duplicateNumbers.c.x = 10;


console.log(duplicateNumbers);
console.log(numbers);

const add = {
    d:20,
    e:17
};

console.log(Object.assign(numbers,add));

const clone = Object.assign({},add) ;

clone.d = 70;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[2]= 'ffdf';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video,...blogs, 'vk', 'facebook'];// ... - Spread operator для розвороту масиву на окремі елем

    console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array= ["a","b"];

const copyArray = [...array];

const q= {
    one:1,
    two:2,
}

const newObj = {...q};
