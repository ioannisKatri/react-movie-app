
const SingleMovie = ({movie}) => {

  return movie ? (
    <div className="grid grid-cols-1 gap-x-52 md:grid-cols-5">
      <div className="col-span-3">
        <div className="flex items-center space-x-5 text-lg text-gray-400">
          <span className="bg-gray-100 rounded-lg text-sm text-gray-900 py-2 px-3">
            {movie.Rated}
          </span>
          <span>{movie.Runtime}</span>
          <span>
            {movie.Released} ({movie.Country})
          </span>
        </div>
        <h1 className="mt-8 text-6xl font-bold leading-tight">{movie.Title}</h1>
        <div className="flex mt-6 space-x-5">
          <div className="px-4 py-2 border rounded-full">
            {movie.imdbRating}/10
          </div>
          <button className="px-4 py-2 bg-blue-100 rounded-full focus:outline-none">
            Add to favourites
          </button>
        </div>
        <h5 className="mt-8 font-semibold">Plot</h5>
        <p className="mt-2">{movie.Plot}</p>
      </div>
      <div className="col-span-2 mt-5 md:mt-0">
        <img
          className="object-cover w-full h-auto rounded-lg shadow-sm"
          src={movie.Poster}
          alt={movie.Title}
        />
      </div>
    </div>
  ) : (
    <div>No movie found</div>
  );
};



export default SingleMovie;
