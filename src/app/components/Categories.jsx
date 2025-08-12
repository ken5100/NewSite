"use client";
import { useState } from "react";
import Image from "next/image";

const categories = [
  { id: 1, name: "Anime Character", img: "/cat1.png" },
  { id: 2, name: "Genz Toyz", img: "/cat2.png" },
  { id: 3, name: "Accessories", img: "/cat3.png" },
  { id: 4, name: "Shoes", img: "/cat4.png" },
  { id: 5, name: "Genz Items", img: "/cat5.png" },
];

export default function Categories() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-full px-4 sm:px-8 pb-10">
{/* Desktop View */}
<div className="hidden sm:grid grid-cols-5 gap-6">
  {categories.map((cat) => (
    <div
      key={cat.id}
      className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <Image
        src={cat.img}
        alt={cat.name}
        width={400}
        height={300}
        className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-110"
        sizes="20vw"
        priority
      />
<div className="absolute inset-0 flex items-center justify-center 
    bg-black/50 opacity-0 group-hover:opacity-100 
    transition-opacity duration-300">
  <span className="text-white text-lg font-semibold">{cat.name}</span>
      </div>
    </div>
  ))}
</div>


{/* Mobile View */}
<div className="sm:hidden flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
  {categories.map((cat) => (
    <div
      key={cat.id}
      className="flex-shrink-0 snap-center group relative"
    >
      <div className="relative w-[110px] h-[100px] overflow-hidden rounded-lg">
        <Image
          src={cat.img}
          alt={cat.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
          sizes="30vw"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-sm font-semibold">{cat.name}</span>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
