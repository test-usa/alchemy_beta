import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

// JSON Data for Dynamic Goals
const goals = [
  {
    id: 1,
    title: "Make a better career",
    image:
      "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    habitCount: "0/4",
    taskCount: "2/4",
    date: "Jan 31, 2025",
    time: "08:00 AM",
  },
  {
    id: 2,
    title: "Improve Physical Fitness",
    image:
      "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    habitCount: "1/4",
    taskCount: "3/4",
    date: "Feb 10, 2025",
    time: "08:00 AM",
  },
  {
    id: 3,
    title: "Learn a New Language",
    image:
      "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    habitCount: "2/4",
    taskCount: "1/4",
    date: "Mar 5, 2025",
    time: "08:00 AM",
  },
  {
    id: 4,
    title: "Start a Business",
    image:
      "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    habitCount: "0/4",
    taskCount: "0/4",
    date: "Apr 20, 2025",
    time: "08:00 AM",
  },
  {
    id: 5,
    title: "Read 12 Books",
    image:
      "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    habitCount: "3/4",
    taskCount: "2/4",
    date: "May 15, 2025",
    time: "08:00 AM",
  },
  {
    id: 6,
    title: "Develop a Healthy Diet",
    image:
      "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    habitCount: "1/4",
    taskCount: "2/4",
    date: "Jun 30, 2025",
    time: "08:00 AM",
  },
  {
    id: 7,
    title: "Master a Musical Instrument",
    image:
      "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    habitCount: "2/4",
    taskCount: "3/4",
    date: "Jul 22, 2025",
    time: "08:00 AM",
  },
];

const GoalDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const goal = goals.find((goal) => goal.id === parseInt(id!));
  const [habitDays, setHabitDays] = useState<string[]>([]);
  const [habitDays2, setHabitDays2] = useState<string[]>([]);

  if (!goal) {
    return <div className="mt-20">Goal not found</div>;
  }

  const toggleDay = (day: string) => {
    setHabitDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleDay2 = (day: string) => {
    setHabitDays2((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="min-h-screen px-4 mb-4 mt-20">
      <div className="max-w-full mx-auto space-y-2">
        <h1 className="text-3xl font-bold">Your Goal Details</h1>
        <p>Ongoing</p>

        {/* Goal details */}
        <div className="mt-4">
          <img
            src={goal.image}
            alt={goal.title}
            className="w-full h-[140px] lg:h-[440px] md:h-[374px] object-cover object-center rounded-md mt-8"
          />
        </div>

        <div className="mt-4 space-y-4">
          <h2 className="text-2xl font-semibold">{goal.title}</h2>
          <div className="flex gap-4 text-sm">
            <p className="text-[#8E6DEC] border border-[#AB94ED] rounded-sm py-1 px-2">{`Habit ${goal.habitCount}`}</p>
            <p className="text-[#1778F2] border border-[#6FAEFD] rounded-sm py-1 px-2">{`Task ${goal.taskCount}`}</p>
          </div>
          <div className="flex gap-6">
            <p className="bg-[#F4F5F6] text-[#424242] text-sm px-2 rounded-sm">
              Career
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Calendar size={16} strokeWidth={1} />
              <p>{goal.date}</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} strokeWidth={1} />
              <p>{goal.time}</p>
            </div>
          </div>
        </div>

        <div className="py-4 max-w-full mx-auto">
          {/* Habits Section */}
          <section className="mb-6">
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-[#A687FE]">
                <div className="flex justify-between items-center">
                  <h2 className="font-medium">Week Up Early In The Morning</h2>
                </div>
                <div className="w-1/2 block lg:flex md:flex justify-between items-center mt-4">
                  <div className="flex gap-2">
                    {days.map((day, index) => (
                      <Button
                        key={index}
                        onClick={() => toggleDay(day)}
                        className={`w-2 h-6 rounded-full transition-colors ${
                          habitDays.includes(day)
                            ? "bg-[#6636EE] text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {day}
                      </Button>
                    ))}
                  </div>
                  <p className="text-gray-500 mt-3 lg:mt-0 md:mt-0">08:00 AM</p>
                </div>
              </div>
              {/* second card */}
              <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-[#A687FE]">
                <div className="flex justify-between items-center">
                  <h2 className="font-medium">Sleep Early In The Night</h2>
                </div>
                <div className="lg:w-1/2 md:w-1/2 block lg:flex md:flex justify-between items-center mt-4">
                  <div className="flex gap-2">
                    {days.map((day, index) => (
                      <Button
                        key={index}
                        onClick={() => toggleDay2(day)}
                        className={`w-2 h-6 rounded-full transition-colors ${
                          habitDays2.includes(day)
                            ? "bg-[#6636EE] text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {day}
                      </Button>
                    ))}
                  </div>
                  <p className="text-gray-500 mt-3 lg:mt-0 md:mt-0">08:00 AM</p>
                </div>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-[#A687FE]">
                <div>
                  <p className="font-medium">Search For New Job</p>
                </div>
                <div className="lg:w-1/2 md:w-1/2 flex justify-between items-center text-gray-500 text-md mt-2">
                  Nov 01, 2024
                  <p className="text-gray-500">08:00 AM</p>
                </div>
              </div>
              <button className="w-full py-2 bg-[#CCBDF8] text-[#6636EE] rounded-lg">
                + Add Habit
              </button>
            </div>
          </section>

          {/* Tasks Section */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-4">Task (2)</h2>
            <div className="space-y-4">
              {["Search For New Job", "Started Reading"].map((task, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-100 rounded-lg border-l-4 border-[#A687FE]"
                >
                  <div className="">
                    <p className="font-medium">{task}</p>
                  </div>
                  <div className="lg:w-1/2 md:w-1/2 flex justify-between items-center text-gray-500 text-md mt-2">
                    {index === 0 ? "Nov 01, 2024" : "Nov 03, 2024"}
                    <p className="text-gray-500">08:00 AM</p>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 bg-[#CCBDF8] text-[#6636EE] rounded-lg">
                + Add Task
              </button>
            </div>
          </section>

          {/* Notes Section */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-4">Note</h2>
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-600 pb-24 text-[#2B2B2B]">
                Work for yourself. Because you have to shine your life and give
                priority to your loving ones. Be ready to face the real world.
              </p>
            </div>
          </section>

          {/* Achieve Goal Button */}
          <button className="w-full py-3 bg-[#6636EE] text-white rounded-lg text-lg font-semibold">
            Achieve Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalDetailsPage;
