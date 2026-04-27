"use client";
import React from "react";
import { motion } from "framer-motion";
const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 border-l-4 border-black pl-8"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            Establishment / Next Gear
          </span>
          <h1 className="text-6xl md:text-8xl font-semibold mt-4 tracking-tighter text-black leading-[0.9]">
            REIMAGINING <br />
            <span className="text-slate-300 font-light">TECH RETAIL.</span>
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Brand Philosophy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-4xl text-black leading-tight tracking-tight font-medium"
            >
              We curate the{" "}
              <span className="text-slate-400">digital tools</span> that
              redefine how you interface with the modern world.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base text-slate-500 leading-relaxed font-light max-w-lg"
            >
              Founded on the principles of minimalism and peak engineering, Next
              Gear bridges the gap between hardware complexity and seamless user
              utility. Every product in our catalog undergoes rigorous
              architectural assessment.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100"
            >
              <div className="group">
                <h4 className="text-5xl font-mono font-bold text-black group-hover:translate-x-2 transition-transform">
                  100%
                </h4>
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.3em] mt-3 font-black">
                  Authentic Series
                </p>
              </div>
              <div className="group">
                <h4 className="text-5xl font-mono font-bold text-black group-hover:translate-x-2 transition-transform">
                  24/7
                </h4>
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.3em] mt-3 font-black">
                  Global Support
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-px bg-slate-100 border border-slate-100"
          >
            <div className="p-12 bg-white hover:bg-slate-50 transition-colors">
              <span className="text-[10px] font-mono text-slate-300 mb-4 block underline">
                01 // CURATION
              </span>
              <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-tight">
                Architectural Excellence
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                We handpick every item, ensuring access to the most innovative
                and durable industrial-grade gear on the market.
              </p>
            </div>

            <div className="p-12 bg-white hover:bg-slate-50 transition-colors">
              <span className="text-[10px] font-mono text-slate-300 mb-4 block underline">
                02 // COMMITMENT
              </span>
              <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-tight">
                Professional Integrity
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                From pre-purchase technical advice to deep after-sales support,
                our team ensures a premium shopping journey for engineers and
                creators.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-32 relative bg-black p-16 md:p-24 rounded-none text-left overflow-hidden"
        >
          {/* Background Decorative Ref Number */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 0.1, rotate: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-10 right-10 text-[100px] font-mono font-black text-white select-none leading-none"
          >
            2026
          </motion.div>

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-4xl md:text-5xl font-semibold mb-8 text-white tracking-tighter">
              READY TO UPGRADE <br /> YOUR WORKFLOW?
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-none hover:bg-slate-200 transition-all"
            >
              Explore Collection
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
