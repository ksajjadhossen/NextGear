const ProductHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-100 mb-10 gap-4">
      <p className="text-gray-500 font-medium">
        Showing <span className="text-black">24</span> Products
      </p>
      <div className="flex items-center gap-6">
        <select className="bg-transparent font-semibold focus:outline-none cursor-pointer text-sm uppercase tracking-tighter">
          <option>Sort by: Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <div className="hidden md:flex gap-2">
          {/* Grid vs List view toggle buttons */}
          <div className="p-2 bg-gray-100 rounded-md cursor-pointer">🔳</div>
          <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            🟰
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductHeader;
