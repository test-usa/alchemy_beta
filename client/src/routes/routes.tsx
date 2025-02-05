import MainLayout from "../layouts/MainLayout";
import ArticlesAndTipsPage from "../pages/ArticlesAndTipsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MeditationPage from "../pages/MeditationPage";
import NutritionPage from "../pages/NutritionPage";
import ShopPage from "../pages/ShopPage";
import SignupPage from "../pages/SignupPage";
import TrackerPage from "../pages/TrackerPage";
import WorkoutPage from "../pages/WorkoutPage";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },

      {
        path: "/signup",
        element: <SignupPage></SignupPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/nutrition",
        element: <NutritionPage />,
      },
      {
        path: "/meditation",
        element: <MeditationPage />,
      },
      {
        path: "/workout",
        element: <WorkoutPage />,
      },
      {
        path: "/tracker",
        element: <TrackerPage />,
      },
      {
        path: "/articles & tips",
        element: <ArticlesAndTipsPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);

export default router;
