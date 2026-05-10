// components/admin/RecentItems.jsx
export const RecentItems = ({ items }) => (
  <div className="bg-white border-l-8 border-black mt-12 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
    {/* Header with Doctrine Style */}
    <div className="p-8 border-b border-gray-50 flex justify-between items-baseline">
      <div>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter">
          Log <span className="text-gray-200">// Recent_Deployments</span>
        </h3>
        <p className="text-[9px] tracking-[0.3em] text-gray-400 uppercase mt-1 font-mono">
          Update_Stream // Latest_Entries
        </p>
      </div>
      <div className="text-[10px] font-bold text-gray-300 font-mono">
        STATUS // ACTIVE
      </div>
    </div>

    {/* Modernized Table */}
    <table className="w-full text-left">
      <thead>
        <tr className="bg-gray-50/50">
          <th className="px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            Entry_Identifier
          </th>
          <th className="px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center">
            Class
          </th>
          <th className="px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-right">
            Value
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {items.map((item) => (
          <tr
            key={item._id}
            className="group hover:bg-[#FBFBFB] transition-colors"
          >
            <td className="px-8 py-6">
              <span className="text-lg font-black italic uppercase tracking-tighter group-hover:pl-2 transition-all duration-300">
                {item.name}
              </span>
            </td>
            <td className="px-8 py-6 text-center">
              <span className="text-[10px] font-mono font-bold py-1 px-3 bg-gray-100 uppercase tracking-widest text-gray-500">
                {item.category}
              </span>
            </td>
            <td className="px-8 py-6 text-right font-mono font-black text-sm">
              ${item.price.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Technical Footer Decoration */}
    <div className="p-4 bg-gray-50 flex justify-center">
      <div className="flex gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-1 w-1 bg-gray-200 rounded-full"></div>
        ))}
      </div>
    </div>
  </div>
);
