"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaTrashAlt, FaPlus, FaSearch } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "@/lib/firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserItems(user.email);
      } else {
        setItems([]);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchUserItems = async (email) => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      const myData = data.filter((item) => item.sellerEmail === email);
      setItems(myData);
    } catch (error) {
      console.error("Error fetching items:", error);
      toast.error("FAILED_TO_LOAD_INVENTORY");
    } finally {
      setLoading(false);
    }
  };

  const handleEditItem = (item) => {
    if (!item?._id) {
      console.error("Item ID is missing!");
      return;
    }
    router.push(`/edit-items/${item._id}`);
  };

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this asset?");
    if (confirmed) {
      const toastId = toast.loading("Deleting asset...");
      try {
        const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
        if (res.ok) {
          setItems(items.filter((item) => item._id !== id));
          toast.success("ASSET_REMOVED_SUCCESSFULLY", { id: toastId });
        } else {
          toast.error("Failed to delete from server", { id: toastId });
        }
      } catch (error) {
        toast.error("DELETE_FAILED", { id: toastId });
      }
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalEarned = items.reduce(
    (acc, curr) => acc + (Number(curr.price) || 0),
    0,
  );

  if (loading)
    return <div className="p-20 text-center font-mono">LOADING_ASSETS...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-12 bg-white min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tighter text-black uppercase">
            My Inventory
          </h1>
          <p className="text-[13px] text-gray-500 mt-1">
            Manage your listed gadgets and sales performance.
          </p>
        </div>
        <Link
          href="/items/add"
          className="bg-black text-white px-6 py-2.5 rounded-sm text-[12px] font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-all"
        >
          <FaPlus size={10} /> ADD NEW ITEM
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total Items", value: items.length },
          {
            label: "Active Ads",
            value: items.filter((i) => i.status !== "inactive").length,
          },
          { label: "Items Sold", value: "00" },
          { label: "Total Value", value: `$${totalEarned.toLocaleString()}` },
        ].map((stat, i) => (
          <div key={i} className="border border-gray-100 p-5 rounded-sm">
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">
              {stat.label}
            </p>
            <p className="text-xl font-bold text-black mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex items-center border-b border-gray-100 pb-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-xs" />
          <input
            type="text"
            placeholder="Search your items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-[13px] focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 border border-gray-100 rounded-sm hover:border-black transition-all group bg-white"
            >
              <div className="col-span-5 flex items-center gap-4">
                <div className="w-14 h-14 relative bg-gray-50 border border-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder-gadget.png"}
                    alt={item.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-black tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 uppercase tracking-tighter">
                    Listed on{" "}
                    {item.releasedDate ||
                      new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="col-span-2 text-center text-[14px] font-medium text-black">
                ${item.price}
              </div>

              <div className="col-span-3 flex justify-center">
                <select
                  value={item.status || "active"}
                  onChange={(e) => handleUpdateStatus(item._id, e.target.value)}
                  className={`text-[9px] font-bold px-2 py-1 uppercase tracking-tighter rounded-none border cursor-pointer outline-none transition-all
              ${
                item.status === "inactive"
                  ? "border-red-200 text-red-600 bg-red-50 hover:bg-red-100"
                  : "border-green-200 text-green-600 bg-green-50 hover:bg-green-100"
              }`}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div className="col-span-2 flex justify-end gap-3">
                <button
                  onClick={() => handleEditItem(item)} // Edit Functionality
                  title="Edit Details"
                  className="p-2 text-gray-400 hover:text-black hover:bg-gray-50 rounded-full transition-all"
                >
                  <FaEdit size={14} />
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  title="Delete Item"
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                >
                  <FaTrashAlt size={14} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-gray-400 italic text-sm">
            No items found in your inventory.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyItems;
