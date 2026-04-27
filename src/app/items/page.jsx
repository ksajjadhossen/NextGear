"use client";
import React, { useState, useEffect, useMemo } from "react";
import EmptyState from "@/components/AllItemsPages/EmptyStates/EmptyStates";
import FilterSidebar from "@/components/AllItemsPages/FilterSidebar/FilterSidebar";
import Pagination from "@/components/AllItemsPages/Pagination/Pagination";
import ProductCard from "@/components/AllItemsPages/ProductCard/ProductCard";
import ProductHeader from "@/components/AllItemsPages/ProductHeader/ProductHeader";

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
    fetch("/product.json")
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
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          onReset={handleReset}
        />

        <div className="flex-1">
          <ProductHeader
            productCount={filteredAndSortedProducts.length}
            onSortChange={setSortType}
          />

          {filteredAndSortedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredAndSortedProducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>

              <div className="mt-20">
                <Pagination items={filteredAndSortedProducts} />
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
