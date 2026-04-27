"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginWithGoogle, registerWithEmail } from "@/lib/authOperation";
import { motion } from "framer-motion";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const handleEmailRegistration = async (e) => {
    e.preventDefault();
    try {
      await registerWithEmail(fullName, email, password);
      router.push("/login");
      console.log("successfully created account");
    } catch (error) {
      console.error("Email registration failed:", error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex items-center justify-center bg-white px-6 py-20 min-h-[85vh]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[400px]"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-black uppercase">
            Create Account
          </h2>
          <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400 mt-2">
            Join us to get the best gear
          </p>
        </motion.div>

        {/* Google Signup */}
        <motion.div variants={itemVariants} className="space-y-3 mb-8">
          <button
            onClick={() => handleGoogleLogin()}
            className="flex w-full items-center justify-center gap-3 rounded-none border border-gray-100 py-3 text-[11px] font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all duration-300 active:scale-95 shadow-sm"
          >
            <FaGoogle className="text-red-500" /> Sign up with Google
          </button>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8 text-center"
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <span className="relative bg-white px-3 text-[9px] uppercase text-gray-300 font-black tracking-widest">
            Or create email account
          </span>
        </motion.div>

        {/* Registration Form */}
        <form onSubmit={handleEmailRegistration} className="space-y-5">
          <motion.div variants={itemVariants}>
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-none border border-gray-100 bg-gray-50 px-4 py-3 text-[11px] font-bold tracking-widest text-black focus:border-black focus:bg-white focus:outline-none transition-all placeholder:text-gray-200"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-none border border-gray-100 bg-gray-50 px-4 py-3 text-[11px] font-bold tracking-widest text-black focus:border-black focus:bg-white focus:outline-none transition-all placeholder:text-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 mb-2 block">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter a strong password"
              className="w-full rounded-none border border-gray-100 bg-gray-50 px-4 py-3 text-[11px] font-bold tracking-widest text-black focus:border-black focus:bg-white focus:outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-none bg-black py-4 text-[11px] font-black uppercase tracking-[0.3em] text-white hover:bg-gray-900 transition-all shadow-lg mt-6"
          >
            Create Account
          </motion.button>
        </form>

        {/* Footer */}
        <motion.p
          variants={itemVariants}
          className="mt-10 text-center text-[11px] font-medium uppercase tracking-widest text-gray-400"
        >
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-black text-black hover:underline underline-offset-4"
          >
            Log in to your account
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;
