import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import NutritionPage from "../pages/NutritionPage";
import MeditationPage from "../pages/MeditationPage";
import WorkoutPage from "../pages/WorkoutPage";
import TrackerPage from "../pages/TrackerPage";
import ShopPage from "../pages/ShopPage";
import ArticlesAndTipsPage from "../pages/ArticlesAndTipsPage";


const router= createBrowserRouter([
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: "/",
                    element: <HomePage></HomePage>
                },
               
                {
                    path: "/signup",
                    element: <SignupPage></SignupPage>
                },
                {
                    path: "/login",
                    element: <LoginPage></LoginPage>
                },    
                {
                    path: "/nutrition",
                    element: <NutritionPage/>
                },
                {
                    path: "/meditation",
                    element: <MeditationPage/>
                },
                {
                    path: "/workout",
                    element: <WorkoutPage/>
                },       
                {
                    path: "/tracker",
                    element: <TrackerPage/>
                },       
                {
                    path: "/articles & tips",
                    element: <ArticlesAndTipsPage/>
                },       
                {
                    path: "/shop",
                    element: <ShopPage/>
                },       
            ]
        }
    ])

export default router;