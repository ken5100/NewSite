"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Divider from "./components/Divider";
import Categories from "./components/Categories";
import PopularCategories from "./components/PopularItems";
import EverlaneFavorites from "./components/CatPicks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      <Navbar />
      <Slider />

      {/* Section with background image */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-2.jpg')",
        }}
      >
        <Divider />

        <div className="mt-6">
          <Categories />
          <PopularCategories />
        </div>
      </div>

      {/* White background section */}
      <div className="bg-white">
        <EverlaneFavorites />
      </div>
    </div>
  );
}
