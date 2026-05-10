// components/admin/StatsCards.jsx
export const StatsCards = ({ totalProducts, totalUsers, totalWishlist }) => {
  const stats = [
    {
      label: "Global_Inventory",
      value: totalProducts,
      sub: "Active_Units",
      prefix: "//",
    },
    {
      label: "User_Base",
      value: totalUsers,
      sub: "Verified_Nodes",
      prefix: "CL-0",
    },
    {
      label: "Desired_Items",
      value: totalWishlist,
      sub: "Market_Demand",
      prefix: "WIS",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-none border-l-4 border-black shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
        >
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase font-bold">
              {item.prefix}_{item.label}
            </p>
          </div>

          <h2 className="text-5xl font-black italic uppercase tracking-tighter">
            {item.value}
          </h2>

          <div className="mt-4 flex items-center gap-2">
            <div className="h-[1px] w-4 bg-gray-200"></div>
            <p className="text-[9px] text-gray-400 font-mono uppercase tracking-widest">
              {item.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
