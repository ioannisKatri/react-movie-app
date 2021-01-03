import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMoviesAsync } from "../../redux/search/search.action";

const Search = ({ fetchMovies }) => {
  const [query, setQuery] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (query) {
      if (timer) clearTimeout(timer);

      const timeOut = setTimeout(() => {
        fetchMovies(query);
      }, 1000);
      setTimer(timeOut);
    }
  }, [query]);

  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="submit"
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-hidden="true"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </span>
      <input
        type="search"
        value={query || ''}
        className="w-full py-3 pl-10 text-sm text-gray-900 bg-gray-100 rounded-lg focus:outline-none"
        placeholder="Search movies..."
        autoComplete="off"
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (query) => dispatch(fetchMoviesAsync(query)),
});

export default connect(null, mapDispatchToProps)(Search);
