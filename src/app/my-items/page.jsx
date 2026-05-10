import ProtectedRoute from "@/components/auth/ProtectedRoute";
import MyItems from "@/components/MyItemsPage/MyItemsPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const cookieStore = await cookies();
  const role = cookieStore.get("userRole")?.value;
  if (role !== "admin") {
    redirect("/");
  }
  return (
    <div>
      <ProtectedRoute>
        <MyItems></MyItems>
      </ProtectedRoute>
    </div>
  );
};

export default page;
