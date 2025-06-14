
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-red-50 px-4 text-center">
      <h1 className="mb-4 text-5xl font-bold text-red-600">Oops! 😢</h1>
      <p className="mb-6 text-lg text-gray-700">
        The page you're looking for doesn't exist or an error occurred.
      </p>
      <Link
        to="/"
        className="rounded-md bg-red-500 px-6 py-2 text-white transition hover:bg-red-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
