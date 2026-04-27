import React from "react";

const FeaturedProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "CORE SERIES V3",
      price: "$299.00",
      category: "WEARABLES",
      image:
        "https://images.unsplash.com/photo-1544117518-2b476ddf3bc1?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "NEXT GEN AUDIO",
      price: "$159.00",
      category: "ACCESSORIES",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "LEATHER SHELL",
      price: "$49.00",
      category: "PROTECTION",
      image:
        "https://images.unsplash.com/photo-1603313011101-31c726a8474d?q=80&w=800&auto=format&fit=crop",
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
          <button className="group text-black font-bold uppercase text-[11px] tracking-widest flex items-center gap-2 hover:opacity-60 transition-opacity">
            Browse All Items
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-slate-100">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white p-8 border-r border-b border-slate-100 flex flex-col items-start cursor-pointer transition-colors duration-500 hover:bg-[#FAFAFA]"
            >
              {/* Product Category Badge */}
              <span className="text-[9px] font-black tracking-widest text-slate-400 mb-6 uppercase">
                {product.category}
              </span>

              {/* Image Container */}
              <div className="w-full aspect-square bg-white mb-8 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Product Info */}
              <div className="mt-auto w-full">
                <h3 className="text-lg font-semibold text-black tracking-tight">
                  {product.name}
                </h3>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-mono text-slate-500">
                    {product.price}
                  </span>

                  {/* Subtle Detail Link */}
                  <span className="text-[10px] font-bold uppercase tracking-tighter border-b border-black pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductGrid;
