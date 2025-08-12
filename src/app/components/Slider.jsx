"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = ["/Slider_1.png", "/Slider_2.png", "/Slider_3.png"];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex items-start justify-center overflow-hidden bg-transparent hide-scrollbar">
      {/* Slider Image */}
      <Image
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        width={1920}
        height={1080}
        priority
        className="w-full h-auto max-h-[88vh] object-contain object-top"
      />

{/* Left Arrow */}
<button
  onClick={prevSlide}
  className="absolute left-1 top-1/2 -translate-y-1/2 text-white text-base sm:text-lg md:text-4xl bg-black/30 hover:bg-black/50 rounded-full p-[2px] sm:p-1 md:p-2"
>
  &#10094;
</button>

{/* Right Arrow */}
<button
  onClick={nextSlide}
  className="absolute right-1 top-1/2 -translate-y-1/2 text-white text-base sm:text-lg md:text-4xl bg-black/30 hover:bg-black/50 rounded-full p-[2px] sm:p-1 md:p-2"
>
  &#10095;
</button>



      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
