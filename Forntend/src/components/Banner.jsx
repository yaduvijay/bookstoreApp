import React from "react";

export default function Banner() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 flex flex-col-reverse md:flex-row items-center gap-10 my-16">

      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hello, welcome here to learn something{" "}
          <span className="text-red-500">new every day!!!</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
          Discover courses, improve your skills, and grow your knowledge with
          interactive learning experiences.
        </p>

        {/* Email Input */}
        <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-red-400 transition-all duration-300">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-all duration-300">
            Get Started
          </button>

          <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-2 rounded-md transition-all duration-300">
            Learn More
          </button>

        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/Banner.jpg"
          alt="Banner"
          className="w-3/4 md:w-full lg:w-4/5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
        />
      </div>

    </div>
  );
}