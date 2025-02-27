import { NavLink } from "react-router-dom";

const WaterTrackNavItem = () => {
  return (
    <ul className="space-y-2">
      <li className="flex flex-1">
        <NavLink
          to="/tracker/water-tracker"
          className={({ isActive }) =>
            isActive
              ? "border border-[#66636EE] bg-[#6636EE] text-white w-full px-3 py-2 rounded"
              : "border border-gray-200 rounded px-3 py-2 w-full"
          }
        >
          Water Track
        </NavLink>
      </li>
      <li className="flex flex-1">
        <NavLink
          to="/tracker/weight"
          className={({ isActive }) =>
            isActive
              ? "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded "
              : "border border-gray-200 rounded  px-3 py-2 w-full"
          }
        >
          Weight
        </NavLink>
      </li>
      <li className="flex flex-1">
        <NavLink
          to="/tracker/calories-counter"
          className={({ isActive }) =>
            isActive
              ? "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded "
              : "border border-gray-200 rounded w-full px-3 py-2"
          }
        >
          Calories counter
        </NavLink>
      </li>
      <li className="flex flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded"
              : "border border-gray-200 rounded w-full px-3 py-2"
          }
        >
          Goals
        </NavLink>
      </li>
    </ul>
  );
};

export default WaterTrackNavItem;
