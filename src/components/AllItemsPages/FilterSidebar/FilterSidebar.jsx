import React from "react";

const FilterSidebar = () => {
  return (
    <aside className="w-full lg:w-72 space-y-12 lg:pr-10 border-r border-slate-100 hidden lg:block sticky top-24 h-fit">
      {/* Search within Category */}
      <div className="group">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-5">
          Discovery / Search
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="REF. MODEL OR KEYWORD"
            className="w-full bg-transparent border-b border-slate-200 py-3 text-[11px] font-bold tracking-widest uppercase focus:border-black transition-colors outline-none placeholder:text-slate-300"
          />
          <div className="absolute bottom-0 left-0 h-[1.5px] bg-black w-0 group-focus-within:w-full transition-all duration-500"></div>
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 flex justify-between">
          <span>CATALOGUE</span>
          <span className="text-slate-200">01</span>
        </h3>
        <ul className="space-y-1">
          {["All Products", "Audio", "Wearables", "Accessories", "MacBook"].map(
            (cat) => (
              <li key={cat} className="group cursor-pointer">
                <div className="flex items-center justify-between py-2.5 transition-all duration-300 border-b border-transparent hover:border-slate-100">
                  <span className="text-slate-500 group-hover:text-black font-bold uppercase text-[11px] tracking-widest">
                    {cat}
                  </span>
                  <div className="w-3 h-3 border border-slate-200 flex items-center justify-center group-hover:border-black transition-colors rounded-none">
                    <div className="w-1 h-1 bg-transparent group-hover:bg-black rounded-none"></div>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">
          PRICE PARAMETER / USD
        </h3>
        <div className="px-1">
          <input
            type="range"
            className="w-full h-0.5 bg-slate-100 appearance-none cursor-pointer accent-black mb-6"
            min="0"
            max="5000"
          />
          <div className="flex justify-between items-center border border-slate-100 p-4 rounded-none">
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 uppercase font-black tracking-tighter">
                Min Range
              </span>
              <span className="text-xs font-mono font-bold">$0.00</span>
            </div>
            <div className="h-6 w-px bg-slate-100"></div>
            <div className="flex flex-col text-right">
              <span className="text-[9px] text-slate-400 uppercase font-black tracking-tighter">
                Max Range
              </span>
              <span className="text-xs font-mono font-bold">$5,000.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Toggle */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
          Logistics / Status
        </h3>
        <label className="flex items-center justify-between cursor-pointer group border border-slate-100 p-4 hover:border-black transition-colors">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-black">
            In Stock Only
          </span>
          <div className="relative">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-8 h-4 bg-slate-100 border border-slate-200 peer-checked:bg-black peer-checked:border-black transition-all"></div>
            <div className="absolute left-0.5 top-0.5 bg-white w-2.5 h-[h-2.5er-checked:translate-x-4 transition-transform"></div>
          </div>
        </label>
      </div>

      {/* Reset Button */}
      <button className="w-full py-5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border border-slate-100 hover:bg-black hover:text-white hover:border-black transition-all duration-500 rounded-none">
        Clear All Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
