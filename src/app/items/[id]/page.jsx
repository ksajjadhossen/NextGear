"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation"; // useRouter যোগ করা হয়েছে
import Link from "next/link";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "@/components/AllItemsPages/ProductCard/ProductCard"; // Related items এর জন্য
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "@/lib/firebase";

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserEmail(user.email);
      } else {
        setCurrentUserEmail(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);

        if (found) {
          const related = data
            .filter((p) => p.category === found.category && p.id !== found.id)
            .slice(0, 3);
          setRelatedProducts(related);
        }
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-[10px] tracking-widest animate-pulse">
        ACCESSING_ASSET_DATABASE...
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-[10px] tracking-widest text-red-500">
        ERROR_404: ASSET_NOT_FOUND
      </div>
    );
  const handleAddToWishlist = async (productData) => {
    if (!currentUserEmail) {
      alert("Please login first!");
      return;
    }

    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: currentUserEmail, // ডায়নামিক ইমেইল
          productId: productData.id, // আপনার JSON অনুযায়ী 'id'
          productName: productData.name,
          category: productData.category,
          price: productData.price,
          image: productData.image,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Added to wishlist!");
      } else {
        alert(data.message || "Error adding item");
      }
    } catch (error) {
      console.error("Wishlist Error:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 bg-white">
      {/* ১. Back Button Section */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-black transition-colors mb-12 group"
      >
        <FiArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
        Back to Collection
      </button>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left: Product Image Section */}
        <div className="space-y-6">
          <div className="aspect-[4/5] bg-[#F9F9F9] relative overflow-hidden group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-12 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-slate-50 border border-slate-100 hover:border-black cursor-crosshair transition-colors"
              ></div>
            ))}
          </div>
        </div>

        {/* Right: Product Info & Specs */}
        <div className="space-y-12">
          <div className="border-b border-slate-100 pb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                {product.brand}
              </span>
              <FiChevronRight className="text-slate-300 text-xs" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
                {product.category}
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter text-black leading-none uppercase">
              {product.name}
            </h1>
            <p className="text-3xl font-mono font-bold text-black mt-8">
              ${product.price.toLocaleString()}.00
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid gap-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                Full Description
              </span>
              <p className="text-slate-600 leading-relaxed font-light text-lg">
                {product.description}
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 border-t border-slate-50 pt-10">
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Warranty
                </span>
                <p className="text-[13px] font-bold text-black mt-1 uppercase">
                  {product.warranty || "2 Years Official"}
                </p>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Release
                </span>
                <p className="text-[13px] font-bold text-black mt-1 font-mono">
                  {product.releaseDate || "Q2 2026"}
                </p>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Stock
                </span>
                <p className="text-[13px] font-bold text-black mt-1">
                  {product.stock} Units Available
                </p>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Rating
                </span>
                <p className="text-[13px] font-bold text-black mt-1">
                  ★ {product.rating} / 5.0
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-10">
            <button className="flex-1 bg-black text-white px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-slate-800 transition-all active:scale-[0.98]">
              Acquire Now
            </button>
            <button
              onClick={() => handleAddToWishlist(product)}
              className="flex-1 bg-white text-black border border-slate-200 px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:border-black transition-all active:scale-[0.98]"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* ২. Related Items Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-32 pt-20 border-t border-slate-100">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                Next Gen
              </span>
              <h2 className="text-3xl font-bold tracking-tighter text-black mt-2">
                RELATED_EQUIPMENT
              </h2>
            </div>
            <Link
              href="/all-items"
              className="text-[10px] font-black uppercase underline tracking-widest hover:text-slate-400 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
