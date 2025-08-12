"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const EverlaneFavorites = () => {
  const images = [
    "/slider4.png",
    "/slider5.png",
    "/slider6.png",
    "/slider7.png",
    "/slider8.png",
  ];

  return (
    <section className="w-full py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2
          style={{
            fontFamily: "Maison Neue",
            fontWeight: 400,
            fontStyle: "Book",
            fontSize: "29.62px",
            lineHeight: "41.03px",
          }}
          className="mb-4 text-black"
        >
          Everlane Favorites
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "Maison Neue",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
          }}
          className="text-gray-700 mb-10"
        >
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </p>

        {/* Multi-Item Image Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{
            clickable: true,
            el: ".custom-pagination", // custom pagination container
          }}
          spaceBetween={20}
          loop={true}
          slidesPerView={4}
          slidesPerGroup={1}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 12 },
            640: { slidesPerView: 2.5, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="pb-10"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="h-[500px] w-[300px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Below Slider */}
        <div className="custom-pagination mt-6 flex justify-center gap-2"></div>
      </div>
    </section>
  );
};

export default EverlaneFavorites;
