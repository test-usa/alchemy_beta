import { NavLink } from 'react-router-dom'

const GoalNavItems = () => {
    return (
        <ul className="space-y-2">
            <li className="flex flex-1">
                <NavLink
                    to="physical-goals"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] text-white w-full px-3 py-2 rounded" :
                        "border border-gray-200 rounded px-3 py-2 w-full"}>
                    Physical Goals
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="financial-goals"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded " :
                        "border border-gray-200 rounded  px-3 py-2 w-full"}>
                    Financial Goals
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="relationship-goals"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded " :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Realtionship Goals
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="travel"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded" :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Travel
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="bank-goals"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded" :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Bank Goals
                </NavLink>
            </li>
            <li className="flex flex-1">
      <NavLink
        to="your-goals"
        className={({ isActive }: { isActive: boolean }) =>
          isActive || 
          location.pathname.startsWith("/goal/goal-details") || 
          location.pathname === "/goal/your-goals"
            ? "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded"
            : "border border-gray-200 rounded w-full px-3 py-2"
        }
      >
        Your Goals
      </NavLink>
    </li>
        </ul>
    )
}

export default GoalNavItems;