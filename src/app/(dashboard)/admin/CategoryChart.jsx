"use client";
import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const InventoryLineChart = ({ chartData = [] }) => {
  // ডাটা প্রসেসিং: ক্যাটাগরি অনুযায়ী প্রডাক্ট সংখ্যা বের করা
  const processedData = useMemo(() => {
    if (!chartData || !chartData.length) return [];

    const counts = chartData.reduce((acc, item) => {
      const category = item.category || "Other";
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(counts).map((key) => ({
      name: key.toUpperCase(),
      count: counts[key],
    }));
  }, [chartData]);

  if (!chartData || chartData.length === 0) {
    return (
      <div className="w-full h-80 flex items-center justify-center border border-dashed border-gray-200 uppercase text-[10px] tracking-[0.3em] text-gray-400 font-mono">
        Loading_Line_Stream...
      </div>
    );
  }

  return (
    <div className="w-full mb-10 px-4 flex justify-center">
      <div className="bg-white border border-gray-100 p-8 flex flex-col items-center transition-all hover:shadow-sm h-[450px] w-full max-w-5xl">
        {/* টাইটেল স্টাইল */}
        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-black mb-10 border-b border-black pb-2">
          Inventory Trend // Statistics
        </h3>

        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={processedData}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              {/* হালকা হরিজন্টাল লাইন */}
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f0f0f0"
              />

              <XAxis
                dataKey="name"
                axisLine={{ stroke: "#000", strokeWidth: 1 }}
                tickLine={false}
                tick={{
                  fontSize: 10,
                  fontWeight: 800,
                  fill: "#000",
                  letterSpacing: "1px",
                }}
                dy={10}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fontWeight: 800, fill: "#000" }}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: "0px",
                  border: "2px solid #000",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                }}
              />

              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                formatter={(value) => (
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">
                    {value === "count" ? "TOTAL_PRODUCTS" : value}
                  </span>
                )}
              />

              {/* মেইন লাইন ডিজাইন */}
              <Line
                type="monotone"
                dataKey="count"
                stroke="#000000"
                strokeWidth={4}
                dot={{ r: 5, fill: "#000", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 8, strokeWidth: 0 }}
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InventoryLineChart;
