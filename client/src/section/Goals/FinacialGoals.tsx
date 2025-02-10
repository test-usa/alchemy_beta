import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const FinancialGoals: React.FC = () => {
  return (
    <div className="min-h-screen px-4 mb-4">
      <div className="max-w-full mx-auto space-y-10">
        <GoalForm />
        <HabitForm />
        <TaskForm />
      </div>
    </div>
  );
};

const GoalForm: React.FC = () => {
  const [goalDate, setGoalDate] = useState("");
  const [goalTime, setGoalTime] = useState("10:00");

  return (
    <Card className="lg:p-6 md:p-6 p-2 shadow">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Set up Goals</h2>
        <Input
          type="text"
          placeholder="Goals Title"
          className="mb-4"
        />
        <Input
          type="date"
          value={goalDate}
          onChange={(e) => setGoalDate(e.target.value)}
          className="mb-4"
        />
        <Input
          type="time"
          value={goalTime}
          onChange={(e) => setGoalTime(e.target.value)}
          className="mb-4"
        />
        <Button className="w-full bg-[#6636EE] text-white hover:bg-[#6636EE] hover:text-white hover:opacity-90">Add Task</Button>
      </CardContent>
    </Card>
  );
};

const HabitForm: React.FC = () => {
  const [habitDays, setHabitDays] = useState<string[]>([]);
  const [habitTime, setHabitTime] = useState("10:00");

  const toggleDay = (day: string) => {
    setHabitDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <Card className="lg:p-6 md:p-6 p-2 shadow">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Set up Habit</h2>
        <Input
          type="text"
          placeholder="Habit Title"
          className="mb-4"
        />
        <div className="grid grid-cols-4 gap-2 lg:flex md:flex justify-between mb-4">
          {days.map((day, index) => (
            <Button
              key={index}
              onClick={() => toggleDay(day)}
              className={`w-10 h-10 rounded-full transition-colors ${
                habitDays.includes(day)
                  ? "bg-[#6636EE] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {day}
            </Button>
          ))}
        </div>
        <Input
          type="time"
          value={habitTime}
          onChange={(e) => setHabitTime(e.target.value)}
          className="mb-4"
        />
        <Textarea
          placeholder="Note"
          className="mb-4"
        />
        <Button className="w-full bg-[#6636EE] text-white hover:bg-[#6636EE] hover:text-white hover:opacity-90">Add Task</Button>
      </CardContent>
    </Card>
  );
};

const TaskForm: React.FC = () => {
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("22:00");

  return (
    <Card className="lg:p-6 md:p-6 p-2 shadow">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Task</h2>
        <Input
          type="text"
          placeholder="Task Title"
          className="mb-4"
        />
        <Input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          className="mb-4"
        />
        <Input
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
          className="mb-4"
        />
        <Button className="w-full bg-[#6636EE] text-white hover:bg-[#6636EE] hover:text-white hover:opacity-90">Add Task</Button>
      </CardContent>
    </Card>
  );
};

export default FinancialGoals;
