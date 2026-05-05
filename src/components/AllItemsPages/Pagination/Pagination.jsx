"use client";
import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          Viewing {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
          {totalItems} Products
        </p>
        <div className="w-48 h-px bg-slate-100 relative">
          <div
            className="absolute left-0 top-0 h-full bg-black transition-all duration-700 ease-in-out"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="text-[10px] font-bold uppercase tracking-widest disabled:opacity-20 hover:text-black transition-colors py-2"
        >
          Prev
        </button>

        <div className="flex gap-3">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-9 h-9 flex items-center justify-center text-[10px] font-bold border transition-all duration-300
                ${
                  currentPage === page
                    ? "bg-black text-white border-black shadow-lg"
                    : "bg-white text-slate-400 border-slate-100 hover:border-black hover:text-black"
                }`}
            >
              {String(page).padStart(2, "0")}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="text-[10px] font-bold uppercase tracking-widest disabled:opacity-20 hover:text-black transition-colors py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
