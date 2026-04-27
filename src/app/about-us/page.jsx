"use client";
import AboutPage from "@/components/AboutPage/AboutPage";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen bg-white"
    >
      <AboutPage />
    </motion.div>
  );
};

export default page;
