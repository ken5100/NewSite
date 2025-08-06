'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full bg-white shadow">
      <div className="w-full px-4 py-2 flex items-center justify-between flex-wrap md:flex-nowrap">

        {/* Left: Logo + Nav Links */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-shrink-0">
          {/* Logo */}
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>

          {/* Nav Links (hidden on small screens) */}
          <div className="hidden md:flex gap-5 lg:gap-7">
            <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-black">Products</Link>
            <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link>
          </div>
        </div>

        {/* Right: Search Bar + Icons */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 ml-auto flex-wrap">
          {/* Search Bar */}
          <div className="hidden md:flex relative w-56 sm:w-64 md:w-72 lg:w-80">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-full rounded-3xl bg-[#81D1FF80] placeholder-gray-700 text-black text-sm outline-none"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <Image src="/cart.svg" alt="Cart" width={30} height={30} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
            <Image src="/profile.svg" alt="Profile" width={30} height={30} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none text-xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-black">Home</Link>
          <Link href="/products" className="block text-gray-700 hover:text-black">Products</Link>
          <Link href="/about" className="block text-gray-700 hover:text-black">About</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-black">Contact</Link>

          {/* Optional: mobile search */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 mt-2 rounded-3xl bg-[#81D1FF80] placeholder-gray-700 text-black text-sm outline-none"
          />
        </div>
      )}
    </div>
  )
}

export default Navbar
