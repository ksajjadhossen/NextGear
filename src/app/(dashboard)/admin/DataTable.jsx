"use client";
import { useState } from "react";
import { Edit2, Trash2, Eye, Search } from "lucide-react";

export const DataTable = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ১. Filtering লজিক
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // ২. Pagination লজিক
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filteredItems.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="bg-white border border-gray-100 mt-12 overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.05)]">
      {/* Table Header Section */}
      <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none">
            Inventory <span className="text-gray-200">Control</span>
          </h2>
          <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mt-2 font-mono">
            Database_Manage // Global_Stock_Nodes
          </p>
        </div>

        {/* Search Bar - Doctrine Style */}
        <div className="relative w-full md:w-72">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
            size={14}
          />
          <input
            type="text"
            placeholder="QUERY_DATABASE // KEYWORD"
            className="w-full bg-gray-50 border-b-2 border-transparent focus:border-black py-2 pl-10 pr-4 text-[10px] font-bold uppercase tracking-widest outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 italic">
                Entry_Name
              </th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 italic">
                Tag // Classification
              </th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 italic">
                Valuation // USD
              </th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 italic text-center">
                System_Commands
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {currentItems.map((item) => (
              <tr
                key={item._id}
                className="group hover:bg-black transition-all duration-300"
              >
                <td className="px-8 py-6 font-black italic uppercase text-lg tracking-tighter group-hover:text-white">
                  {item.name}
                </td>
                <td className="px-8 py-6">
                  <span className="text-[10px] font-mono font-bold py-1 px-2 bg-gray-100 group-hover:bg-gray-800 group-hover:text-gray-300 uppercase tracking-widest">
                    {item.category}
                  </span>
                </td>
                <td className="px-8 py-6 font-mono font-bold text-sm group-hover:text-white">
                  ${item.price.toLocaleString()}
                </td>
                <td className="px-8 py-6">
                  <div className="flex justify-center gap-4">
                    <button className="text-gray-300 hover:text-white transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="text-gray-300 hover:text-white transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button className="text-gray-300 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - Minimalist Doctrine */}
      <div className="p-6 flex justify-between items-center bg-white border-t border-gray-50">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="text-[10px] font-black italic uppercase tracking-[0.2em] disabled:opacity-20 hover:underline"
        >
          [ PREV_NODE ]
        </button>

        <div className="flex items-center gap-4">
          <div className="h-[1px] w-8 bg-gray-200"></div>
          <span className="text-[10px] font-mono font-bold text-gray-400 uppercase">
            Page_{currentPage}_of_{totalPages}
          </span>
          <div className="h-[1px] w-8 bg-gray-200"></div>
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="text-[10px] font-black italic uppercase tracking-[0.2em] disabled:opacity-20 hover:underline"
        >
          [ NEXT_NODE ]
        </button>
      </div>
    </div>
  );
};
