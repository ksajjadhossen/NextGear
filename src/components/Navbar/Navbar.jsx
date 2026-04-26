import React from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa"; // হার্ট আইকনের জন্য

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter text-black uppercase"
            >
              Next Gear
            </Link>
          </div>

          {/* Center: Main Navigation (Desktop) */}
          <div className="hidden lg:flex space-x-10 items-center">
            <Link
              href="/"
              className="text-[13px] font-medium text-gray-500 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="/items"
              className="text-[13px] font-medium text-gray-500 hover:text-black transition-colors"
            >
              All Items
            </Link>
            <Link
              href="/about"
              className="text-[13px] font-medium text-gray-500 hover:text-black transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right Section: Search, Wishlist & Auth */}
          <div className="flex items-center space-x-5">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 border-none rounded-full py-1.5 px-4 text-xs text-black focus:ring-1 focus:ring-black w-36 focus:w-48 transition-all duration-300"
              />
            </div>

            <Link href="/wishlist" className="relative group p-2">
              <FaRegHeart className="text-gray-400 group-hover:text-red-500 transition-colors duration-300 text-lg" />

              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 border-l border-gray-100 pl-5">
              <Link
                href="/login"
                className="text-[13px] font-medium text-gray-600 hover:text-black"
              >
                Login
              </Link>
              <Link
                href="/items/add"
                className="bg-black text-white px-5 py-2 rounded-full text-[12px] font-semibold hover:bg-gray-800 transition-all active:scale-95"
              >
                Add Item
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
