import { useEffect } from "react";
import { connect } from "react-redux";
import SingleMovieComp from "../../components/single-movie/single-movie.component";
import { useParams } from "react-router-dom";
import { fetchMovieAsync } from "../../redux/single-movie/single-movie.action";

const SingleMovieContainer = (props) => {
  const { id } = useParams();
  const { fetchTheMovie, movie, loading } = props;

  useEffect(() => {
    fetchTheMovie(id);
  }, [fetchTheMovie, id]);

  return <SingleMovieComp isLoading={loading} movie={movie} />;
};

const mapStateToProps = (state) => ({
  movie: state.singleMovie.movie,
  loading: state.singleMovie.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTheMovie: (movieId) => dispatch(fetchMovieAsync(movieId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMovieContainer);
