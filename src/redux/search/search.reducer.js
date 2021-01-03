import { SearchActionTypes } from "./search.types";

const INITIAL_STATE = {
  movies: [],
  query: "",
  page: 1,
  loading: false,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        movies: [],
        loading: true,
      };
    case SearchActionTypes.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: [...state.movies, ...action.payload.movies],
        query: action.payload.query,
        loading: false,
        page: action.payload.page,
      };
    }
    case SearchActionTypes.FETCH_MOVIES_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
