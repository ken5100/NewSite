"use client";
import React from "react";
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
            el: ".custom-pagination",
          }}
          spaceBetween={16}
          loop={true}
          slidesPerView={4}
          slidesPerGroup={1}
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 8 },
            480: { slidesPerView: 1.8, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 12 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="pb-10 [&_.swiper-button-next]:!text-white [&_.swiper-button-prev]:!text-white [&_.swiper-button-next]:!text-3xl [&_.swiper-button-prev]:!text-3xl [&_.swiper-button-next:hover]:scale-110 [&_.swiper-button-prev:hover]:scale-110"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="
                  object-cover rounded-lg
                  h-[500px] w-[300px]          /* default desktop */
                  md:h-[500px] md:w-[300px]   /* tablet */
                  sm:h-[300px] sm:w-[200px]   /* small devices */
                  xs:h-[250px] xs:w-[160px]   /* extra small */
                "
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
