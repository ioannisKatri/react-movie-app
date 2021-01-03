import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return (
    <div className="relative col-span-1 overflow-hidden transition bg-gray-600 rounded-lg shadow-sm group">
      <img
        className="w-full h-full object-cover"
        src={movie.Poster}
        alt={movie.Title}
      />

      <div className="absolute top-0 w-full h-full transition duration-300 bg-gray-700 opacity-0 bg-opacity-70 group-hover:opacity-100">
        <Link
          className="flex flex-col justify-end w-full h-full p-4"
          to={`/movie/${movie.imdbID}`}
          title={movie.Title}
        >
          <h4 className="text-xl font-bold text-white">{movie.Title}</h4>
          <span className="text-white">{movie.Year}</span>
        </Link>

        <button className="absolute right-4 top-4 focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
