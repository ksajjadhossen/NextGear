"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "@/lib/firebase";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchWishlistData(currentUser.email);
      } else {
        router.push("/login");
      }
    });

    const fetchWishlistData = async (email) => {
      try {
        setLoading(true);

        const [wishlistRes, productsRes] = await Promise.all([
          fetch(`/api/wishlist?email=${email}`),
          fetch("/api/products"),
        ]);

        const wishlistData = await wishlistRes.json();
        const allProducts = await productsRes.json();

        const populatedWishlist = wishlistData.map((wishItem) => {
          const productDetails = allProducts.find(
            (p) => p.id === wishItem.productId || p._id === wishItem.productId,
          );
          return productDetails ? { ...wishItem, ...productDetails } : wishItem;
        });

        setWishlistItems(populatedWishlist);
      } catch (err) {
        console.error("Wishlist loading error:", err.message);
      } finally {
        setLoading(false);
      }
    };

    return () => unsubscribe();
  }, [auth, router]);

  const handleRemove = async (productId) => {
    if (!user) return;

    const updatedList = wishlistItems.filter(
      (item) => item.id !== productId && item.productId !== productId,
    );
    setWishlistItems(updatedList);

    try {
      await fetch(`/api/wishlist`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: user.email, productId }),
      });
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-t-transparent border-black rounded-full animate-spin"></div>
          <p className="text-black uppercase tracking-[0.4em] text-[10px] font-bold">
            Finding your wishlist...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen p-8 font-sans text-black">
      {/* Header Section */}
      <header className="mb-12 border-b border-gray-100 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-5xl font-bold tracking-tighter uppercase text-black">
            Wishlist{" "}
            <span className="text-gray-200">[{wishlistItems.length}]</span>
          </h1>
          <p className="text-gray-400 mt-2 text-[10px] uppercase tracking-[0.3em] font-medium">
            Curated selection for {user?.displayName || "Member"}
          </p>
        </div>
      </header>

      {/* Wishlist Content */}
      {wishlistItems.length === 0 ? (
        <div className="h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <div className="mb-6 opacity-20">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h2 className="text-xl font-light uppercase tracking-widest text-black mb-2">
            Your archive is empty
          </h2>
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-8 max-w-xs leading-relaxed">
            Begin your journey by adding pieces to your private collection.
          </p>
          <button
            onClick={() => router.push("/shop")}
            className="group relative overflow-hidden bg-black text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all"
          >
            <span className="relative z-10">Discover Collection</span>
            <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      ) : (
        /* Wishlist Grid */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0 border-t border-l border-gray-200">
          {wishlistItems.map((item) => (
            <div
              key={item._id}
              className="border-r border-b border-gray-200 p-5 group relative hover:bg-[#FDFDFD] transition-all duration-300 flex flex-col"
            >
              {/* Remove Button */}
              <button
                onClick={() => handleRemove(item.id || item.productId)}
                className="absolute top-4 right-4 z-20 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-out hover:bg-red-600 shadow-xl"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Product Image */}
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-[#F9F9F9]">
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/600x800?text=No+Image"
                  }
                  alt={item.productName || item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-[1.02] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Details */}
              <div className="space-y-1 flex-1">
                <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                  {item.category}
                </p>
                <h3 className="text-[11px] font-bold text-black uppercase leading-tight tracking-tight min-h-[30px] line-clamp-2">
                  {item.name || item.productName}
                </h3>
                <p className="text-sm font-mono font-medium text-black mt-2">
                  {item.price ? `$${item.price.toLocaleString()}` : "Price N/A"}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-1">
                <button className="flex-1 bg-black text-white py-3 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95">
                  Acquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
