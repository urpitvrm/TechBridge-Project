
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Layouts/Header";
import Home from "./Components/Pages/Home";
import MovieType from "./Components/Pages/MovieType";
import DetailsOfMovie from "./Components/Pages/DetailsOfMovie";
import SearchResults from "./Components/Layouts/SearchResult";
import FeedbackForm from "./Components/Layouts/FeedbackForm";
import AboutUs from "./Components/Layouts/AboutUs";
import Error from "./Components/Pages/Error";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const trimmed = query.trim();
    if (!trimmed) return setSearchResults([]);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${encodeURIComponent(
          trimmed
        )}`
      );
      const data = await res.json();
      setSearchResults(data.results || []);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900">
        <Header onSearch={handleSearch} />
        <main className="p-4">
          <Routes>
            <Route
              path="/"
              element={
                searchResults.length ? (
                  <SearchResults results={searchResults} />
                ) : (
                  <Home />
                )
              }
            />
            <Route path="/movie/:id" element={<DetailsOfMovie />} />
            <Route path="/movies/:type" element={<MovieType />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;


