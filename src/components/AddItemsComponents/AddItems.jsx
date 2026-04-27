"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"; // ১. ইমপোর্ট করুন

const AddItemPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Gadget",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    description: "",
    status: "Active",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const existingItems =
        JSON.parse(localStorage.getItem("myInventory")) || [];

      const newItem = {
        ...formData,
        id: Date.now(),
        price: parseFloat(formData.price),
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      const updatedItems = [newItem, ...existingItems];
      localStorage.setItem("myInventory", JSON.stringify(updatedItems));

      // ২. সাকসেস টোস্ট মেসেজ
      toast.success(`${formData.name} added to inventory!`, {
        style: {
          borderRadius: "0px",
          background: "#000",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          letterSpacing: "1px",
          textTransform: "uppercase",
        },
      });

      setTimeout(() => {
        setLoading(false);
        router.push("/my-items");
      }, 1200);
    } catch (error) {
      console.error("Error saving data:", error);
      setLoading(false);
      // ৩. এরর টোস্ট মেসেজ
      toast.error("Failed to add item. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-white min-h-screen">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-black">
          List New Gear
        </h1>
        <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest font-bold">
          Next Gear / Inventory Management
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 border-t border-black pt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Product Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. MacBook Pro M3"
              className="border-b border-gray-200 py-3 outline-none focus:border-black transition-all text-sm font-medium"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Price ($)
            </label>
            <input
              type="number"
              required
              placeholder="0.00"
              className="border-b border-gray-200 py-3 outline-none focus:border-black transition-all text-sm font-medium"
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Category
            </label>
            <select
              className="border-b border-gray-200 py-3 outline-none focus:border-black transition-all text-sm font-medium bg-transparent"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="Gadget">Gadget</option>
              <option value="Audio">Audio</option>
              <option value="Mobile">Mobile</option>
              <option value="Laptop">Laptop</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Brief Description
            </label>
            <input
              type="text"
              placeholder="Short detail about condition..."
              className="border-b border-gray-200 py-3 outline-none focus:border-black transition-all text-sm font-medium"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
        </div>

        <div className="pt-10">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-xl ${
              loading
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-zinc-800"
            }`}
          >
            {loading ? "Processing_Entry..." : "Confirm & List Item"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemPage;
