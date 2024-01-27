"use strict";

let str = "some";
let str_obj = new String(str);

// console.log(typeof(str));
// console.log(typeof(str_obj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello");
    }
};

const John = {
    health: 100
};

// John.__proto__= soldier;//застарілий варіант(не юзати)

// console.log(John.armor);
// John.sayHello();

Object.setPrototypeOf(John,soldier); //сучасний варіант для вже існуючого об'єкта

John.sayHello();

const ion = Object.create(soldier);//створення об'єкта на базі якогось прототипу