import React, { useState } from "react";
import list from "../Data1/list.json";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Course() {
  const [search, setSearch] = useState("");

  // Filter courses
  const filteredCourses = list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20">

      {/* Header Section */}
      <div className="mt-24 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          We're delighted to have you{" "}
          <span className="text-red-500">Here! 😊</span>
        </h1>

        <p className="mt-6 text-gray-600 dark:text-gray-300">
          Explore our wide range of courses designed to boost your skills and
          help you grow faster in your career.
        </p>

        {/* Back Button */}
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-300">
            ← Back Home
          </button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mt-10 flex justify-center">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Course Grid */}
      <div className="mt-12 grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4">

        {filteredCourses.length > 0 ? (
          filteredCourses.map((item) => (
            <Card key={item.id} item={item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses found 😢
          </p>
        )}
      </div>

    </div>
  );
}