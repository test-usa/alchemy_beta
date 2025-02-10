import { Clock } from "lucide-react";

// JSON Data included at the top of the file
const goals = [
  {
    "id": 1,
    "title": "Make a better career",
    "image": "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    "habitCount": "0/4",
    "taskCount": "2/4",
    "date": "Jan 31, 2025"
  },
  {
    "id": 2,
    "title": "Improve Physical Fitness",
    "image": "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    "habitCount": "1/4",
    "taskCount": "3/4",
    "date": "Feb 10, 2025"
  },
  {
    "id": 3,
    "title": "Learn a New Language",
    "image": "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    "habitCount": "2/4",
    "taskCount": "1/4",
    "date": "Mar 5, 2025"
  },
  {
    "id": 4,
    "title": "Start a Business",
    "image": "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    "habitCount": "0/4",
    "taskCount": "0/4",
    "date": "Apr 20, 2025"
  },
  {
    "id": 5,
    "title": "Read 12 Books",
    "image": "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    "habitCount": "3/4",
    "taskCount": "2/4",
    "date": "May 15, 2025"
  },
  {
    "id": 6,
    "title": "Develop a Healthy Diet",
    "image": "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    "habitCount": "1/4",
    "taskCount": "2/4",
    "date": "Jun 30, 2025"
  },
  {
    "id": 7,
    "title": "Master a Musical Instrument",
    "image": "https://static.wixstatic.com/media/de61e7_f15798e7abe64ebda1afcf3f81c16155~mv2.jpg",
    "habitCount": "2/4",
    "taskCount": "3/4",
    "date": "Jul 22, 2025"
  }
]


const YourGoals: React.FC = () => {
  return (
    <div className="min-h-screen px-4 mb-4">
      <div className="max-w-full mx-auto space-y-2">
        <h1 className="text-3xl font-bold">Goal</h1>
        <p>Ongoing</p>

        {/* Map through JSON data */}
        <div className="grid grid-cols-1 gap-4">
          {goals.map((goal) => (
            <div key={goal.id} className="flex gap-4 mt-4 border border-[#6636EE] p-4 rounded-sm">
              <div>
                <img
                  className="w-full max-w-[24px] h-auto lg:w-[160px] lg:h-[160px] md:w-[160px] md:h-[160px] rounded-md"
                  src={goal.image}
                  alt={goal.title}
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl lg:text-2xl md:text-2xl font-semibold">{goal.title}</h2>

                <div className="flex gap-2 text-xs">
                  {/* Habit */}
                  <p className="text-[#8E6DEC] border border-[#AB94ED] py-1 px-1 lg:px-2 md:px-2">
                    Habit {goal.habitCount}
                  </p>
                  {/* Task */}
                  <p className="text-[#1778F2] border border-[#6FAEFD] py-1 px-1 lg:px-2 md:px-2">
                    Task {goal.taskCount}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <Clock size={16} strokeWidth={1} />
                  <p>{goal.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default YourGoals;
