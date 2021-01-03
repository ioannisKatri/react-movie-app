import { SearchActionTypes } from "./search.types";

export const fetchMoviesStart = () => {
  return {
    type: SearchActionTypes.FETCH_MOVIES_START,
  };
};

export const fetchMoviesSuccess = (movies, query, page) => {
  return {
    type: SearchActionTypes.FETCH_MOVIES_SUCCESS,
    payload: { movies, query, page },
  };
};

export const fetchMoviesError = (error) => {
  return {
    type: SearchActionTypes.FETCH_MOVIES_ERROR,
    payload: error,
  };
};

export const fetchMoviesAsync = (query, page = 1) => {

  
  return (dispatch) => {
    if (page <= 1) {
      dispatch(fetchMoviesStart());
    }
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`)
      .then((response) => response.json())
      .then((movies) =>
        dispatch(fetchMoviesSuccess(movies.Search, query, page))
      )
      .catch((error) => dispatch(fetchMoviesError(error)));
  };
};
