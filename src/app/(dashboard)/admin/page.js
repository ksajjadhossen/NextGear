// src/app/(dashboard)/admin/page.js
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { StatsCards } from "./StatsCards";
import { AdminCharts, InventoryChart } from "./AdminCharts";
import { RecentItems } from "./RecentItems";
import dbConnect from "@/lib/mongodb";
import ProductModel from "@/app/models/product.model";
import UserModel from "@/app/models/user.model";
import wishlistModel from "@/app/models/wishlist.model";
import { DataTable } from "./DataTable";
import CategoryChart from "./CategoryChart";

const AdminDashboard = async () => {
  const cookieStore = await cookies();
  const role = cookieStore.get("userRole")?.value;

  if (role !== "admin") {
    redirect("/");
  }

  await dbConnect();

  const productsRaw = await ProductModel.find({}).lean();
  const WishlistsRaw = await wishlistModel.find({}).lean();
  const totalUsers = await UserModel.countDocuments({ role: "user" });

  const products = JSON.parse(JSON.stringify(productsRaw));
  const Wishlists = JSON.parse(JSON.stringify(WishlistsRaw));

  const totalProducts = products.length;
  const recentItems = products.slice(-5).reverse();

  return (
    <div className="min-h-screen bg-[#FBFBFD] p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 pt-8">
          <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase font-bold mb-2">
            System_Access // Root_Admin
          </p>
          <h1 className="text-6xl font-black tracking-tighter italic uppercase">
            Admin <span className="text-gray-200 not-italic">Dashboard</span>
          </h1>
          <div className="h-0.5 w-12 bg-black mt-4"></div>
        </header>

        <>
          <StatsCards
            totalProducts={totalProducts}
            totalUsers={totalUsers}
            totalWishlist={Wishlists.length}
          />
          <AdminCharts products={products} />
          <CategoryChart chartData={products} />
          <DataTable items={products} />

          <RecentItems items={recentItems} />
        </>
      </div>
    </div>
  );
};

export default AdminDashboard;
