import React from "react";

const ProductHeader = ({ productCount, onSortChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-5 border-b border-slate-100 mb-12 gap-4">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-black rounded-none"></div>
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          Showing <span className="text-black">{productCount}</span> RESULTS
        </p>
      </div>

      <div className="flex items-center gap-8 w-full md:w-auto justify-between">
        <div className="relative group">
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-transparent font-bold focus:outline-none cursor-pointer text-[10px] uppercase tracking-[0.2em] pr-6 text-slate-600 hover:text-black transition-colors"
          >
            <option value="SORT / NEWEST ARRIVALS">
              SORT / NEWEST ARRIVALS
            </option>
            <option value="PRICE / ASCENDING">PRICE / ASCENDING</option>
            <option value="PRICE / DESCENDING">PRICE / DESCENDING</option>
            <option value="RATING / HIGHEST">RATING / HIGHEST</option>
          </select>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <path d="M1 3L5 7L9 3" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="hidden md:flex items-center border-l border-slate-100 pl-8 gap-4"></div>
      </div>
    </div>
  );
};

export default ProductHeader;
