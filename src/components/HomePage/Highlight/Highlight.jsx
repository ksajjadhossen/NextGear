import React from "react";

const Highlights = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs px-3 py-1 bg-blue-50 rounded-full">
            New Release
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-6 leading-[1.1] tracking-tighter">
            Built for the <br /> modern era.
          </h2>
          <p className="mt-8 text-xl text-gray-500 leading-relaxed font-medium">
            ডিজাইন এবং পারফরম্যান্সের এক নিখুঁত মেলবন্ধন। প্রতিটি ডিটেইল খুব
            যত্ন সহকারে তৈরি করা হয়েছে।
          </p>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
          {[
            { title: "Faster", desc: "Bionic chip speed" },
            { title: "Lighter", desc: "Titanium body" },
            { title: "Clearer", desc: "Retina display" },
            { title: "Longer", desc: "24hr battery" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-10 border border-gray-100 rounded-[2rem] bg-[#fbfbfd] hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <h4 className="font-bold text-2xl text-black">{item.title}</h4>
              <p className="text-gray-400 mt-2 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
