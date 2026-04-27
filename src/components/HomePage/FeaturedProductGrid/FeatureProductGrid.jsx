import Link from "next/link";
import React from "react";
import Image from "next/image";

const FeaturedProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "CORE SERIES V3",
      price: 299,
      category: "WEARABLES",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
      brand: "Next Gear",
      stock: 12,
      rating: 4.5,
      description: "Industrial grade wearable tracking tech.",
      warranty: "2 Years",
      releaseDate: "2025-11-10",
    },
    {
      id: 2,
      name: "NEXT GEN AUDIO",
      price: 159,
      category: "ACCESSORIES",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
      brand: "Sonic",
      stock: 25,
      rating: 4.8,
      description: "High-fidelity wireless audio experience.",
      warranty: "1 Year",
      releaseDate: "2026-01-15",
    },
    {
      id: 3,
      name: "LEATHER SHELL",
      price: 49,
      category: "PROTECTION",
      image:
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop",
      brand: "Armor",
      stock: 50,
      rating: 4.2,
      description: "Premium handcrafted leather protection.",
      warranty: "6 Months",
      releaseDate: "2025-12-01",
    },
  ];

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
