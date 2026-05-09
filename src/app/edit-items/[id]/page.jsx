"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "@/lib/firebase";

const EditItemPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [tagInput, setTagInput] = useState("");
  const [userEmail, setUserEmail] = useState(null);
  const auth = getAuth(app);

  const [formData, setFormData] = useState({
    name: "",
    category: "Wearables",
    price: "",
    brand: "Next Gear",
    stock: "",
    rating: 4.5,
    image: "",
    description: "",
    warranty: "2 Years",
    tags: [],
    status: "Active",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
        toast.error("ACCESS_DENIED: Please login.");
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  useEffect(() => {
    const fetchItemDetails = async () => {
      if (!id) return;

      try {
        setFetching(true);
        // আপনার API রাউট অনুযায়ী fetch কল (যেমন: /api/products/[id])
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();

        if (response.ok && data) {
          // ডাটা পাওয়া গেলে সরাসরি formData-তে সেট করে দেওয়া হচ্ছে
          // এতে করে ইনপুট ফিল্ডগুলোতে মানগুলো অটোমেটিক বসে যাবে (Prefilled)
          setFormData({
            ...data,
            // ডাটাবেসে tags না থাকলে খালি অ্যারে সেট হবে
            tags: Array.isArray(data.tags) ? data.tags : [],
          });
        } else {
          toast.error("FAILED_TO_RETRIEVE_ASSET");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        toast.error("NETWORK_ERROR: Asset sync failed");
      } finally {
        setFetching(false);
      }
    };

    fetchItemDetails();
  }, [id]);

  // ট্যাগ ম্যানেজমেন্ট
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

  // ডাটা আপডেট/সাবমিট লজিক
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail) return;

    setLoading(true);
    try {
      const updatedItem = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        updatedAt: new Date().toISOString(),
      };

      const response = await fetch(`/api/products/${id}`, {
        method: "PATCH", // আংশিক আপডেটের জন্য PATCH ব্যবহার করা ভালো
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) throw new Error("Update operation failed");

      toast.success("SYSTEM_RECALIBRATED: ENTRY UPDATED");
      router.push("/my-items");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ডাটা লোড হওয়ার সময় দেখাবে
  if (fetching)
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-[10px] tracking-[0.5em] uppercase text-zinc-500">
        Syncing_Asset_Data...
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-white min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-black uppercase tracking-tighter italic">
          Edit_Entry
        </h1>
        <p className="text-[9px] text-gray-400 tracking-[0.4em] font-bold mt-2">
          INVENTORY / ASSET_ID: {id}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ইমেজ সেকশন */}
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
                <span className="text-[9px] text-zinc-400">No Image Asset</span>
              )}
            </div>
            <input
              type="url"
              required
              value={formData.image}
              placeholder="Image URL"
              className="w-full border-b border-zinc-200 py-3 outline-none focus:border-black text-[11px] font-mono"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
          </div>

          {/* প্রধান তথ্য */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Product Identity
              </label>
              <input
                type="text"
                required
                value={formData.name}
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
                value={formData.price}
                className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm font-bold"
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>
            {/* ক্যাটাগরি এবং স্ট্যাটাস সিলেক্ট */}
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Category
              </label>
              <select
                value={formData.category}
                className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm font-bold bg-transparent"
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="Wearables">Wearables</option>
                <option value="Audio">Audio</option>
                <option value="Accessories">Accessories</option>
                <option value="Laptops">Laptops</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Status
              </label>
              <select
                value={formData.status}
                className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm font-bold bg-transparent"
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* ট্যাগ এবং অন্যান্য তথ্য */}
        <div className="space-y-10 pt-10 border-t border-zinc-100">
          <div className="flex flex-col space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Classification Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags?.map((tag, index) => (
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
              placeholder="Add more tags..."
              className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm"
              onChange={(e) => setTagInput(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Description
              </label>
              <textarea
                value={formData.description}
                className="border-b border-zinc-200 py-3 outline-none focus:border-black text-sm min-h-[40px]"
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
                  value={formData.stock}
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
                  value={formData.warranty}
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
              ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-zinc-900 shadow-xl"
          }`}
        >
          {loading ? "SYNCING_CHANGES..." : "Update Asset"}
        </button>
      </form>
    </div>
  );
};

export default EditItemPage;
