
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../Layouts/Footer";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=19c6153a10faebbbf13860c3464b2ca4&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
      window.scrollTo(0, 0);
    };

    const fetchRelated = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await res.json();
      setRelated(data.results || []);
    };

    fetchMovie();
    fetchRelated();
  }, [id]);

  return (
    <div className="min-h-screen bg-white px-4 py-8 text-gray-800">
      {movie.backdrop_path && (
        <img
          className="mb-6 max-h-[400px] w-full rounded-lg object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="Backdrop"
        />
      )}

      <div className="flex flex-col gap-6 md:flex-row">
        {movie.poster_path && (
          <img
            className="w-40 rounded-md shadow-md md:w-60"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Poster"
          />
        )}

        <div className="flex-1">
          <h1 className="mb-2 text-3xl font-bold">{movie.original_title}</h1>
          <p className="italic text-gray-500">{movie.tagline}</p>
          <p className="mt-2">
            <strong>Rating:</strong> {Math.round(movie.vote_average * 10) / 10}{" "}
            ⭐ ({movie.vote_count} votes)
          </p>
          <p className="mt-1">
            <strong>Runtime:</strong> {movie.runtime} mins
          </p>
          <p className="mt-1">
            <strong>Release Date:</strong> {movie.release_date}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="mb-2 text-xl font-semibold">Synopsis</h2>
            <p className="text-gray-700">{movie.overview}</p>
          </div>

          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
            >
              Visit Official Website
            </a>
          )}
        </div>
      </div>

      {movie.production_companies?.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Production Companies
          </h2>
          <div className="grid place-items-center gap-8 md:grid-cols-2">
            {movie.production_companies.map((company) => (
              <div key={company.id} className="text-center">
                {company.logo_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`}
                    alt={company.name}
                    className="mx-auto mb-2 max-h-[80px] object-contain"
                  />
                )}
                <p className="font-medium text-gray-800">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}


      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Related Movies
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
            {related.slice(0, 9).map((r) => (
              <Link
                to={`/movie/${r.id}`}
                key={r.id}
                className="rounded border shadow hover:shadow-md"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${r.poster_path}`}
                  alt={r.title}
                  className="h-72 w-full rounded-t object-cover"
                />
                <div className="p-2">
                  <h3 className="truncate font-semibold">{r.title}</h3>
                  <p className="text-sm text-gray-600">{r.release_date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Movie;
