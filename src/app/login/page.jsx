"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { loginWithEmail, loginWithGoogle } from "@/lib/authOperation";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  const handleLogInWithEmail = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      router.push("/");
    } catch (error) {
      console.error("Email/Password Login Error:", error.message);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex items-center justify-center bg-white px-6 py-20 min-h-[80vh]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[380px]" // max-w-95 এর বদলে স্ট্যান্ডার্ড পিক্সেল দেওয়া হয়েছে
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-black uppercase">
            Welcome Back
          </h2>
          <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400 mt-2">
            Enter your details to sign in
          </p>
        </motion.div>

        {/* Social Login */}
        <motion.div variants={itemVariants} className="space-y-3 mb-8">
          <button
            onClick={() => handleGoogleLogin()}
            className="flex w-full items-center justify-center gap-3 rounded-none border border-gray-100 py-3 text-[11px] font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all duration-300 active:scale-95 shadow-sm"
          >
            <FaGoogle className="text-red-500" /> Continue with Google
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
            Or continue with
          </span>
        </motion.div>

        {/* Login Form */}
        <form onSubmit={handleLogInWithEmail} className="space-y-5">
          <motion.div variants={itemVariants}>
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="w-full rounded-none border border-gray-100 bg-gray-50 px-4 py-3 text-[11px] font-bold tracking-widest text-black focus:border-black focus:bg-white focus:outline-none transition-all placeholder:text-gray-200"
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
              placeholder="••••••••"
              className="w-full rounded-none border border-gray-100 bg-gray-50 px-4 py-3 text-[11px] font-bold tracking-widest text-black focus:border-black focus:bg-white focus:outline-none transition-all"
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
            Sign In
          </motion.button>
        </form>

        {/* Footer */}
        <motion.p
          variants={itemVariants}
          className="mt-10 text-center text-[11px] font-medium uppercase tracking-widest text-gray-400"
        >
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-black text-black hover:underline underline-offset-4"
          >
            Sign up for free
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
