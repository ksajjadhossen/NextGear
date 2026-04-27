"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { useAuth } from "@/context/authContext";
import { logout } from "@/lib/authOperation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

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
      router.push("/login");
      alert("Please log in to view your wishlist.");
      return;
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

              {/* Desktop Menu */}
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
                        : "text-gray-400 after:scale-x-0 hover:text-black"
                    }`}
                  >
                    My Items
                  </Link>
                )}
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-3 sm:space-x-5">
                <div className="hidden md:block relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-100 border-none rounded-full py-1.5 px-4 text-xs text-black focus:ring-1 focus:ring-black w-36 focus:w-48 transition-all duration-300 outline-none"
                  />
                </div>

                <button onClick={handleWishList} className="p-2">
                  <FaRegHeart
                    className={`${isActive("/wishlist") ? "text-red-500" : "text-gray-400"} hover:text-red-500 transition-colors text-lg`}
                  />
                </button>

                <div className="flex items-center space-x-3 border-l border-gray-100 pl-3 sm:pl-5">
                  {!user ? (
                    <div className="flex items-center gap-4">
                      <Link
                        href="/login"
                        className={`text-[13px] font-medium ${isActive("/login") ? "text-black underline decoration-2 underline-offset-4" : "text-gray-500"}`}
                      >
                        Login
                      </Link>
                      <Link
                        href="/items/add"
                        className="bg-black text-white px-4 py-2 rounded-full text-[11px] font-semibold hover:bg-zinc-800 transition-colors"
                      >
                        Add Item
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 group"
                      >
                        <div
                          className={`relative w-8 h-8 rounded-full ring-offset-2 transition-all ${isActive("/profile") ? "ring-2 ring-black" : "ring-0"}`}
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
                            <FaUserCircle className="text-2xl text-gray-400 group-hover:text-black" />
                          )}
                        </div>
                        <span
                          className={`hidden sm:block text-[13px] font-medium ${isActive("/profile") ? "text-black" : "text-gray-600"}`}
                        >
                          {user?.displayName
                            ? user.displayName.split(" ")[0]
                            : "Profile"}
                        </span>
                      </Link>
                      <button
                        onClick={handleLogOut}
                        className="text-[12px] font-medium text-red-500 hover:opacity-70"
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
        <div className="menu p-6 w-72 min-h-full bg-white text-black flex flex-col">
          <div className="flex justify-between items-center mb-10 border-b pb-4">
            <span className="text-xl font-bold tracking-tighter uppercase">
              Menu
            </span>
            <label htmlFor="my-drawer" className="cursor-pointer">
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

          <ul className="space-y-1 flex-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-lg font-semibold py-3 px-4 rounded-lg transition-all ${
                    isActive(link.href)
                      ? "bg-black text-white"
                      : "text-gray-500 hover:bg-gray-50 hover:text-black"
                  }`}
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
                    className={`text-lg font-semibold py-3 px-4 rounded-lg transition-all ${
                      isActive("/my-items")
                        ? "bg-black text-white"
                        : "text-gray-500 hover:bg-gray-50 hover:text-black"
                    }`}
                  >
                    My Items
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className={`text-lg font-semibold py-3 px-4 rounded-lg transition-all ${
                      isActive("/profile")
                        ? "bg-black text-white"
                        : "text-gray-500 hover:bg-gray-50 hover:text-black"
                    }`}
                  >
                    Profile Settings
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Mobile Bottom Action */}
          <div className="mt-auto pt-6">
            <Link
              href="/items/add"
              className="w-full bg-black text-white text-center py-4 rounded-xl font-bold shadow-lg block active:scale-95 transition-transform"
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
