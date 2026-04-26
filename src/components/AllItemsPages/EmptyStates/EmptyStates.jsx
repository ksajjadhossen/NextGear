const EmptyState = () => (
  <div className="w-full py-20 text-center">
    <div className="text-6xl mb-6">🔍</div>
    <h3 className="text-2xl font-bold">No items found</h3>
    <p className="text-gray-500 mt-2">
      Try adjusting your filters or search keywords.
    </p>
    <button className="mt-8 text-black font-bold border-b-2 border-black pb-1">
      Clear all filters
    </button>
  </div>
);
export default EmptyState;
