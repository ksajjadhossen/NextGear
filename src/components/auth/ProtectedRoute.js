"use client";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); // loading স্টেট থাকলে ভালো হয়
  const router = useRouter();

  useEffect(() => {
    // যদি লোডিং শেষ হয় এবং ইউজার না থাকে, তবে লগইনে পাঠিয়ে দাও
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // যখন চেক চলছে তখন একটা লোডার দেখানো ভালো, নাহলে ডাটা ফ্ল্যাশ হতে পারে
  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );

  // ইউজার থাকলে চিলড্রেন (পেজ) রেন্ডার করো
  return user ? children : null;
};

export default ProtectedRoute;
