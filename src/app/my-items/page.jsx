import ProtectedRoute from "@/components/auth/ProtectedRoute";
import MyItems from "@/components/MyItemsPage/MyItemsPage";
import React from "react";

const page = () => {
  return (
    <div>
      <ProtectedRoute>
        <MyItems></MyItems>
      </ProtectedRoute>
    </div>
  );
};

export default page;
