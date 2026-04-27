import React from "react";

const Highlights = () => {
  const specs = [
    { title: "FASTER", desc: "Bionic Architecture", value: "4.0GHz" },
    { title: "LIGHTER", desc: "Aerospace Titanium", value: "180g" },
    { title: "CLEARER", desc: "Super Retina XDR", value: "8K" },
    { title: "LONGER", desc: "Extended Cell Life", value: "36hr" },
  ];

  return (
    <section className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-16">
        {/* Left Side: Content */}
        <div className="lg:w-5/12 sticky top-32">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 bg-black rounded-none"></span>
            <span className="text-black font-black uppercase tracking-[0.3em] text-[10px]">
              New Release / 2026
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-semibold leading-[0.9] tracking-tighter text-black">
            BUILT FOR <br />
            <span className="text-slate-300">THE NEXT ERA.</span>
          </h2>

          <p className="mt-10 text-lg text-slate-500 leading-relaxed max-w-md font-light">
            A perfect synergy of minimalist aesthetics and raw performance.
            Every internal component is precision-engineered for the modern
            professional.
          </p>

          <div className="mt-12">
            <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-slate-500 hover:border-slate-300 transition-all">
              Technical Specifications
            </button>
          </div>
        </div>

        {/* Right Side: Grid */}
        <div className="lg:w-7/12 w-full grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 overflow-hidden">
          {specs.map((item, index) => (
            <div
              key={index}
              className="group p-12 bg-white hover:bg-[#FAFAFA] transition-colors duration-500 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em] mb-2 uppercase">
                  {item.title}
                </p>
                <h4 className="text-3xl font-light text-black tracking-tight leading-none">
                  {item.desc}
                </h4>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tighter text-black group-hover:scale-110 transition-transform duration-500 origin-left">
                  {item.value}
                </span>
                <span className="text-[10px] font-black text-slate-300 uppercase">
                  Peak performance
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
