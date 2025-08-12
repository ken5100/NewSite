"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Divider from "./components/Divider";
import Categories from "./components/Categories";
import PopularCategories from "./components/PopularItems";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      <Navbar />
      <Slider />

      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-2.jpg')",
        }}
      >
        <Divider />

        {/* Categories with margin */}
        <div className="mt-6"> {/* adjust mt-6 to desired spacing */}
          <Categories />

          <PopularCategories />
        </div>
      </div>
    </div>
  );
}
