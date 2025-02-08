import { NavLink } from 'react-router-dom'

const MindNavItems = () => {
    return (
        <ul className="space-y-2">
            <li className="flex flex-1">
                <NavLink
                    to="/mindhandling/meditation"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] text-white w-full px-3 py-2 rounded" :
                        "border border-gray-200 rounded px-3 py-2 w-full"}>
                    Meditations
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/mindhandling/sound-handeling"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded " :
                        "border border-gray-200 rounded  px-3 py-2 w-full"}>
                    Sound Headling
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/mindhandling/get-organization"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded " :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Get Organized
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/mindhandling/recovery-counseling"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded" :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Recovery Counseling
                </NavLink>
            </li>
        </ul>
    )
}

export default MindNavItems