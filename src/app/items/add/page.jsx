import AddItemPage from "@/components/AddItemsComponents/AddItems";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  const cookieStore = await cookies();
  const role = cookieStore.get("userRole")?.value;
  if (role !== "admin") {
    redirect("/");
  }
  return (
    <div>
      <ProtectedRoute>
        <AddItemPage></AddItemPage>
      </ProtectedRoute>
    </div>
  );
};

export default page;
