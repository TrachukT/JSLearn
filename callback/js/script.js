"use strict";

function first(){
    //...
    setTimeout(function(){
        console.log(1);
    },500)
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang,callback){
    console.log(`I'm learning: ${lang}`);
    callback();
}

learnJS("Javascript",function(){
    console.log("this lesson is done");
});

function done(){
    console.log("this lesson is done");
}

learnJS("Javascript",done);

const options = {
    name : "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function(){
        console.log("Test");
    }
};
options.makeTest();

const {border, bg} = options.colors;//деструктуризація 
console.log(border);

console.log(options.name);

// delete options.name;

// console.log(options.name);

let counter = 0;
for (let key in options){
    if(typeof(options[key])=== 'object'){
        for(let i in options[key]){
            console.log(`Option ${i} with meaning ${options[key][i]}`);
            counter++;
        }
    }
    else{
        console.log(`Option ${key} with meaning ${options[key]}`);
        counter++;
    }
}

console.log(counter);

console.log(Object.keys(options));
console.log(Object.keys(options).length);
