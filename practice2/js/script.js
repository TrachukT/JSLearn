const numberOfFilms = +prompt("Скільки фільмів ви вже глянули","10");

const personalMovieDB ={
    "count" : numberOfFilms,
    "movies" : {},
    "actors": {},
    "genres": [],
    "privat": false
};

for(let i =0;i<2;i++){
    const film = prompt("Last film","rkr"),
        rate = prompt("Your rate for it", "10");
    if(film.length<50 && film != null && rate != null && rate != '' && film != ''){
        personalMovieDB.movies[firstFilm] = firstRate;
    }else{
        i--;
    }
}

if(personalMovieDB<10){
    console.log("Мало фільмів");
}else if(personalMovieDB>10 && personalMovieDB<30){
    console.log("Класичний глядач");
}else if(personalMovieDB.count >30 ){
    console.log("Кіноман");
}else{
    console.log("Помилка");
}


console.log(personalMovieDB.movies);

 