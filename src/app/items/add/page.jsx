"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast"; // Success মেসেজের জন্য

const AddItemPage = () => {
  const router = useRouter();

  // ধরা যাক, আপনার কাছে ইউজার লগ-ইন এর স্টেট আছে
  const user = true; // এখানে আপনার Firebase User চেক হবে

  useEffect(() => {
    if (!user) {
      router.push("/login"); // লগ-ইন না থাকলে রিডাইরেক্ট
    }
  }, [user, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনার ডাটা অ্যাড করার লজিক (Firebase push)
    toast.success("ASSET_ADDED_TO_NEXT_GEAR_DATABASE");
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12 border-l-4 border-black pl-6">
          <span className="text-[10px] font-black uppercase tracking-[.4em] text-slate-400">
            Inventory Management
          </span>
          <h1 className="text-4xl font-bold tracking-tighter text-black mt-2">
            ADD_NEW_EQUIPMENT
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Product Title
              </label>
              <input
                required
                type="text"
                placeholder="e.g., Studio Sub X1"
                className="border-b-2 border-slate-100 p-3 focus:border-black outline-none transition-colors font-medium"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Price (USD)
              </label>
              <input
                required
                type="number"
                placeholder="599.00"
                className="border-b-2 border-slate-100 p-3 focus:border-black outline-none transition-colors font-mono font-bold"
              />
            </div>
          </div>

          {/* Short Description */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Short Summary
            </label>
            <input
              required
              type="text"
              placeholder="1-2 lines for product card"
              className="border-b-2 border-slate-100 p-3 focus:border-black outline-none transition-colors"
            />
          </div>

          {/* Full Description */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Full Architectural Description
            </label>
            <textarea
              rows="4"
              placeholder="Detailed technical specifications..."
              className="border-2 border-slate-100 p-4 focus:border-black outline-none transition-colors resize-none"
            ></textarea>
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Image Asset URL
            </label>
            <input
              required
              type="url"
              placeholder="https://image-link.com/photo.jpg"
              className="border-b-2 border-slate-100 p-3 focus:border-black outline-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-black text-white py-5 text-[11px] font-black uppercase tracking-[0.4em] mt-8"
          >
            Deploy Item to Store
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddItemPage;
