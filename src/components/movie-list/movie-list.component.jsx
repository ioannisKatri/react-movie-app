import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import MovieItem from "../movie-item/movie-item.component";
import { fetchMoviesAsync } from "../../redux/search/search.action";

const MovieList = ({ movies, query, page, fetchMoreMovies }) => {
  return (
    <div className="pt-8">
      <div className="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {!query ? null : movies.length ? (
          movies.map((movie, index) => {
            return <MovieItem key={index} movie={movie} />;
          })
        ) : (
          <div className="col-span-full flex justify-center">
            No movies found
          </div>
        )}
      </div>
      {movies.length ? (
        <div className="col-span-full flex justify-center">
          <button
            type="button"
            className="mt-8 px-4 py-2 bg-blue-100 rounded-full focus:outline-none"
            onClick={() => fetchMoreMovies(query, page + 1)}
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  query: state.movies.query,
  page: state.movies.page,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoreMovies: (query, page) => dispatch(fetchMoviesAsync(query, page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithSpinner(MovieList));
