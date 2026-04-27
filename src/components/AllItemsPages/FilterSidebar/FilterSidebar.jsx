import React from "react";

const FilterSidebar = ({ filters, setFilters, onReset }) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <aside className="w-full lg:w-72 space-y-12 lg:pr-10 border-r border-slate-100 hidden lg:block sticky top-24 h-fit">
      {/* Search Filter */}
      <div className="group">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-5">
          Discovery / Search
        </h3>
        <div className="relative">
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleInputChange}
            placeholder="REF. MODEL OR KEYWORD"
            className="w-full bg-transparent border-b border-slate-200 py-3 text-[11px] font-bold tracking-widest uppercase focus:border-black transition-colors outline-none"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
          CATALOGUE
        </h3>
        <ul className="space-y-1">
          {["All Products", "Audio", "Wearables", "Accessories", "MacBook"].map(
            (cat) => (
              <li
                key={cat}
                onClick={() => setFilters({ ...filters, category: cat })}
                className="group cursor-pointer"
              >
                <div
                  className={`flex items-center justify-between py-2.5 transition-all ${filters.category === cat ? "border-b border-black" : "border-b border-transparent"}`}
                >
                  <span
                    className={`text-[11px] font-bold uppercase tracking-widest ${filters.category === cat ? "text-black" : "text-slate-500 group-hover:text-black"}`}
                  >
                    {cat}
                  </span>
                  <div
                    className={`w-3 h-3 border ${filters.category === cat ? "border-black bg-black" : "border-slate-200"}`}
                  ></div>
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
            name="maxPrice"
            min="0"
            max="5000"
            value={filters.maxPrice}
            onChange={handleInputChange}
            className="w-full h-0.5 bg-slate-100 appearance-none cursor-pointer accent-black mb-6"
          />
          <div className="flex justify-between border border-slate-100 p-4">
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 uppercase font-black tracking-tighter">
                Max Range
              </span>
              <span className="text-xs font-mono font-bold">
                ${filters.maxPrice}.00
              </span>
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
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            In Stock Only
          </span>
          <div className="relative">
            <input
              type="checkbox"
              name="inStock"
              checked={filters.inStock}
              onChange={handleInputChange}
              className="sr-only peer"
            />
            <div className="w-8 h-4 bg-slate-100 border peer-checked:bg-black transition-all"></div>
            <div
              className={`absolute left-0.5 top-0.5 bg-white w-2.5 h-2.5 transition-transform ${filters.inStock ? "translate-x-4" : ""}`}
            ></div>
          </div>
        </label>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="w-full py-5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border border-slate-100 hover:bg-black hover:text-white transition-all"
      >
        Clear All Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
