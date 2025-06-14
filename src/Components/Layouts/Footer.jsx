import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white text-gray-800 shadow-inner">
      <div className="mx-auto max-w-7xl px-4 py-8 md:flex md:items-center md:justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold text-blue-600">🎬 MovieVerse</h2>
          <p className="text-sm text-gray-600">
            Discover and enjoy your favorite movies.
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Created by Himanshu Verma
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-6">
          <Link to="/" className="transition hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="transition hover:text-blue-500">
            About Us
          </Link>
          <Link to="/feedback" className="transition hover:text-blue-500">
            Feedback
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MovieLookup. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
