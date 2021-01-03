import { SingleMovieActionTypes } from "./single-movie.type";

export function fetchMovieStart() {
  return {
    type: SingleMovieActionTypes.FETCH_MOVIE_START,
  };
}

export function fetchMovieSuccess(movie) {
  return {
    type: SingleMovieActionTypes.FETCH_MOVIE_SUCCESS,
    payload: movie,
  };
}

export function fetchMovieError(error) {
  return {
    type: SingleMovieActionTypes.FETCH_MOVIE_ERROR,
    payload: error,
  };
}

export const fetchMovieAsync = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMovieStart());
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((movie) => dispatch(fetchMovieSuccess(movie)))
      .catch((error) => dispatch(fetchMovieError(error.message)));
  };
};
