import React from 'react'
import { NavLink } from 'react-router-dom'

const NutritionNavItems = () => {
  return (
    <ul className="space-y-2">
          <li className="flex flex-1">
            <NavLink
              to="/nutrition/intermittent-fasting"
              className={({ isActive }) => isActive ?
                "border border-[#66636EE] bg-[#6636EE] text-white w-full px-3 py-2 rounded":
                "border border-gray-200 rounded px-3 py-2 w-full"}>
              Intermittent Fasting
            </NavLink>
          </li>
          <li className="flex flex-1">
            <NavLink
              to="/nutrition/weight-loss-program"
              className={({ isActive }) => isActive ?
                "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded ":
                "border border-gray-200 rounded  px-3 py-2 w-full"}>
              Weight Loss Program
            </NavLink>
          </li>
          <li className="flex flex-1">
            <NavLink
              to="/nutrition/keto"
              className={({ isActive }) => isActive ?
                "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded ":
                "border border-gray-200 rounded w-full px-3 py-2"}>
              Keto
            </NavLink>
          </li>
          <li className="flex flex-1">
            <NavLink
              to="/nutrition/keto-meal-plan"
              className={({ isActive }) => isActive ?
                "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded":
                "border border-gray-200 rounded w-full px-3 py-2"}>
              Keto Meal Plan
            </NavLink>
          </li>
          <li className="flex flex-1">
            <NavLink
              to="/nutrition/macros"
              className={({ isActive }) => isActive ?
                "border border-[#66636EE] bg-[#6636EE] w-full text-white px-3 py-2 rounded":
                "border border-gray-200 rounded w-full px-3 py-2"}>
              Macros
            </NavLink>
          </li>
        </ul>
  )
}

export default NutritionNavItems