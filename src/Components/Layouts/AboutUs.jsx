
import React from "react";
import Footer from "./Footer";

const AboutUs = () => {
  return (<>
    <section className="flex min-h-screen flex-col items-center bg-gradient-to-b from-white to-blue-50 px-4 py-20">
      <div className="w-full max-w-5xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-blue-700 md:text-5xl">
          Discover. Explore. Enjoy.
        </h2>
        <p className="mb-12 text-lg text-gray-600 md:text-xl">
          Your cinematic companion — anytime, anywhere.
        </p>

        <div className="grid gap-8 text-left text-gray-700 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              What is MovieFinder?
            </h3>
            <p>
              MovieFinder is a modern platform that helps you explore and track
              the best movies across genres, languages, and trends — all in one
              place.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              Powered by Real Data
            </h3>
            <p>
              We use the{" "}
              <span className="font-medium text-yellow-500">TMDB API</span> to
              bring you real-time access to posters, ratings, descriptions, and
              release dates.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              Clean & Responsive
            </h3>
            <p>
              Built using{" "}
              <span className="font-medium text-blue-500">React</span> and{" "}
              <span className="font-medium text-pink-500">Tailwind CSS</span>,
              the app is optimized for speed, responsiveness, and simplicity.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              Why Users Love It
            </h3>
            <p>
              Whether you're planning your movie night or just browsing,
              MovieFinder makes your decision easier with live search and a
              clean experience.
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Designed and developed with care by{" "}
          <span className="font-semibold text-blue-500">Ankit Kumar</span> —
          MovieFinder © 2025.
        </p>
      </div>
     
    </section>
     <Footer /></>
  );
};

export default AboutUs;
