
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Card = ({ movie }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="relative mx-auto mb-10 h-[28rem] w-[18rem] rounded-2xl bg-gray-100 shadow-md">
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
          <Skeleton height={280} duration={1.2} />
        </SkeletonTheme>
      </div>
    );
  }

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="group mx-auto mb-10 flex h-[28rem] w-[18rem] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div
          className="h-[70%] bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
          }}
        ></div>
        <div className="h-[30%] p-3 text-gray-800">
          <h1 className="text-base font-semibold transition-colors group-hover:text-blue-600">
            {movie.title}
          </h1>
          <p className="mt-1 text-sm text-gray-500">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

