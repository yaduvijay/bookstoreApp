import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Card from "./Card";
import axios from "axios";

export default function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:8000/book");

        // ✅ filter correct data
        const filterData = res.data.filter(
          (item) => item.category === "Free"
        );

        console.log(filterData);

        setBook(filterData);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-24">
      
      <div className="mb-8 text-center md:text-left">
        <h2 className="font-bold text-3xl md:text-4xl">
          Free Offered Courses
        </h2>
        <p className="text-gray-600 mt-2 md:mt-4">
          Explore our collection of free courses.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        speed={600}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {book.length > 0 ? (
          book.map((item) => (
            <SwiperSlide key={item._id || item.id}>
              <Card item={item} />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No free courses available 😢
          </p>
        )}
      </Swiper>
    </div>
  );
}