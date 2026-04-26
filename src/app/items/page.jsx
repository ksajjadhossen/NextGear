import EmptyState from "@/components/AllItemsPages/EmptyStates/EmptyStates";
import FilterSidebar from "@/components/AllItemsPages/FilterSidebar/FilterSidebar";
import Pagination from "@/components/AllItemsPages/Pagination/Pagination";
import ProductCard from "@/components/AllItemsPages/ProductCard/ProductCard";
import ProductHeader from "@/components/AllItemsPages/ProductHeader/ProductHeader";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Filters */}
        <FilterSidebar />

        {/* Right Side: Product Area */}
        <div className="flex-1">
          <ProductHeader />

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Loop through products here */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default page;
