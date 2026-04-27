import AddItemPage from "@/components/AddItemsComponents/AddItems";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import React from "react";

const page = () => {
  return (
    <div>
      <ProtectedRoute>
        <AddItemPage></AddItemPage>
      </ProtectedRoute>
    </div>
  );
};

export default page;
