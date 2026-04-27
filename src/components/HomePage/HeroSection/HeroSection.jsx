import Link from "next/link";
import React from "react";

const Hero = ({ imageUrl }) => {
  // প্রমিয়াম ডিফল্ট ইমেজ (যদি imageUrl না দেয়া থাকে)
  const defaultImage =
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-white overflow-hidden pt-20">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[grid-line] bg-[size:40px_40px]"></div>

      {/* Text Content */}
      <div className="z-10 text-center px-4">
        <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase border border-slate-200 text-slate-500 rounded-sm">
          A New Era of Tech
        </span>

        <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-black mb-6 leading-[0.9]">
          NEXT GEAR. <br />
          <span className="text-slate-300">ESTABLISHED 2026.</span>
        </h1>

        <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Engineered for performance, designed for the minimalist. Experience
          the future of consumer technology with our precision-crafted hardware
          collection.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/items"
            className="px-10 py-4 bg-black text-white text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-slate-800 transition-all duration-500"
          >
            Explore Collection
          </Link>
          <Link
            href="/philosophy"
            className="px-10 py-4 border border-slate-200 text-black text-[11px] font-bold uppercase tracking-widest rounded-sm hover:border-black transition-all duration-500"
          >
            Our Philosophy
          </Link>
        </div>
      </div>

      {/* Interactive Product Display Area */}
      <div className="mt-16 w-full max-w-6xl px-6 relative z-10">
        <div className="relative group overflow-hidden">
          {/* Main Image Container */}
          <div className="w-full h-100 md:h-125 bg-[#F9F9F9] border border-slate-100 flex items-center justify-center relative transition-transform duration-700 group-hover:scale-[1.01]">
            {/* Image Handling */}
            <img
              src={imageUrl || defaultImage}
              alt="Next Gear Premium Product"
              className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Premium Overlay Layer */}
            <div className="absolute inset-0 bg-linear-to-t from-white/40 via-transparent to-transparent"></div>

            {/* Minimalist Floating Label */}
            <div className="absolute bottom-8 left-8 text-left border-l border-black pl-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-black">
                Model Ref.
              </p>
              <p className="text-xs text-slate-500 font-mono">NG-2026-X1</p>
            </div>
          </div>

          {/* Decorative Sharp Accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-black z-20"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-black z-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
