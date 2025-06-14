
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Footer from "../Layouts/Footer";

const genreList = [
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Horror" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Sci-Fi" },
  { id: 16, name: "Animation" },
];

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let url = "";
      if (searchTerm) {
        url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=19c6153a10faebbbf13860c3464b2ca4`;
      } else {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=19c6153a10faebbbf13860c3464b2ca4`;

        if (selectedGenre) {
          url += `&with_genres=${selectedGenre}`;
        }
        if (selectedYear) {
          url += `&primary_release_year=${selectedYear}`;
        }
      }

      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results || []);
      setPage(1);
    };

    fetchData();
  }, [searchTerm, selectedGenre, selectedYear]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedGenre("");
    setSelectedYear("");
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    setSearchTerm("");
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setSearchTerm("");
  };

  const moviesPerPage = 8;
  const displayedMovies = movies.slice(
    (page - 1) * moviesPerPage,
    page * moviesPerPage
  );

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen bg-white px-4 py-6 text-gray-900">
      <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search movies..."
          className="w-full rounded border border-gray-300 px-4 py-2 shadow-sm md:w-1/4"
        />

        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          className="w-full rounded border border-gray-300 px-4 py-2 shadow-sm md:w-1/4"
        >
          <option value="">All Genres</option>
          {genreList.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="w-full rounded border border-gray-300 px-4 py-2 shadow-sm md:w-1/4"
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        className="mb-6"
      >
        {movies.slice(0, 5).map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${
                movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.title}
              className="h-64 w-full rounded object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded bg-white/80 p-3 shadow">
              <h2 className="text-lg font-bold">{movie.title}</h2>
              <p className="text-sm">{movie.release_date}</p>
            </div>
          </Link>
        ))}
      </Carousel>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {displayedMovies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="rounded border shadow transition duration-300 hover:shadow-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-72 w-full rounded-t object-cover"
            />
            <div className="p-3">
              <h3 className="truncate font-semibold">{movie.title}</h3>
              <p className="text-sm text-gray-600">{movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          disabled={page === 1}
          className="rounded border px-4 py-2 shadow disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm font-medium">Page {page}</span>
        <button
          onClick={() =>
            page * moviesPerPage < movies.length && setPage(page + 1)
          }
          disabled={page * moviesPerPage >= movies.length}
          className="rounded border px-4 py-2 shadow disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
