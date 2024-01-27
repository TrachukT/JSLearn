"use strict";

// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt("Скільки фільмів ви вже глянули","10");
//     while(numberOfFilms=='' || numberOfFilms ==null || isNaN(numberOfFilms)){
//         start();
//     }
// }

// start();

const personalMovieDB ={
    count : 0,
    movies : {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        this.count = +prompt("Скільки фільмів ви вже глянули","10");
        while(this.count=='' || this.count ==null || isNaN(this.count)){
            start();
        }
    },
    toggleVisibleMyDB: function(){
       this.privat = !this.privat;
    },
    writeYourGenres: function(){
        for(let i=1;i<4;i++){
            let genre =prompt(`Ваш улюблений жанр під номером ${i}`,"10");
            if(genre != null && genre.trim() != ''){
                personalMovieDB.genres[i-1]= genre;
            }
            else{
                i--;
            }
        }
        personalMovieDB.genres.forEach((item,number)=>{
            console.log(`Улюблений жанр #${number+1} - ${item}`);
        })
    },
    detectAmountOfFIlms: function(){
        if(personalMovieDB<10){
            console.log("Мало фільмів");
        }else if(personalMovieDB>10 && personalMovieDB<30){
            console.log("Класичний глядач");
        }else if(personalMovieDB.count >30 ){
            console.log("Кіноман");
        }else{
            console.log("Помилка");
        }    
    },
    showMyDB :function(){
        if(personalMovieDB.privat == false){
           console.log(personalMovieDB);
        }else{
            console.log("this information is private")
        }
    },
    rememberMyFilms:function(){
        for(let i =0;i<2;i++){
            const film = prompt("Last film","rkr").trim(),
                rate = prompt("Your rate for it", "10");
            if(film.length<50 && film != null && rate != null && rate != '' && film != ''){
                personalMovieDB.movies[film] = rate;
                console.log("done");
            }else{
                i--;
                console.log("wrong meaning");
            }
        }
    }
}; 

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectAmountOfFIlms();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
// function rememberMyFilms(){
// for(let i =0;i<2;i++){
//     const film = prompt("Last film","rkr").trim(),
//         rate = prompt("Your rate for it", "10");
//     if(film.length<50 && film != null && rate != null && rate != '' && film != ''){
//         personalMovieDB.movies[film] = rate;
//         console.log("done");
//     }else{
//         i--;
//         console.log("wrong meaning");
//     }
// }
// }

// rememberMyFilms();

// function detectAmountOfFIlms(){
//     if(personalMovieDB<10){
//         console.log("Мало фільмів");
//     }else if(personalMovieDB>10 && personalMovieDB<30){
//         console.log("Класичний глядач");
//     }else if(personalMovieDB.count >30 ){
//         console.log("Кіноман");
//     }else{
//         console.log("Помилка");
//     }    
// }

// detectAmountOfFIlms();

// console.log(personalMovieDB.movies);

// function showMyDB(){
//      if(personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//      }
// }

// showMyDB();

// const arr =[];
// function writeYourGenres(){
//     for(let i=1;i<4;i++){
//         // const fff = +prompt(`Ваш улюблений жанр під номером ${i}`,"10");
//         personalMovieDB.genres[i-1]=+prompt(`Ваш улюблений жанр під номером ${i}`,"10");
//         // arr[i-1]= fff;
//     }
//     console.log(arr);
//     console.log(personalMovieDB.genres);
// }
 
// writeYourGenres();