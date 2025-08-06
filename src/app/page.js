"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Divider from "./components/Divider";


export default function Home() {



return (

<div className="flex flex-col min-h-screen bg-gray-100 w-full">
      <Navbar />

      {/* Wrapping Slider + Divider in a parent div to ensure no margin collapse */}
      <div className="flex flex-col w-full">
        <Slider />
        <Divider />
      </div>
    </div>
  );
}
