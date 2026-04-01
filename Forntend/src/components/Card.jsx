import React from "react";

export default function Card({ item }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2">

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">

        {/* Title + Category */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1">
            {item.name}
          </h2>

          <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-md">
            {item.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {item.title}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-2">

          {/* Price */}
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {item.price === 0 ? "Free" : `₹${item.price}`}
          </span>

          {/* Button */}
          <button className="text-sm bg-pink-500 text-white px-3 py-1.5 rounded-md hover:bg-pink-600 transition-all duration-300 active:scale-95">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}