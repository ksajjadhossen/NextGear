"use client";
import EmptyState from "@/components/AllItemsPages/EmptyStates/EmptyStates";
import FilterSidebar from "@/components/AllItemsPages/FilterSidebar/FilterSidebar";
import Pagination from "@/components/AllItemsPages/Pagination/Pagination";
import ProductCard from "@/components/AllItemsPages/ProductCard/ProductCard";
import ProductHeader from "@/components/AllItemsPages/ProductHeader/ProductHeader";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
          Accessing_Catalog...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Filters */}
        <FilterSidebar />

        {/* Right Side: Product Area */}
        <div className="flex-1">
          {/*Header section provides count and sort options */}
          <ProductHeader productCount={products.length} />

          {/* Product Grid / Empty State logic */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}

          <Pagination items={products} />
        </div>
      </div>
    </div>
  );
};

export default Page;
