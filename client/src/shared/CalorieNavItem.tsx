import { IoIosArrowForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom'

const CalorieNavItem = () => {
    return (

        <ul className="space-y-2">
            <li className="flex flex-1">
                <NavLink
                    to="intermittent-fasting"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] text-white w-full px-3 py-2 rounded" :
                        "border border-gray-200 rounded px-3 py-2 w-full"}>
                    Intermittent Fasting
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="keto"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded " :
                        "border border-gray-200 rounded  px-3 py-2 w-full"}>
                    Keto
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="macros"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded " :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Macros
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="calorie-counting"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded" :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Calorie Counting
                </NavLink>
            </li>

        </ul>


    )
}

export default CalorieNavItem;

{/* <ul className="space-y-2">
            <li className="flex flex-1 ">
                <NavLink
                    to="/mindhandling/meditation"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] text-white w-full px-3 py-2 rounded" :
                        "border border-gray-200 rounded px-3 py-2 w-full"}>

                    <p className='flex justify-between items-center'>
                        Intermittent Fasting
                        <IoIosArrowForward />
                    </p>


                </NavLink>



            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/mindhandling/sound-handeling"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded " :
                        "border border-gray-200 rounded  px-3 py-2 w-full"}>
                    Keto
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/mindhandling/get-organization"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded " :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Macros
                </NavLink>
            </li>
            <li className="flex flex-1">
                <NavLink
                    to="/mindhandling/recovery-counseling"
                    className={({ isActive }) => isActive ?
                        "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded" :
                        "border border-gray-200 rounded w-full px-3 py-2"}>
                    Calorie Counting
                </NavLink>
            </li>
        </ul> */}