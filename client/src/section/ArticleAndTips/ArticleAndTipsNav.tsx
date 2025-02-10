import { NavLink } from "react-router-dom";

const ArticleAndTipsNav = () => {
  return (
    <ul className="space-y-2">
      <li className="flex flex-1">
        <NavLink
          to="/articles-and-tips/body-building"
          className={({ isActive }) =>
            isActive
              ? "border border-[#66636EE] bg-[#6636EE] text-white w-full px-3 py-2 rounded"
              : "border border-gray-200 rounded px-3 py-2 w-full"
          }
        >
          Body Building
        </NavLink>
      </li>
      <li className="flex flex-1">
        <NavLink
          to="/articles-and-tips/fitness"
          className={({ isActive }) =>
            isActive
              ? "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded "
              : "border border-gray-200 rounded  px-3 py-2 w-full"
          }
        >
          Fitness
        </NavLink>
      </li>
      <li className="flex flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded "
              : "border border-gray-200 rounded w-full px-3 py-2"
          }
        >
          Nutrition
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
          Wellness & Recovery
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
          Corporate Wellness
        </NavLink>
      </li>
    </ul>
  );
};

export default ArticleAndTipsNav;
