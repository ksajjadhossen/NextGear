"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaTrashAlt, FaPlus, FaSearch } from "react-icons/fa";

const MyItems = () => {
  const items = [
    {
      id: 1,
      title: "MacBook Pro M3 Max",
      price: 2499,
      status: "Active",
      date: "Oct 12, 2025",
      img: "/placeholder-gadget.png",
    },
    {
      id: 2,
      title: "Sony WH-1000XM5",
      price: 399,
      status: "Sold",
      date: "Sep 28, 2025",
      img: "/placeholder-gadget.png",
    },
    {
      id: 3,
      title: "iPhone 15 Pro Titanium",
      price: 999,
      status: "Pending",
      date: "Oct 05, 2025",
      img: "/placeholder-gadget.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-12 bg-white min-h-screen">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tighter text-black uppercase">
            My Inventory
          </h1>
          <p className="text-[13px] text-gray-500 mt-1">
            Manage your listed gadgets and sales performance.
          </p>
        </div>
        <Link
          href="/items/add"
          className="bg-black text-white px-6 py-2.5 rounded-sm text-[12px] font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-all"
        >
          <FaPlus size={10} /> ADD NEW ITEM
        </Link>
      </div>

      {/* 2. Stats Overview (Minimalist) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total Items", value: "12" },
          { label: "Active Ads", value: "08" },
          { label: "Items Sold", value: "03" },
          { label: "Total Earned", value: "$4,250" },
        ].map((stat, i) => (
          <div key={i} className="border border-gray-100 p-5 rounded-sm">
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">
              {stat.label}
            </p>
            <p className="text-xl font-bold text-black mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* 3. Search & Filter Bar */}
      <div className="flex items-center border-b border-gray-100 pb-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-xs" />
          <input
            type="text"
            placeholder="Search your items..."
            className="w-full pl-9 pr-4 py-2 text-[13px] focus:outline-none bg-transparent"
          />
        </div>
        <div className="hidden md:flex gap-6 text-[12px] font-medium text-gray-400">
          <button className="text-black border-b border-black pb-1">All</button>
          <button className="hover:text-black transition-colors">Active</button>
          <button className="hover:text-black transition-colors">Sold</button>
        </div>
      </div>

      {/* 4. Items Table Header (Desktop Only) */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 text-[11px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100 rounded-sm mb-4">
        <div className="col-span-6">Item Detail</div>
        <div className="col-span-2 text-center">Price</div>
        <div className="col-span-2 text-center">Status</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>

      {/* 5. Items List */}
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 border border-gray-100 rounded-sm hover:border-black transition-all group"
          >
            {/* Item Info */}
            <div className="col-span-6 flex items-center gap-4">
              <div className="w-14 h-14 relative bg-gray-50 border border-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-black tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-400 uppercase tracking-tighter">
                  Listed on {item.date}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="col-span-2 text-center text-[14px] font-medium text-black">
              ${item.price}
            </div>

            {/* Status Badge */}
            <div className="col-span-2 flex justify-center">
              <span
                className={`text-[9px] font-bold px-2 py-1 uppercase tracking-tighter rounded-none border ${
                  item.status === "Active"
                    ? "border-green-200 text-green-600 bg-green-50"
                    : item.status === "Sold"
                      ? "border-gray-200 text-gray-500 bg-gray-50"
                      : "border-orange-200 text-orange-600 bg-orange-50"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* Actions */}
            <div className="col-span-2 flex justify-end gap-4">
              <button
                title="Edit"
                className="p-2 text-gray-400 hover:text-black transition-colors"
              >
                <FaEdit size={14} />
              </button>
              <button
                title="Delete"
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <FaTrashAlt size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
