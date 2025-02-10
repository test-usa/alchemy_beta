import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Calendar from "react-calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WeightTrackChart } from "./WeightTrackChart";

interface weightType {
  weight: number;
  trackweight: number;
  date: string;
}

// Sample Data (Added Date)
const weightHistories: weightType[] = [
  {
    weight: 80.0,
    trackweight: -78.5,
    date: "2025-02-10",
  },
  {
    weight: 80.0,
    trackweight: 77.8,
    date: "2025-02-11",
  },
  {
    weight: 80.0,
    trackweight: -77.2,
    date: "2025-02-12",
  },
  {
    weight: 80.0,
    trackweight: -76.9,
    date: "2025-02-13",
  },
  {
    weight: 80.0,
    trackweight: -76.5,
    date: "2025-02-14",
  },
  {
    weight: 80.0,
    trackweight: 76.0,
    date: "2025-02-15",
  },
  {
    weight: 80.0,
    trackweight: -75.8,
    date: "2025-02-16",
  },
  {
    weight: 80.0,
    trackweight: -75.5,
    date: "2025-02-17",
  },
  {
    weight: 80.0,
    trackweight: 75.0,
    date: "2025-02-18",
  },
  {
    weight: 80.0,
    trackweight: 74.7,
    date: "2025-02-19",
  },
];

const Weight = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="w-full md:mx-w-[953px] lg:w-[953px] h-full">
      <div className="text-[32px] font-semibold mb-4">Weight Track</div>

      {/* weight track chart */}
      <div className="flex flex-col sm:flex-row  md:flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 ">
        <div className="flex flex-col gap-3">
          <div className="w-full sm:w-[461px] h-[242.48px] border border-gray-300 rounded-lg p-6">
            <WeightTrackChart />
          </div>
          <div className="w-full md:max-w-[460px] lg:w-[460px] h-[177px] left-[668px] rounded-[11px] border-[1px] p-[24px] gap-[24px]">
            <input
              type="text"
              value="Value (78 Kg)"
              className="w-full p-2 border border-[#6636EE] rounded"
            />
            <div className="flex gap-2 mt-2">
              <button className="w-1/2 p-2 rounded border border-[#6636EE]">
                save
              </button>
              <button className="w-1/2 p-2 bg-[#6636EE] text-white rounded">
                {" "}
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto p-4 border rounded-md">
          {/* Custom Header */}
          <div className="flex justify-start items-center gap-4 text-lg font-semibold mb-2 px-6 text-[#6636EE]">
            <button className="text-gray-600 hover:text-black">‹</button>
            <span>
              {date?.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button className="text-gray-600 hover:text-black">›</button>
          </div>

          {/* Calendar Component */}
          <Calendar
            value={date}
            className="w-full"
            tileClassName={({ date }) =>
              `flex items-center justify-center p-4 w-full h-16 rounded-md transition-all ${
                date.toDateString() === new Date().toDateString()
                  ? "bg-indigo-600 text-white font-bold"
                  : "hover:bg-gray-200"
              }`
            }
          />
        </div>
      </div>

      {/* Weight Tracker History Section */}
      <div className="w-full md:max-w-[953px] lg:[953px]">
        <div className="md:max-w-[953px] lg:w-[953px] h-[21px] flex justify-between my-4">
          <div className="w-full md:max-w-[553px] lg:w-[553px] h-[21px]">
            <div className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-[-2%] h-[26px] py-3">
              Weight Tracker History
            </div>
          </div>
        </div>

        {/* Table Component Display */}
        <TableComponent data={weightHistories} />
      </div>
    </div>
  );
};

// Table Component to Reuse for Today & Yesterday
const TableComponent = ({ data }: { data: weightType[] }) => (
  <Table className="w-full">
    <TableHeader>
      <TableRow></TableRow>
    </TableHeader>
    <TableBody>
      {data.map((item, index) => (
        <TableRow key={item.date} className="flex justify-between">
          <TableCell>{item.weight} kg</TableCell>
          <div className="">
            <TableCell
              className={`${
                index % 2 === 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.trackweight} kg
            </TableCell>
            <TableCell>
              <button className="">
                <RiDeleteBin6Line />
              </button>
            </TableCell>
          </div>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default Weight;
