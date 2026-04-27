import React from "react";

const Pagination = ({ items }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-24 mb-20 gap-6">
      {/* Subtle Progress Indicator */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          Viewing {items.length} of {items.length} Products
        </p>
        <div className="w-48 h-px bg-slate-100 relative">
          <div className="absolute left-0 top-0 h-full bg-black w-1/5 transition-all duration-1000"></div>
        </div>
      </div>

      {/* Modern Load More Button */}
      <button className="group relative px-16 py-5 bg-transparent border border-slate-200 text-black text-[11px] font-black uppercase tracking-[0.4em] rounded-none hover:border-black transition-all duration-500 overflow-hidden active:scale-[0.98]">
        <span className="relative z-10 group-hover:text-white transition-colors duration-500">
          Load More Gear
        </span>

        {/* Animated Background Slide */}
        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
      </button>

      {/* Decorative Technical Detail */}
      <span className="text-[9px] font-mono text-slate-300 uppercase tracking-tighter">
        Ref: NG_PAGINATION_CTRL_01
      </span>
    </div>
  );
};

export default Pagination;
