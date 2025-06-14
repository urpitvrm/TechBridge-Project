
const API_KEY = "19c6153a10faebbbf13860c3464b2ca4";
const BASE_URL = "https://api.themoviedb.org/3";

const getEndpoint = ({ query, genre }) => {
  if (query)
    return `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&language=en-US`;
  if (genre)
    return `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&language=en-US`;
  return `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`;
};

export async function fetchMovies({ query = "", genre = "" }) {
  try {
    const res = await fetch(getEndpoint({ query, genre }));
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
