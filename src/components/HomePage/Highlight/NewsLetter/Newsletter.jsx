"use client";
import React from "react";

const Newsletter = () => {
  return (
    <section className="py-40 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-black text-white p-12 md:p-24 rounded-none overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 opacity-20 blur-[100px] -mr-32 -mt-32"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="max-w-md text-center lg:text-left">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">
                Join the ecosystem
              </span>
              <h2 className="text-4xl md:text-6xl font-semibold mt-4 tracking-tighter leading-none">
                NEXT GEAR <br />
                <span className="text-slate-500">INSIDER.</span>
              </h2>
              <p className="mt-6 text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Be the first to receive updates on architectural hardware,
                firmware drops, and private collection access.
              </p>
            </div>

            {/* Form Section */}
            <div className="w-full max-w-md">
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full bg-transparent border-b border-slate-700 py-4 text-xs font-bold tracking-widest uppercase focus:border-white focus:outline-none transition-colors placeholder:text-slate-600"
                  />
                  {/* Underline Animation */}
                  <div className="absolute bottom-0 left-0 h-[1px] bg-white w-0 group-focus-within:w-full transition-all duration-500"></div>
                </div>

                <button className="group relative self-center lg:self-start mt-4 px-12 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden">
                  <span className="relative z-10">Subscribe Now</span>
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-slate-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </form>

              <p className="mt-6 text-[9px] text-slate-600 text-center lg:text-left tracking-widest uppercase">
                By subscribing, you agree to our{" "}
                <span className="underline cursor-pointer hover:text-white">
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>

          {/* Minimal Corner Detail */}
          <div className="absolute bottom-4 right-6 hidden md:block">
            <span className="text-[8px] text-slate-800 font-mono tracking-tighter">
              ©2026_NG_INTL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
