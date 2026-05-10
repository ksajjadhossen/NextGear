"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Star, ArrowRight } from "lucide-react"; // lucide-react ব্যবহার করা হয়েছে

const ProductCard = ({ product }) => {
  // ডাটাবেস থেকে স্টোক চেক করা
  const isOutOfStock = product?.stock <= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col h-full bg-white border border-gray-100 hover:border-black transition-all duration-500 overflow-hidden"
    >
      {/* 1. Image Section (Fixed Aspect Ratio) */}
      <div className="relative aspect-[4/5] w-full bg-[#F5F5F5] overflow-hidden">
        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          <span className="text-[8px] font-black uppercase tracking-widest text-white bg-black px-2 py-1">
            {product?.brand || "Next Gear"}
          </span>
          {isOutOfStock && (
            <span className="text-[8px] font-black uppercase tracking-widest text-black bg-yellow-400 px-2 py-1">
              Sold Out
            </span>
          )}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-md px-2 py-1 flex items-center gap-1 border border-gray-100">
          <Star size={8} fill="currentColor" className="text-black" />
          <span className="text-[9px] font-bold text-black">
            {product?.rating || "4.5"}
          </span>
        </div>

        <Image
          src={product?.image || "/placeholder-gadget.png"}
          alt={product?.name}
          fill
          className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
            isOutOfStock ? "grayscale opacity-50" : "grayscale-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Quick View Button on Image */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <Link
            href={`/items/${product?._id}`}
            className="bg-white text-black text-[9px] font-black uppercase tracking-[0.3em] px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-black hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-5 flex flex-col flex-grow bg-white">
        {/* Category & Title */}
        <div className="mb-3">
          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
            {product?.category || "Standard Series"}
          </p>
          <h3 className="text-[14px] font-bold text-black uppercase tracking-tight line-clamp-1 group-hover:text-gray-600 transition-colors">
            {product?.name || "Precision Component"}
          </h3>
        </div>

        {/* Short Description (Requirement: Fixed line clamp) */}
        <p className="text-[11px] text-gray-500 leading-relaxed mb-4 line-clamp-2 min-h-[32px]">
          {product?.description ||
            "High-performance modular component designed for Next Gear ecosystem."}
        </p>

        {/* Meta Info: Price & Stock Status */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
              MRP
            </span>
            <span className="text-lg font-mono font-bold text-black leading-none">
              ${product?.price?.toLocaleString() || "0.00"}
            </span>
          </div>

          <div className="text-right">
            <span
              className={`text-[9px] font-bold uppercase tracking-widest ${isOutOfStock ? "text-red-500" : "text-green-600"}`}
            >
              {isOutOfStock ? "Out of Stock" : "In Stock"}
            </span>
            <p className="text-[8px] text-gray-400 uppercase tracking-tighter">
              Ready to Deploy
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
