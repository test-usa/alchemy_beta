import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { FaAngleUp } from "react-icons/fa";

// Data representing the percentage of 24% used and 76% unused
const data = [
  { name: "Used", value: 24, fill: "#6636EE" }, // Used portion
  { name: "Unused", value: 76, fill: "#E0E0E0" }, // Unused portion (light gray)
];

export const WeightTrackChart = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[104px] h-[104px] flex justify-center items-center relative">
        {/* Set the width and height of the chart */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Pie representing both used and unused portions */}
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={30} // Inner radius (ring thickness)
              outerRadius={40} // Outer radius
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute flex justify-center w-full">
          <div className="text-bold">
            78.5 <span className="pt-5 text-[13.48px]">kg</span>
          </div>
        </div>
        <div className="absolute font-inter font-normal text-[13.48px] leading-[22.11px] tracking-[0] text-center w-[279.71px] h-[27px] flex justify-center gap-[49.71px] top-[120px]">
          <div className="text-[#2B9B40]  font-normal text-[20px] leading-[22.11px] tracking-[0] text-center text-[13.48px] leading-[22.11px] tracking-[0] text-center">
            <div className="flex items-center gap-2">
              <FaAngleUp />
              <span>- 0.2kg</span>
            </div>
          </div>
        </div>

        <div className="absolute font-inter font-normal text-[13.48px] leading-[22.11px] tracking-[0] text-center w-[279.71px] h-[27px] flex justify-center gap-[49.71px] top-[170px]">
          <div className="font-inter font-normal text-[16.18px] leading-[26.53px] tracking-[0] text-center">
            Starting: 80.0 Kg
          </div>
          <div className="font-inter font-normal text-[16.18px] leading-[26.53px] tracking-[0] text-center">
            Goal: 80.0 Kg
          </div>
        </div>
      </div>
    </div>
  );
};
