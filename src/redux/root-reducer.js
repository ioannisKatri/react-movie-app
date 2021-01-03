import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import searchReducer from "./search/search.reducer";
import singleMovieReducer from "./single-movie/single-movie.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["movies"],
};

const rootReducer = combineReducers({ 
    movies: searchReducer,
    singleMovie: singleMovieReducer
});

export default persistReducer(persistConfig, rootReducer);
