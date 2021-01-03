import { connect } from "react-redux";
import Search from "../../components/search/search.component";
import MovieList from "../../components/movie-list/movie-list.component";

const Homepage = ({ loading, query }) => (
  <div>
    <Search />
    <MovieList isLoading={loading && !query} />
  </div>
);

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  query: state.movies.query,
});

export default connect(mapStateToProps)(Homepage);
