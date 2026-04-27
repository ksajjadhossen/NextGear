import React from "react";

const PhilosophyPage = () => {
  return (
    <section className="bg-white min-h-screen">
      {/* 1. Hero: The Core Belief */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 border-b border-slate-100">
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 block mb-6">
          The Next Gear Doctrine
        </span>
        <h1 className="text-7xl md:text-[120px] font-bold tracking-tighter leading-[0.85] text-black italic">
          LESS, BUT <br />{" "}
          <span className="text-slate-200 not-italic">BETTER.</span>
        </h1>
        <p className="mt-12 text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-light">
          We believe that technology should not clutter your life, but clarify
          it. Next Gear exists at the intersection of extreme utility and
          surgical aesthetics.
        </p>
      </div>

      {/* 2. Three Pillars of Next Gear */}
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-3 gap-16">
        <div className="space-y-6">
          <span className="text-4xl font-mono font-bold text-black">01/</span>
          <h3 className="text-xl font-black uppercase tracking-tighter text-black">
            Intentional Curation
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            We do not simply sell gadgets; we select tools that are built to
            last and perform. Every product in our catalog is chosen as a
            specific solution to a modern problem.
          </p>
        </div>

        <div className="space-y-6">
          <span className="text-4xl font-mono font-bold text-black">02/</span>
          <h3 className="text-xl font-black uppercase tracking-tighter text-black">
            Geometric Purity
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Design is not an ornament to us—it is the DNA. We prioritize
            products that feature sharp, minimalist design languages that stay
            one step ahead of the current trend.
          </p>
        </div>

        <div className="space-y-6">
          <span className="text-4xl font-mono font-bold text-black">03/</span>
          <h3 className="text-xl font-black uppercase tracking-tighter text-black">
            Future Integrity
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Today&apos;s technology should not become tomorrow&apos;s waste. We
            define a standard of durability and performance that does not fade
            with time, ensuring long-term hardware relevance.
          </p>
        </div>
      </div>

      {/* 3. Deep Statement (Dark Section) */}
      <div className="bg-black py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-3xl md:text-5xl font-light leading-snug tracking-tight">
            &quot;Your gear is an extension of your{" "}
            <span className="italic font-serif text-slate-400 font-normal">
              intellect
            </span>
            . It should be as sharp as your mind.&quot;
          </h2>
          <div className="mt-12 w-20 h-px bg-slate-700 mx-auto"></div>
          <p className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            Next Gear / Global Professional Series 2026
          </p>
        </div>
      </div>

      {/* 4. Manifest Image/Grid simulation */}
      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="h-64 bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] text-slate-300 font-mono">
          FORM
        </div>
        <div className="h-64 bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 font-mono uppercase tracking-widest italic">
          FUNCTION
        </div>
        <div className="h-64 bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] text-slate-300 font-mono">
          FLOW
        </div>
        <div className="h-64 bg-black flex items-center justify-center text-[10px] text-slate-500 font-mono">
          FINISH
        </div>
      </div>
    </section>
  );
};

export default PhilosophyPage;
