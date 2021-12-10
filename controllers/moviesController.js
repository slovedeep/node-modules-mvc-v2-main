import movies from '../data/movies.js';
import moviesModel from '../models/moviesModel.js';

const getAllMovies = (data_movie) => {
    data_movie.req = moviesModel.getMovies();
    data_movie.res = data_movie.req;
}

const getMovieById = (data_movie) => {
    data_movie.req = moviesModel.getMovieById(data_movie.req.id);
    data_movie.res = Object.entries(data_movie.req);
}

const removeMovie = (data_movie) => {
    data_movie.req = moviesModel.removeMovie(data_movie.req.id);
    data_movie.res = movies;
}

const createMovie = (data_movie) => {
    moviesModel.createMovie(data_movie.req)
    data_movie.res = movies;
}

const updateMovie = (data_movie) => {
    data_movie.req = moviesModel.updateMovie(data_movie.req);
    data_movie.res = data_movie.req;
}

const getMovieBy = (data_movie) => {
    data_movie.req = moviesModel.getMovieBy(data_movie.req);
    data_movie.res = data_movie.req;
}

export default {
    getAllMovies,
    getMovieById,
    removeMovie,
    createMovie,
    updateMovie,
    getMovieBy
}