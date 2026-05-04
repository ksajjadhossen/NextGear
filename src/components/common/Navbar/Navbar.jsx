"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegHeart, FaUserCircle, FaSearch, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useAuth } from "@/context/authContext";
import { logout } from "@/lib/authOperation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchResults(filtered.slice(0, 6));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, products]);

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Items", href: "/items" },
    { name: "About", href: "/about-us" },
  ];

  const isActive = (path) => pathname === path;

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
                  <Image
                    src="/bgimg.png"
                    alt="Logo"
                    width={70}
                    height={50}
                    priority
                    className="h-auto w-auto"
                  />
                </Link>
              </div>

              <div className="hidden lg:flex space-x-10 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[13px] font-medium transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-black after:transition-transform after:duration-300 ${
                      isActive(link.href)
                        ? "text-black after:scale-x-100"
                        : "text-gray-400 after:scale-x-0 hover:text-black hover:after:scale-x-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {user && (
                  <Link
                    href="/my-items"
                    className={`text-[13px] font-medium transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-black after:transition-transform after:duration-300 ${
                      isActive("/my-items")
                        ? "text-black after:scale-x-100"
                        : "text-gray-400 after:scale-x-0 hover:text-black hover:after:scale-x-100"
                    }`}
                  >
                    My Items
                  </Link>
                )}

                {user && (
                  <Link
                    href="/items/add"
                    className={`text-[13px] font-medium transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-black after:transition-transform after:duration-300 ${
                      isActive("/items/add")
                        ? "text-black after:scale-x-100"
                        : "text-gray-400 after:scale-x-0 hover:text-black hover:after:scale-x-100"
                    }`}
                  >
                    Add Item
                  </Link>
                )}
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-3 sm:space-x-5">
                {/* Searchbar (Desktop) */}
                <div className="hidden md:block relative">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-gray-100 border-none rounded-full py-1.5 pl-10 pr-4 text-xs text-black focus:ring-1 focus:ring-black w-44 focus:w-64 transition-all duration-300 outline-none"
                    />
                    <FaSearch className="absolute left-3 text-gray-400 text-xs" />
                  </div>

                  {/* Search Results Dropdown */}
                  {searchResults.length > 0 && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 z-[60]">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/items/${product.id}`}
                          onClick={() => setSearchQuery("")}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                        >
                          <div className="relative w-8 h-8 bg-gray-100 rounded overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[12px] font-bold truncate w-48">
                              {product.name}
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase">
                              {product.category}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  cursor-pointer
                  onClick={() => router.push("/wishlist")}
                  className="p-2"
                >
                  <FaRegHeart
                    className={`${isActive("/wishlist") ? "text-red-500" : "text-gray-400"} text-lg hover:text-red-500 transition-colors duration-300 cursor-pointer`}
                  />
                </button>

                {/* Auth Section */}
                <div className="flex items-center space-x-3 border-l border-gray-100 pl-3 sm:pl-5">
                  {!user ? (
                    <Link
                      href="/login"
                      className="text-[13px] font-medium text-gray-500"
                    >
                      Login
                    </Link>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <Link href="/profile">
                        <div
                          className={`relative w-8 h-8 rounded-full ring-offset-2 ${isActive("/profile") ? "ring-2 ring-black" : ""}`}
                        >
                          {user?.photoURL ? (
                            <Image
                              src={user.photoURL}
                              alt="Profile"
                              fill
                              className="rounded-full object-cover"
                              sizes="32px"
                            />
                          ) : (
                            <FaUserCircle className="text-2xl text-gray-400" />
                          )}
                        </div>
                      </Link>
                      <button
                        onClick={handleLogOut}
                        className="text-[12px] font-medium text-red-500"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Trigger */}
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

      {/* Mobile Sidebar (Drawer) */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-6 w-80 min-h-full bg-white text-black flex flex-col">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <span className="text-xl font-bold tracking-tighter uppercase">
              Next Gear
            </span>
            <label htmlFor="my-drawer" className="cursor-pointer">
              <FaTimes className="text-xl" />
            </label>
          </div>

          {/* Mobile Search */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:ring-1 focus:ring-black"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            {/* Mobile Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-2 bg-white border border-gray-100 rounded-xl max-h-48 overflow-y-auto">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/items/${product.id}`}
                    onClick={() => {
                      setSearchQuery("");
                      document.getElementById("my-drawer").checked = false;
                    }}
                    className="flex items-center gap-3 p-3 border-b last:border-0"
                  >
                    <span className="text-[13px] font-medium">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ul className="space-y-1 flex-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-lg font-semibold py-3 px-4 rounded-lg ${isActive(link.href) ? "bg-black text-white" : "text-gray-500"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <Link
                  href="/my-items"
                  className={`text-lg font-semibold py-3 px-4 rounded-lg ${isActive("/my-items") ? "bg-black text-white" : "text-gray-500"}`}
                >
                  My Items
                </Link>
              </li>
            )}
          </ul>

          <div className="mt-auto pt-6 border-t">
            <Link
              href="/items/add"
              className="w-full bg-black text-white text-center py-4 rounded-xl font-bold shadow-lg block"
            >
              Sell Your Gear
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
