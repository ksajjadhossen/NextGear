"use client";
import { motion } from "framer-motion";
import FeaturedProductGrid from "@/components/HomePage/FeaturedProductGrid/FeatureProductGrid";
import Hero from "@/components/HomePage/HeroSection/HeroSection";
import Highlights from "@/components/HomePage/Highlight/Highlight";
import Newsletter from "@/components/HomePage/Highlight/NewsLetter/Newsletter";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.section>

      <motion.section {...fadeInUp}>
        <FeaturedProductGrid />
      </motion.section>

      <motion.section {...fadeInUp} transition={{ duration: 0.8, delay: 0.2 }}>
        <Highlights />
      </motion.section>

      <motion.section {...fadeInUp}>
        <Newsletter />
      </motion.section>
    </main>
  );
}
