"use client";
import React from "react";
import Link from "next/link";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { useAuth } from "@/context/authContext";
import { logout } from "@/lib/authOperation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleWishList = () => {
    if (user) {
      router.push("/wishlist");
    } else {
      {
        router.push("/login");
        alert("Please log in to view your wishlist.");
        return;
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Items", href: "/items" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="drawer drawer-end sticky top-0 z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <nav className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <div className="shrink-0">
                <Link
                  href="/"
                  className="text-xl font-bold tracking-tighter text-black uppercase"
                >
                  <Image src="/bgimg.png" alt="Logo" width={150} height={50} />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex space-x-10 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[13px] font-medium text-gray-500 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                {user && (
                  <Link
                    href="/my-items"
                    className="text-[13px] font-medium text-gray-500 hover:text-black transition-colors"
                  >
                    My Items
                  </Link>
                )}
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-3 sm:space-x-5">
                {/* Search */}
                <div className="hidden md:block relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-100 border-none rounded-full py-1.5 px-4 text-xs text-black focus:ring-1 focus:ring-black w-36 focus:w-48 transition-all duration-300"
                  />
                </div>

                {/* ❤️ Wishlist */}
                <button onClick={handleWishList} className="relative group p-2">
                  <FaRegHeart className="text-gray-400 group-hover:text-red-500 transition-colors duration-300 text-lg" />
                </button>

                {/* Auth & Protected Profile */}
                <div className="flex items-center space-x-3 border-l border-gray-100 pl-3 sm:pl-5">
                  {!user ? (
                    <>
                      <Link
                        href="/login"
                        className="text-[12px] sm:text-[13px] font-medium text-gray-600"
                      >
                        Login
                      </Link>
                      <Link
                        href="/items/add"
                        className="bg-black text-white px-4 py-2 rounded-full text-[11px] font-semibold"
                      >
                        Add Item
                      </Link>
                    </>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 group"
                      >
                        {/* ইউজার ইমেজ থাকলে সেটা দেখাবে, না থাকলে আইকন */}
                        {user?.photoURL ? (
                          <div className="relative w-8 h-8">
                            <Image
                              src={user?.photoURL}
                              alt="Profile"
                              fill
                              className="rounded-full object-cover border border-gray-100 transition-transform group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          <FaUserCircle className="text-xl text-gray-400 group-hover:text-black transition-colors" />
                        )}

                        <span className="hidden sm:block text-[13px] font-medium text-gray-600 group-hover:text-black">
                          {user?.displayName
                            ? user.displayName.split(" ")[0]
                            : "Profile"}
                        </span>
                      </Link>

                      <button
                        onClick={handleLogOut}
                        className="text-[12px] font-medium text-red-500 hover:underline"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Hamburger */}
                <label
                  htmlFor="my-drawer"
                  className="lg:hidden p-2 text-black cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-6 w-80 min-h-full bg-white text-black">
          <div className="flex justify-between items-center mb-10 border-b pb-4">
            <span className="text-xl font-bold tracking-tighter uppercase text-black">
              Menu
            </span>
            <label htmlFor="my-drawer" className="cursor-pointer p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>

          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-gray-600 hover:text-black"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {user && (
              <>
                <li>
                  <Link
                    href="/my-items"
                    className="text-lg font-medium text-gray-600 hover:text-black"
                  >
                    My Items
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="text-lg font-medium text-gray-600 hover:text-black"
                  >
                    Profile
                  </Link>
                </li>
              </>
            )}

            <li className="pt-6">
              <Link
                href="/items/add"
                className="bg-black text-white text-center py-4 rounded-full font-semibold shadow-xl"
              >
                Sell Your Gear
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
