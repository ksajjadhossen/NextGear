import AddItemPage from "@/components/AddItemsComponents/AddItems";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import React from "react";
import connectDB from "../../../lib/mongodb";

const page = async () => {
  await connectDB();
  return (
    <div>
      <ProtectedRoute>
        <AddItemPage></AddItemPage>
      </ProtectedRoute>
    </div>
  );
};

export default page;
