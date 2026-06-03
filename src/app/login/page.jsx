"use client";
import React, { useState } from "react";
import { FaGoogle, FaCircleNotch } from "react-icons/fa";
import Link from "next/link";
import { loginWithEmail, loginWithGoogle } from "@/lib/authOperation";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDemoLogin = (role) => {
    if (isLoading) return;
    setIsLoading(true);

    if (role === "admin") {
      setEmail("admin@nextgear.com");
      setPassword("admin123#@#$");
    } else {
      setEmail("customer@nextgear.com");
      setPassword("user123!@#$");
    }

    toast.success(`${role.toUpperCase()}_DEMO: AUTOFILLED`);
    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await loginWithGoogle();
      toast.success("ACCESS GRANTED");
      router.push("/");
    } catch (error) {
      console.error("Google Login Error:", error.message);
      toast.error("AUTH_FAILED: CONNECTION REJECTED");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogInWithEmail = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      await loginWithEmail(email, password);
      toast.success("LOGIN_SUCCESSFUL");
      router.push("/");
    } catch (error) {
      console.error("Email/Password Login Error:", error.message);
      toast.error("INVALID_CREDENTIALS");
    } finally {
      setIsLoading(false);
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
        className="w-full max-w-95"
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

        <motion.div
          variants={itemVariants}
          className="space-y-4 mb-8 border border-gray-100 p-6"
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-center mb-4">
            Quick Demo Access
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => handleDemoLogin("customer")}
              className="flex-1 rounded-none border border-blue-100 bg-blue-50 py-3 text-[10px] font-black uppercase tracking-widest text-blue-800 transition-all hover:bg-blue-100"
            >
              Customer Demo
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin("admin")}
              className="flex-1 rounded-none border border-purple-100 bg-purple-50 py-3 text-[10px] font-black uppercase tracking-widest text-purple-800 transition-all hover:bg-purple-100"
            >
              Admin Demo
            </button>
          </div>
        </motion.div>

        {/* Social Login */}
        <motion.div variants={itemVariants} className="space-y-3 mb-8">
          <button
            type="button"
            disabled={isLoading}
            onClick={handleGoogleLogin}
            className={`flex w-full items-center justify-center gap-3 rounded-none border border-gray-100 py-3 text-[11px] font-bold uppercase tracking-widest text-black transition-all duration-300 shadow-sm
              ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white active:scale-95"}`}
          >
            <FaGoogle className="text-red-500" />
            {isLoading ? "Syncing..." : "Continue with Google"}
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
            Or continue with email/pw
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
              value={email}
              disabled={isLoading}
              placeholder="YOUR@EMAIL.COM"
              className="w-full rounded-none border border-gray-100 bg-gray-50 px-4 py-3 text-[11px] font-bold tracking-widest text-black focus:border-black focus:bg-white focus:outline-none transition-all placeholder:text-gray-200 disabled:opacity-70"
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
              value={password}
              disabled={isLoading}
              placeholder="••••••••"
              className="w-full rounded-none border border-gray-100 bg-gray-50 px-4 py-3 text-[11px] font-bold tracking-widest text-black focus:border-black focus:bg-white focus:outline-none transition-all disabled:opacity-70"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={!isLoading ? { scale: 1.01 } : {}}
            whileTap={!isLoading ? { scale: 0.98 } : {}}
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-none bg-black py-4 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all shadow-lg mt-6 flex items-center justify-center gap-2
              ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-900"}`}
          >
            {isLoading ? (
              <>
                <FaCircleNotch className="animate-spin" /> Authorization...
              </>
            ) : (
              "Sign In"
            )}
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
