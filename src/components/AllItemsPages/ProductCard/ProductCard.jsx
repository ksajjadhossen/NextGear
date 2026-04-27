"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative bg-white border border-slate-100 transition-all duration-500 hover:border-black"
    >
      {/* Product Image Holder */}
      <div className="relative aspect-4/5 bg-[#F9F9F9] overflow-hidden flex items-center justify-center">
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white bg-black px-2 py-1">
            New Arrival
          </span>
        </div>

        <Image
          src={product?.image || "/placeholder-gadget.png"}
          alt={product?.name || "Next Gear Product"}
          fill
          className="object-cover grayscale-30 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.8s] ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={product.id <= 6}
        />

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <Link
            href={`/items/${product.id}`}
            className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-8 py-4 rounded-none translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl hover:bg-black hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="p-6 bg-white">
        <div className="flex justify-between items-start mb-3">
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              {product?.category || "Tech Series"}
            </p>
            <h3 className="text-[16px] font-bold text-black tracking-tight leading-tight uppercase">
              {product?.name || "Precision Audio Device"}
            </h3>
          </div>
          <p className="text-[14px] font-mono font-bold text-black">
            ${product?.price || "000.00"}
          </p>
        </div>

        <p className="text-[11px] text-slate-500 font-light leading-relaxed mb-6 line-clamp-2">
          {product?.description ||
            "Experience next-level performance with our latest engineered series."}
        </p>

        <div className="pt-4 flex items-center justify-between border-t border-slate-50">
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
            In stock / Ready to ship
          </p>
          <button className="text-black hover:scale-125 transition-all duration-300">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
