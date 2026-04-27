import React from "react";

const ProductHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-5 border-b border-slate-100 mb-12 gap-4">
      {/* Product Count with Technical Style */}
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-black rounded-none"></div>
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          Showing <span className="text-black">24</span> RESULTS
        </p>
      </div>

      <div className="flex items-center gap-8 w-full md:w-auto justify-between">
        {/* Premium Select Dropdown */}
        <div className="relative group">
          <select className="appearance-none bg-transparent font-bold focus:outline-none cursor-pointer text-[10px] uppercase tracking-[0.2em] pr-6 text-slate-600 hover:text-black transition-colors">
            <option>SORT / NEWEST ARRIVALS</option>
            <option>PRICE / ASCENDING</option>
            <option>PRICE / DESCENDING</option>
            <option>RATING / HIGHEST</option>
          </select>
          {/* Custom Arrow Icon */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <path d="M1 3L5 7L9 3" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* View Layout Toggles (SVG Based) */}
        <div className="hidden md:flex items-center border-l border-slate-100 pl-8 gap-4">
          <button className="p-1 text-black transition-opacity hover:opacity-50">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
          <button className="p-1 text-slate-300 transition-all hover:text-black">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
