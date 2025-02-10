import { NavLink } from 'react-router-dom'

const WorkoutNavItems = () => {
    return (
        <ul className="space-y-2">
            <li className="flex flex-1">
                <NavLink
                    to="/workout/dance"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] text-white w-full px-3 py-2 rounded" :
                        "border border-gray-200 rounded px-3 py-2 w-full"}>
                    Dance
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/workout/yoga"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded " :
                        "border border-gray-200 rounded  px-3 py-2 w-full"}>
                    Yoga
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/workout/pilates"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded " :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Pilates
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/workout/online-program"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded" :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Online Program
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/workout/routines"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded" :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Routines
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/workout/unique-working"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded" :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Unique Workout ideas Challenges
                </NavLink>
            </li>
        </ul>
    )
}

export default WorkoutNavItems;