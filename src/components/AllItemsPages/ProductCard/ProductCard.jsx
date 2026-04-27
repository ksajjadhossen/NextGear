import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white border border-slate-100 p-0 rounded-none transition-all duration-500 hover:border-black">
      {/* Product Image Holder */}
      <div className="relative aspect-[4/5] bg-[#F9F9F9] overflow-hidden flex items-center justify-center">
        {/* Subtle Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white bg-black px-2 py-1">
            New Arrival
          </span>
        </div>

        <img
          src={product?.image || "/placeholder-gadget.png"}
          alt={product?.name || "Next Gear Product"}
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.8s] ease-in-out"
        />

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-none translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
            View Details
          </button>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="p-6 space-y-1 bg-white">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
              {product?.category || "Tech Series"}
            </p>
            <h3 className="text-[15px] font-semibold text-black tracking-tight leading-tight">
              {product?.name || "Precision Audio Device"}
            </h3>
          </div>
          <p className="text-[13px] font-mono font-bold text-black">
            ${product?.price || "000.00"}
          </p>
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-slate-50 mt-4">
          <p className="text-[11px] text-slate-400 font-light italic">
            In stock / Ready to ship
          </p>
          {/* Subtle Add Icon */}
          <button className="text-black hover:scale-125 transition-transform">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
