const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-[#f9f9fb] rounded-[2rem] p-6 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent hover:border-gray-100">
      {/* Product Image */}
      <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
        <img
          src="/placeholder-gadget.png"
          alt="Product"
          className="w-40 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-1 rounded">
          New
        </span>
        <h3 className="text-lg font-bold text-gray-900 leading-tight pt-1">
          Ultra Dynamic Headphones
        </h3>
        <p className="text-sm text-gray-400 font-medium">Space Gray</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-extrabold">$449.00</span>
          <button className="bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-lg">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
