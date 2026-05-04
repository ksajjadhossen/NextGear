"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddItemPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tagInput, setTagInput] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    category: "Wearables",
    price: "",
    brand: "Next Gear",
    stock: "12",
    rating: 4.5,
    image: "",
    description: "",
    warranty: "2 Years",
    tags: [],
  });

  const addTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      }
      setTagInput("");
    }
  };

  const removeTag = (indexToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, index) => index !== indexToRemove),
    });
  };

  const handleSubmit = async (e) => {
    // async যোগ করা হয়েছে
    e.preventDefault();
    setLoading(true);

    try {
      const newItem = {
        ...formData,
        id: Number(
          Date.now().toString().slice(-6) +
            Math.floor(1000 + Math.random() * 9000),
        ),
        price: parseFloat(formData.price) || 0,
        stock: parseInt(formData.stock) || 0,
        rating: parseFloat(formData.rating) || 4.5,
        releasedDate: new Date().toISOString().split("T")[0],
      };

      console.log("Attempting to push to database:", newItem);

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details || "Failed to sync with database");
      }

      console.log("Database Sync Successful:", result);

      toast.success(`${formData.name.toUpperCase()} DEPLOYED TO CLOUD`, {
        style: {
          borderRadius: "0px",
          background: "#000",
          color: "#fff",
          fontSize: "11px",
          letterSpacing: "0.1em",
        },
      });

      setTimeout(() => {
        setLoading(false);
        router.push("/my-items");
      }, 1000);
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "DATABASE_SYNC_ERROR");
      console.error("Submission Error:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-white min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-black uppercase tracking-tighter italic">
          Create_Entry
        </h1>
        <p className="text-[9px] text-gray-400 tracking-[0.4em] font-bold mt-2">
          LOCAL_STORAGE / CLUSTER-0 / INVENTORY
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Top Section: Media & Primary Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Image Upload Area */}
          <div className="lg:col-span-4 space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Media Asset
            </label>
            <div className="aspect-square w-full bg-zinc-50 border border-zinc-100 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-8">
                  <div className="w-8 h-px bg-zinc-300 mx-auto mb-2"></div>
                  <span className="text-[9px] text-zinc-400 uppercase tracking-tighter">
                    Waiting for URL...
                  </span>
                </div>
              )}
            </div>
            <input
              type="url"
              required
              placeholder="Paste Image URL"
              className="w-full border-b border-zinc-200 py-3 outline-none focus:border-black text-[11px] font-mono"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
          </div>

          {/* Core Info */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Product Identity
              </label>
              <input
                type="text"
                required
                placeholder="Item Name"
                className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm font-bold uppercase"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Price (USD)
              </label>
              <input
                type="number"
                required
                step="0.01"
                placeholder="00.00"
                className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm font-bold"
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Category
              </label>
              <select
                className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm font-bold bg-transparent"
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="Wearables">Wearables</option>
                <option value="Audio">Audio</option>
                <option value="Laptops">Laptops</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Brand Provider
              </label>
              <input
                type="text"
                defaultValue="Next Gear"
                className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm font-bold"
                onChange={(e) =>
                  setFormData({ ...formData, brand: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Metadata & Tags */}
        <div className="space-y-10 pt-10 border-t border-zinc-100">
          {/* Tags Input */}
          <div className="flex flex-col space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Classification Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-black text-white text-[9px] px-3 py-1 uppercase font-bold flex items-center gap-2 group cursor-pointer"
                  onClick={() => removeTag(index)}
                >
                  {tag}{" "}
                  <span className="opacity-50 group-hover:opacity-100">×</span>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={tagInput}
              onKeyDown={addTag}
              placeholder="Type tag and press Enter..."
              className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm"
              onChange={(e) => setTagInput(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Description
              </label>
              <input
                type="text"
                placeholder="Brief summary of product features..."
                className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Stock
                </label>
                <input
                  type="number"
                  defaultValue="12"
                  className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm font-bold"
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Warranty
                </label>
                <input
                  type="text"
                  defaultValue="2 Years"
                  className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm font-bold"
                  onChange={(e) =>
                    setFormData({ ...formData, warranty: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-6 text-[12px] font-black uppercase tracking-[0.6em] transition-all duration-500 ${
            loading
              ? "bg-zinc-100 text-zinc-400"
              : "bg-black text-white hover:bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          }`}
        >
          {loading ? "PROCESSING_CORE..." : "Push to Database"}
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
