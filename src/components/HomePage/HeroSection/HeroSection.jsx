import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex flex-col items-center justify-center bg-[#ffffff] overflow-hidden">
      {/* Text Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-4">
          Next Gear. <br />
          <span className="text-gray-400">Future in your hands.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
          মিনিমাল ডিজাইন এবং আধুনিক প্রযুক্তির সমন্বয়। আমাদের প্রতিটি প্রোডাক্ট
          আপনার জীবনকে করবে আরও সহজ।
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all">
            Buy Now
          </button>
          <button className="px-8 py-3 border border-black text-black rounded-full font-medium hover:bg-gray-100 transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Placeholder for Product Image */}
      <div className="mt-12 w-full max-w-4xl px-6">
        {/* এখানে আপনার একটি হাই-কোয়ালিটি ট্রান্সপারেন্ট প্রোডাক্ট ইমেজ বসাবেন */}
        <div className="w-full h-64 bg-gradient-to-b from-gray-50 to-white rounded-t-3xl border-x border-t border-gray-100 shadow-2xl flex items-end justify-center">
          <span className="text-gray-300 mb-10 tracking-widest uppercase text-sm font-semibold">
            Premium Product Display
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
