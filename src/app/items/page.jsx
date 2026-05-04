"use client";
import React, { useState, useEffect, useMemo } from "react";
import EmptyState from "@/components/AllItemsPages/EmptyStates/EmptyStates";
import FilterSidebar from "@/components/AllItemsPages/FilterSidebar/FilterSidebar";
import Pagination from "@/components/AllItemsPages/Pagination/Pagination";
import ProductCard from "@/components/AllItemsPages/ProductCard/ProductCard";
import ProductHeader from "@/components/AllItemsPages/ProductHeader/ProductHeader";
import { motion } from "framer-motion";

const Page = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    category: "All Products",
    maxPrice: 5000,
    inStock: false,
  });
  const [sortType, setSortType] = useState("SORT / NEWEST ARRIVALS");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = allProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesCategory =
        filters.category === "All Products" ||
        product.category === filters.category;
      const matchesPrice = product.price <= filters.maxPrice;
      const matchesStock = filters.inStock ? product.stock > 0 : true;

      return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });

    if (sortType === "PRICE / ASCENDING") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortType === "PRICE / DESCENDING") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortType === "RATING / HIGHEST") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortType === "SORT / NEWEST ARRIVALS") {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [allProducts, filters, sortType]);

  const handleReset = () => {
    setFilters({
      search: "",
      category: "All Products",
      maxPrice: 5000,
      inStock: false,
    });
    setSortType("SORT / NEWEST ARRIVALS");
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

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
    <div className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-fit"
        >
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            onReset={handleReset}
          />
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex-1"
        >
          <ProductHeader
            productCount={filteredAndSortedProducts.length}
            onSortChange={setSortType}
          />

          {filteredAndSortedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredAndSortedProducts.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={item} />
                  </motion.div>
                ))}
              </div>

              <div className="mt-20">
                <Pagination items={filteredAndSortedProducts} />
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
