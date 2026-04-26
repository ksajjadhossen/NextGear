import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Link from "next/link"; // লিঙ্ক ডাইভার্ট করার জন্য

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-white px-6 py-20">
      <div className="w-full max-w-95">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Enter your details to sign in
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <button className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 py-2.5 text-sm font-medium text-black hover:bg-gray-50 transition-all active:scale-95">
            <FaGoogle className="text-red-500" /> Continue with Google
          </button>
        </div>

        <div className="relative mb-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <span className="relative bg-white px-2 text-xs uppercase text-gray-400 font-medium">
            Or continue with
          </span>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-[12px] font-medium text-gray-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-black focus:border-black focus:bg-white focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="text-[12px] font-medium text-gray-400 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-black focus:border-black focus:bg-white focus:outline-none transition-all"
            />
          </div>
          <button className="w-full rounded-full bg-black py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-all active:scale-95 mt-6">
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-black hover:underline underline-offset-4"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
