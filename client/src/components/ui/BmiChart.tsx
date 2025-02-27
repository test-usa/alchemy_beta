import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

// Data representing the percentage of 24% used and 76% unused
const data = [
  { name: "Used", value: 24, fill: "#6636EE" }, // Used portion
  { name: "Unused", value: 76, fill: "#E0E0E0" }, // Unused portion (light gray)
];

export const BmiChart = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[264px] h-[264px] flex justify-center items-center relative">
        {/* Set the width and height of the chart */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Pie representing both used and unused portions */}
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
            // label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute">
          <h1>24</h1>
        </div>
        <div className="absolute mt-[250px] flex gap-2">
          <div className="w-[16px] h-[16px] rounded-full bg-[#6636EE]  mt-2"></div>
          <div className="font-inter font-normal text-base leading-[29.52px]">
            Over weight</div>
        </div>
      </div>
    </div>
  );
};
