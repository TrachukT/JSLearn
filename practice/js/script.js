const numberOfFilms = +prompt("Скільки фільмів ви вже глянули","10");

const personalMovieDB ={
    "count" : numberOfFilms,
    "movies" : {},
    "actors": {},
    "genres": [],
    "privat": false
};

const firstFilm = prompt("Last film","rkr"),
firstRate = prompt("Your rate for it", "10");

const secondFilm = prompt("One more last film","rkr"),
secondRate = prompt("Your rate for it", "10");

personalMovieDB.movies[firstFilm] = firstRate;
personalMovieDB.movies[secondFilm] = secondRate;

console.log(personalMovieDB.movies);