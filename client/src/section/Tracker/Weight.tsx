import React, { useState } from "react";
import { format, subDays } from "date-fns";
import { RiDeleteBin6Line } from "react-icons/ri";
import Calendar from "react-calendar";
import waterDrop from "../../assets/waterDrop.webp";
import { GoPencil } from "react-icons/go";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WeightTrackChart } from "./WeightTrackChart";

interface WaterHistory {
  id: number;
  name: string;
  quantity: string;
  date?: string;
  time: string;
  image: string;
}

// Sample Data (Added Date)
const waterHistries: WaterHistory[] = [
  {
    id: 1,
    name: "Water Bottle",
    quantity: "500 mL",
    time: "10:30 AM",
    date: "2025-02-09",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Orange Juice",
    quantity: "250 mL",
    time: "12:45 PM",
    date: "2025-02-08",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Green Tea",
    quantity: "200 mL",
    time: "3:00 PM",
    date: "2025-02-09",
    image: "https://via.placeholder.com/150",
  },
];

const today = format(new Date(), "yyyy-MM-dd");
const yesterday = format(subDays(new Date(), 1), "yyyy-MM-dd");

// Filter Data
const todayData = waterHistries.filter((data) => data.date === today);
const yesterdayData = waterHistries.filter((data) => data.date === yesterday);

const Weight = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle View All
  const toggleViewAll = () => setShowAll(!showAll);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="w-full h-full">
      <div className="text-[32px] font-semibold mb-4">Weight Track</div>

      {/* weight track chart */}
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 mt-3">
        <div className="w-full sm:w-[461px] h-[242.48px] border border-gray-300 rounded-lg p-6">
          <WeightTrackChart />
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

          {/* Calendar Component with Custom Header Only */}
          <Calendar
            value={date}
            // onChange={setDate}
            className="w-full"
            // Remove the default header entirely using components prop

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

      {/* Intake Form */}
      <div className="w-full sm:w-[415px] my-5">
        <input
          type="text"
          value="Drink (200 mL)"
          className="w-full p-2 border rounded"
        />
        <button className="w-full bg-purple-600 text-white p-2 mt-2 rounded">
          Add New
        </button>
      </div>

      {/* Today & Yesterday Data */}
      <div className="w-full sm:w-[953px]">
        <div className="md:max-w-[953px] lg:w-[953px] h-[21px] flex justify-between">
          <div className="md: max-w-[55px] lg:w-[55px] h-[21px]">
            <div className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-[-2%]">
              History
            </div>
          </div>
          <div
            className="w-[47px] h-[20px] cursor-pointer"
            onClick={toggleViewAll} // Toggle the view
          >
            <div className="font-inter font-semibold text-[12px] leading-[19.68px] tracking-[0%] text-[#6636EE]">
              {showAll ? "View Less" : "View All"}
            </div>
          </div>
        </div>

        {showAll ? (
          <>
            <TableComponent data={waterHistries} /> {/* Show all data */}
          </>
        ) : (
          <>
            <div className="w-full sm:w-[953px] h-auto gap-3">
              <div className="font-inter font-normal text-[14px] leading-[18.48px] tracking-[-2%] mb-2">
                Today, {today}
              </div>
            </div>
            <TableComponent data={todayData} />
            <div className="w-full sm:w-[953px] h-auto gap-3 mt-5">
              <div className="font-inter font-normal text-[14px] leading-[18.48px] tracking-[-2%] mb-2">
                Yesterday, {yesterday}
              </div>
            </div>
            <TableComponent data={yesterdayData} />
          </>
        )}
      </div>
    </div>
  );
};

// Table Component to Reuse for Today & Yesterday
const TableComponent = ({ data }: { data: WaterHistory[] }) => (
  <Table className="w-full">
    <TableHeader>
      <TableRow>
        <TableHead>Intake</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead>Time</TableHead>
        <TableHead>Manage</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.length > 0 ? (
        data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium flex gap-2">
              <img src={item.image} alt={item.name} className="w-8 h-8" />
              {item.name}
            </TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.time}</TableCell>
            <TableCell>
              <button className="text-red-500">
                <RiDeleteBin6Line />
              </button>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={4} className="text-center text-gray-500">
            No data available
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

export default Weight;
