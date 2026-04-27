"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-[10px] tracking-widest">
        LOADING_ASSET_DATA...
      </div>
    );
  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-[10px] tracking-widest text-red-500">
        ASSET_NOT_FOUND
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 bg-white">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left: Product Image Section */}
        <div className="space-y-6">
          <div className="aspect-4/5 bg-[#F9F9F9] relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-12 grayscale-20 hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Subtle Image Gallery Simulation */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-slate-50 border border-slate-100 hover:border-black cursor-crosshair"
              ></div>
            ))}
          </div>
        </div>

        {/* Right: Product Technical Specs */}
        <div className="space-y-12">
          <div className="border-b border-slate-100 pb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              {product.brand} // {product.category}
            </span>
            <h1 className="text-5xl font-semibold tracking-tighter text-black mt-4 leading-none">
              {product.name}
            </h1>
            <p className="text-3xl font-mono font-bold text-black mt-8">
              ${product.price.toLocaleString()}.00
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid gap-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                Description
              </span>
              <p className="text-slate-600 leading-relaxed font-light text-lg">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-8 border-t border-slate-50 pt-10">
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Warranty
                </span>
                <p className="text-[13px] font-bold text-black mt-1 uppercase">
                  {product.warranty}
                </p>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Release Date
                </span>
                <p className="text-[13px] font-bold text-black mt-1 font-mono">
                  {product.releaseDate}
                </p>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Stock Available
                </span>
                <p className="text-[13px] font-bold text-black mt-1">
                  {product.stock} Units
                </p>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Rating
                </span>
                <p className="text-[13px] font-bold text-black mt-1">
                  ★ {product.rating} / 5.0
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-10">
            <button className="flex-1 bg-black text-white px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-slate-800 transition-all active:scale-[0.98]">
              Acquire Now
            </button>
            <button className="flex-1 bg-white text-black border border-slate-200 px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:border-black transition-all active:scale-[0.98]">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
