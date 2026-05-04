"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const FeaturedProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading featured products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
          Loading Featured Products...
        </p>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4 border-b border-slate-100 pb-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">
              Selected Works
            </span>
            <h2 className="text-4xl font-semibold text-black tracking-tighter mt-2">
              FEATURED GEAR.
            </h2>
          </div>
          <Link
            href="/items"
            className="group text-black font-bold uppercase text-[11px] tracking-widest flex items-center gap-2 hover:opacity-60 transition-opacity"
          >
            Browse All Items
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-slate-100">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/items/${product.id}`}
              className="group relative bg-white p-8 border-r border-b border-slate-100 flex flex-col items-start cursor-pointer transition-colors duration-500 hover:bg-[#FAFAFA]"
            >
              {/* Product Category Badge */}
              <div className="flex justify-between w-full mb-6 items-center">
                <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                  {product.category}
                </span>
                <span className="text-[9px] font-mono text-slate-300">
                  REF: NG-00{product.id}
                </span>
              </div>

              {/* Image Container */}
              <div className="w-full aspect-square bg-white mb-8 overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Product Info */}
              <div className="mt-auto w-full">
                <h3 className="text-lg font-semibold text-black tracking-tight uppercase">
                  {product.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {product.description}
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm font-mono font-bold text-black">
                    ${product.price.toLocaleString()}.00
                  </span>

                  {/* Subtle Detail Link */}
                  <span className="text-[10px] font-bold uppercase tracking-tighter border-b border-black pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductGrid;
