import React from "react";

const FeaturedProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Smart Watch V3",
      price: "$299",
      desc: "Always on Retina display.",
    },
    {
      id: 2,
      name: "Next Gen Buds",
      price: "$159",
      desc: "Active Noise Cancellation.",
    },
    {
      id: 3,
      name: "MagSafe Case",
      price: "$49",
      desc: "Premium leather finish.",
    },
  ];

  return (
    <section className="py-24 bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Featured Gear.
          </h2>
          <button className="text-blue-600 font-medium hover:underline text-lg">
            Browse all items &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-start cursor-pointer"
            >
              <div className="w-full h-48 bg-gray-50 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-4xl">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-black">{product.name}</h3>
              <p className="text-gray-400 mt-2 font-medium">{product.desc}</p>
              <div className="mt-6 flex justify-between w-full items-center">
                <span className="text-xl font-semibold text-black">
                  {product.price}
                </span>
                <button className="bg-gray-100 p-3 rounded-full hover:bg-black hover:text-white transition-colors">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductGrid;
