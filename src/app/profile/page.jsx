"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/authContext";
import Cookies from "js-cookie";
import Image from "next/image";
import {
  FaUserShield,
  FaUserCircle,
  FaEnvelope,
  FaFingerprint,
  FaIdBadge,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [role, setRole] = useState("Loading...");

  useEffect(() => {
    const userRole = Cookies.get("userRole");
    setRole(userRole || "user");
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center bg-white text-black">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mb-4"></div>
        <p className="text-xs uppercase tracking-widest font-mono text-gray-400">
          Authenticating Node...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] bg-white text-black py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 border-b border-gray-100 pb-6">
          <p className="text-[11px] font-mono text-gray-400 tracking-widest uppercase mb-1">
            System_Access // User_Credentials
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
            User <span className="text-gray-400">Profile</span>
          </h1>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
          <div className="bg-gray-50/50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 ring-4 ring-offset-4 ring-black/5 mb-4">
              {user?.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  sizes="128px"
                  priority
                />
              ) : (
                <FaUserCircle className="w-full h-full text-gray-300" />
              )}
            </div>

            <span
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm ${
                role === "admin"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <FaUserShield className="text-xs" />
              {role}
            </span>
          </div>

          <div className="p-8 md:col-span-2 space-y-6 flex flex-col justify-center">
            {/* নাম */}
            <div className="flex items-start gap-4 pb-4 border-b border-gray-50">
              <div className="p-3 bg-gray-50 rounded-xl text-gray-400">
                <FaIdBadge className="text-lg text-black" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-mono text-gray-400 mb-0.5">
                  Full Name
                </p>
                <p className="text-lg font-bold text-black">
                  {user?.displayName || "Anonymous Node"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-50">
              <div className="p-3 bg-gray-50 rounded-xl text-gray-400">
                <FaEnvelope className="text-lg text-black" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-mono text-gray-400 mb-0.5">
                  Email Address
                </p>
                <p className="text-lg font-bold text-black font-mono break-all">
                  {user?.email}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-xl text-gray-400">
                <FaFingerprint className="text-lg text-black" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-mono text-gray-400 mb-0.5">
                  System UID
                </p>
                <p className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded select-all break-all">
                  {user?.uid}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">
            Security Status: Encrypted // Immutable Core Data
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
