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

interface WaterHistory {
  id: number;
  name: string;
  quantity: string;
  date?: string;
  time: string;
  image: string;
}

const waterHistories: WaterHistory[] = [
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

const todayData = waterHistories.filter((data) => data.date === today);
const yesterdayData = waterHistories.filter((data) => data.date === yesterday);

const WaterTrack = () => {
  const [showAll, setShowAll] = useState(false);
  const toggleViewAll = () => setShowAll(!showAll);
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Water Track</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 flex flex-col items-center">
          <img src={waterDrop} alt="Water Drop" className="w-32" />
          <p className="text-xl font-semibold mt-4">0 mL</p>
          <p className="text-sm">
            Daily goal: 2,500mL <GoPencil className="inline" />
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center text-lg font-semibold text-indigo-600">
            <button className="text-gray-600 hover:text-black">‹</button>
            <span>
              {date?.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button className="text-gray-600 hover:text-black">›</button>
          </div>
          <Calendar value={date} className="w-full mt-2" />
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

      <div className="mt-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">History</h2>
          <button className="text-indigo-600" onClick={toggleViewAll}>
            {showAll ? "View Less" : "View All"}
          </button>
        </div>

        {showAll ? (
          <TableComponent data={waterHistories} />
        ) : (
          <>
            <h3 className="text-sm mt-3">Today, {today}</h3>
            <TableComponent data={todayData} />
            <h3 className="text-sm mt-5">Yesterday, {yesterday}</h3>
            <TableComponent data={yesterdayData} />
          </>
        )}
      </div>
    </div>
  );
};

const TableComponent = ({ data }: { data: WaterHistory[] }) => (
  <Table className="w-full mt-3">
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
            <TableCell className="flex gap-2 items-center">
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

export default WaterTrack;
