import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa"; // npm install react-icons

const AuthForm = ({ type }) => {
  const isLogin = type === "login";

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-white px-6">
      <div className="w-full max-w-100">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {isLogin
              ? "Enter your details to sign in"
              : "Join us to get the best gear"}
          </p>
        </div>

        {/* Social Auth Buttons */}
        <div className="space-y-3 mb-8">
          <button className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 py-2.5 text-sm font-medium text-black hover:bg-gray-50 transition-all active:scale-95">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 py-2.5 text-sm font-medium text-black hover:bg-gray-50 transition-all active:scale-95">
            <FaFacebookF className="text-blue-600" />
            Continue with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-400 font-medium">
              Or continue with
            </span>
          </div>
        </div>

        {/* Email Form */}
        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="text-[12px] font-medium text-gray-400 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-black focus:border-black focus:bg-white focus:outline-none transition-all"
              />
            </div>
          )}
          <div>
            <label className="text-[12px] font-medium text-gray-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-black focus:border-black focus:bg-white focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="text-[12px] font-medium text-gray-400 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-black focus:border-black focus:bg-white focus:outline-none transition-all"
            />
          </div>

          <button className="w-full rounded-full bg-black py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-all active:scale-95 mt-6">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-8 text-center text-sm text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button className="font-semibold text-black hover:underline underline-offset-4">
            {isLogin ? "Sign up for free" : "Log in to your account"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
