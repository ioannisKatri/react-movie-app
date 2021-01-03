import { SingleMovieActionTypes } from "./single-movie.type";

const INITIAL_STATE = {
  loading: false,
  movie: {},
};

const singleMovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SingleMovieActionTypes.FETCH_MOVIE_START: {
      return {
        ...state,
        loading: true,
        movie: {}
      };
    }
    case SingleMovieActionTypes.FETCH_MOVIE_SUCCESS: {
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    }
    case SingleMovieActionTypes.FETCH_MOVIE_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default singleMovieReducer;
