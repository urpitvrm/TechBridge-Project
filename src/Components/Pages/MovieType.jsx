import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "./../Card/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MovieType = () => {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          type || "popular"
        }?api_key=19c6153a10faebbbf13860c3464b2ca4&language=en-US`
      );
      const data = await res.json();
      setCategory(data.results || []);
    };
    fetchData();
  }, [type]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const titleMap = {
    top_rated: "Top Rated Movies",
    upcoming: "Upcoming Movies of 2023",
    popular: "Popular Movies of 2023",
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      {isLoading ? (
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#cfcfcf">
          <div className="mb-6 text-2xl font-bold">
            <Skeleton height={30} width={300} />
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} height={300} />
              ))}
          </div>
        </SkeletonTheme>
      ) : (
        <>
          <h1 className="mb-10 text-center text-3xl font-extrabold text-blue-700">
            {titleMap[type] || "Movies"}
          </h1>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {category.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieType;
