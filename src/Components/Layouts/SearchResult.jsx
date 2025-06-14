
import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        🎬 Search Results
      </h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {results.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="transform rounded-xl bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="h-[350px] w-full rounded-t-xl object-cover"
            />
            <div className="p-4">
              <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
                {movie.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                ⭐ {Math.round(movie.vote_average * 10) / 10} •{" "}
                {movie.release_date?.split("-")[0]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
