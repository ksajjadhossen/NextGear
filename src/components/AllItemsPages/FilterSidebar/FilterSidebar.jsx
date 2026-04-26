import React from "react";

const FilterSidebar = () => {
  return (
    <aside className="w-full lg:w-72 space-y-12 pr-8 border-r border-gray-50 hidden lg:block">
      {/* Search within Category */}
      <div className="relative group">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">
          Search Gear
        </h3>
        <input
          type="text"
          placeholder="I'm looking for..."
          className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-black transition-all outline-none"
        />
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 flex justify-between">
          <span>Categories</span>
          <span className="text-gray-200">/</span>
        </h3>
        <ul className="space-y-2">
          {["All Products", "Audio", "Wearables", "Accessories", "MacBook"].map(
            (cat) => (
              <li key={cat} className="group cursor-pointer">
                <div className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                  <span className="text-gray-600 group-hover:text-black font-medium text-[15px]">
                    {cat}
                  </span>
                  <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-black"></div>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* Price Range Filter - Custom Slider Look */}
      <div>
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
          Price Range
        </h3>
        <div className="px-2">
          <input
            type="range"
            className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-black mb-4"
            min="0"
            max="5000"
          />
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
            <div className="text-center">
              <p className="text-[10px] text-gray-400 uppercase font-bold">
                Min
              </p>
              <span className="text-sm font-bold">$0</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-200"></div>
            <div className="text-center">
              <p className="text-[10px] text-gray-400 uppercase font-bold">
                Max
              </p>
              <span className="text-sm font-bold">$5,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Toggle */}
      <div>
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
          Availability
        </h3>
        <label className="flex items-center space-x-3 cursor-pointer group">
          <div className="relative">
            <input type="checkbox" className="sr-only" />
            <div className="w-10 h-6 bg-gray-200 rounded-full group-hover:bg-gray-300 transition-colors shadow-inner"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow transition-transform"></div>
          </div>
          <span className="text-sm font-medium text-gray-600 group-hover:text-black">
            In Stock Only
          </span>
        </label>
      </div>

      {/* Reset Button */}
      <button className="w-full py-4 text-xs font-bold uppercase tracking-widest text-gray-400 border border-gray-100 rounded-2xl hover:border-black hover:text-black transition-all">
        Reset Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
