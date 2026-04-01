import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import data from "../Data1/list.json"; // your JSON
import Card from "./Card";

export default function Freebook() {
  // Filter only Free courses
  const filterData = data.filter((item) => item.price === 0);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-24">

      {/* Section header */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="font-bold text-3xl md:text-4xl">
          Free Offered Courses
        </h2>
        <p className="text-gray-600 mt-2 md:mt-4">
          Explore our collection of free courses. Learn new skills without spending a dime!
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        speed={600}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {filterData.length > 0 ? (
          filterData.map((item) => (
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No free courses available 😢
          </p>
        )}
      </Swiper>
    </div>
  );
}