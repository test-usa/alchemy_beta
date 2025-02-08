import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const filters = ["All", "Keto", "Meditation", "Tracker", "Nutrition"];
const schedule = [
  { day: "Monday", activity: "Power Yoga", time: "09:00" },
  { day: "Tuesday", activity: "Meditation", time: "09:00" },
  { day: "Wednesday", activity: "Meditation", time: "09:00" },
  { day: "Thursday", activity: "Power Yoga", time: "09:00" },
  { day: "Friday", activity: "Meditation", time: "09:00" },
  { day: "Saturday", activity: "Power Yoga", time: "09:00" },
  { day: "Sunday", activity: "Power Yoga", time: "09:00" },
];

export function WickedList() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="p-4 w-full max-w-[870px] relative">
        <div className="flex flex-wrap gap-2 mb-6 justify-center sm:justify-between">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`$${activeFilter === filter
                  ? "bg-primary text-white"
                  : "text-primary"
                } px-4 py-2 text-sm sm:text-base`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <Table className="min-w-full border-collapse border border-gray-200">
            <TableHeader>
              <TableRow>
                {schedule.map((item) => (
                  <TableHead
                    key={item.day}
                    className="bg-primary text-white text-center text-xs sm:text-sm px-2 py-3"
                  >
                    {item.day}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(7)].map((_, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  {schedule.map((item) => (
                    <TableCell
                      key={item.day + rowIndex}
                      className="text-center text-gray-700 text-xs sm:text-sm px-2 py-3"
                    >
                      <div>{item.activity}</div>
                      <div>{item.time}</div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
