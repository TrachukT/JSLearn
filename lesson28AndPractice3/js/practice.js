"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Скільки фільмів ви вже глянули","10");
    while(numberOfFilms=='' || numberOfFilms ==null || isNaN(numberOfFilms)){
        start();
    }
}

start();

const personalMovieDB ={
    "count" : numberOfFilms,
    "movies" : {},
    "actors": {},
    "genres": [],
    "privat": false
};

function rememberMyFilms(){
for(let i =0;i<2;i++){
    const film = prompt("Last film","rkr"),
        rate = prompt("Your rate for it", "10");
    if(film.length<50 && film != null && rate != null && rate != '' && film != ''){
        personalMovieDB.movies[film] = rate;
    }else{
        i--;
    }
}
}

rememberMyFilms();

function detectAmountOfFIlms(){
    if(personalMovieDB<10){
        console.log("Мало фільмів");
    }else if(personalMovieDB>10 && personalMovieDB<30){
        console.log("Класичний глядач");
    }else if(personalMovieDB.count >30 ){
        console.log("Кіноман");
    }else{
        console.log("Помилка");
    }    
}

detectAmountOfFIlms();

console.log(personalMovieDB.movies);

function showMyDB(){
     if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
     }
}

showMyDB();

const arr =[];
function writeYourGenres(){
    for(let i=1;i<4;i++){
        // const fff = +prompt(`Ваш улюблений жанр під номером ${i}`,"10");
        personalMovieDB.genres[i-1]=+prompt(`Ваш улюблений жанр під номером ${i}`,"10");
        // arr[i-1]= fff;
    }
    console.log(arr);
    console.log(personalMovieDB.genres);
}
 
writeYourGenres();