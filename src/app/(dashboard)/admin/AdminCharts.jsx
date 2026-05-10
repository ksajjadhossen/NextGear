"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export const AdminCharts = ({ products }) => {
  const categoryData = products.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const barData = Object.keys(categoryData).map((cat) => ({
    name: cat.toUpperCase(),
    total: categoryData[cat],
  }));

  const stockData = [
    { name: "IN_STOCK", value: products.filter((p) => p.stock !== 0).length },
    {
      name: "OUT_OF_STOCK",
      value: products.filter((p) => p.stock === 0).length,
    },
  ];

  const COLORS = ["#000000", "#E2E2E2"]; // High contrast minimalist colors

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Bar Chart: Distribution Metrics */}
      <div className="bg-white p-8 rounded-none border border-gray-100 shadow-sm h-[400px]">
        <div className="mb-6">
          <h3 className="text-xl font-black italic uppercase tracking-tighter">
            Distribution{" "}
            <span className="text-gray-300 font-normal not-italic">
              // Category_Metrics
            </span>
          </h3>
          <p className="text-[9px] text-gray-400 font-mono uppercase tracking-[0.3em] mt-1">
            Data_Stream // Cluster_Inventory
          </p>
        </div>

        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={barData}>
            <CartesianGrid
              strokeDasharray="2 2"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              stroke="#999"
              fontFamily="monospace"
            />
            <YAxis
              fontSize={10}
              tickLine={false}
              axisLine={false}
              stroke="#999"
            />
            <Tooltip
              cursor={{ fill: "#f9f9f9" }}
              contentStyle={{
                borderRadius: "0px",
                border: "1px solid #000",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            />
            <Bar
              dataKey="total"
              fill="#000"
              radius={[0, 0, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart: Stock Status */}
      <div className="bg-white p-8 rounded-none border border-gray-100 shadow-sm h-[400px]">
        <div className="mb-6">
          <h3 className="text-xl font-black italic uppercase tracking-tighter">
            Inventory{" "}
            <span className="text-gray-300 font-normal not-italic">
              // Stock_Status
            </span>
          </h3>
          <p className="text-[9px] text-gray-400 font-mono uppercase tracking-[0.3em] mt-1">
            Real_Time // Availability_Index
          </p>
        </div>

        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={stockData}
              innerRadius={70}
              outerRadius={90}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              {stockData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="square"
              formatter={(value) => (
                <span className="text-[10px] font-bold tracking-widest text-black uppercase">
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
