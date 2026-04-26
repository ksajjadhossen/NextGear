import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-9xl font-extrabold text-black tracking-widest">
        404
      </h1>

      <div className="bg-red-500 text-white px-2 text-sm rounded rotate-12 absolute mb-20">
        Page Not Found
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Oops! You've drifted into deep space.
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved to
          another gear.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-black transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block border border-current bg-black px-8 py-3 transition-colors hover:bg-gray-800">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
