import React from "react";
import Link from "next/link";

const WishlistPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-6xl mb-4">⏳</div>

        <h1 className="text-3xl font-bold text-gray-800">
          Wishlist is Under Development
        </h1>

        <p className="text-gray-500 max-w-md mx-auto">
          We're working hard to bring this feature to you. Very soon you'll be
          able to save your favorite gear here!
        </p>

        <div className="pt-6">
          <Link
            href="/"
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
