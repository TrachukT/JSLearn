"use strict";

let number = 4.5;
console.log(-4/0);
console.log('STRING'* 10);

const persone = "Alex";

const bool = true;
// console.log(something);
// let und;
// console.log(und)

const obj = {
    name: "kfjgfg",
    age: 24,
    marital: false
};

console.log(obj.age);
console.log(obj["age"]);

const elem = {
    Anna: 241,
    "Alice": 345
};

let arr = ["a","b","c"];
const arrObj = {
    0:"a",
    1:"b",
    2:"c"
};
arrObj["b"] = "12";
console.log(arr[1]);
console.log(arrObj["b"]);
console.log(arrObj.b);

// alert("eeeeeeee");

// const result = confirm("Are you on site");
// console.log(result);

// const answerString = prompt("Are you 18?","18");// вертається стрінга
// console.log(answerString);
// console.log(typeof(answerString));

// const answerNumber = +prompt("Are you 18?","18");//динамічно типізуємо через + в число
// console.log(answerNumber);
// console.log(typeof(answerNumber));

// const answers = [];

// answers[0]= prompt("Name","");
// answers[1]= prompt("Surname","");
// answers[2]= prompt("Age","");

// console.log(typeof(answers));
// document.write(answers);//замінює весь вмість сайта на повідомлення яке ми впишемо

"use strict";

const category = 'toys';

console.log("https://someurl.com/"+category);

console.log(`https://someurl.com/${category}/5`); 
//інтерполяція - додавання значення змінної всередину рядка

const user = "Ihor";

alert(`Hello,${user}`);