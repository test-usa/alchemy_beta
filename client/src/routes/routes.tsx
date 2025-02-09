import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import SignupPage from "@/pages/SignupPage";
import LoginPage from "@/pages/LoginPage";
import NutritionPage from "@/pages/NutritionPage";
import MeditationPage from "@/pages/MeditationPage";
import WorkoutPage from "@/pages/WorkoutPage";
import TrackerPage from "@/pages/TrackerPage";
import ShopPage from "@/pages/ShopPage";
import ArticlesAndTipsPage from "@/pages/ArticlesAndTipsPage";
import WeightLossProgram from "@/section/nutrition/WeightLossProgram";
import Keto from "@/section/nutrition/Keto";
import KetoMealPlan from "@/section/nutrition/KetoMealPlan";
import Macros from "@/section/nutrition/Macros";
import IntermittentFasting from "@/section/nutrition/IntermittentFasting";
import CheckoutPage from "@/pages/CheckoutPage";
import { ShopDetailsPage } from "@/pages/ShopDetailsPage";
import { Goal } from "lucide-react";
import Community from "@/pages/Community";
import Confirm from "@/section/SidePage/Confirm";
import MindHandling from "@/section/MindHandling/MindHandling";
import Meditations from "@/section/MindHandling/Meditations";
import AddCardInfo from "@/section/SidePage/AddCardInfo";
import SoundHandeling from "@/section/MindHandling/SoundHandeling";
import GetOrganization from "@/section/MindHandling/GetOrganization";
import RecoveryCounseling from "@/section/MindHandling/RecoveryCounseling";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "signup", element: <SignupPage /> },
            { path: "login", element: <LoginPage /> },
            {
                path: "nutrition",
                element: <NutritionPage />,
                children: [
                    { path: "intermittent-fasting", element: <IntermittentFasting /> },
                    { path: "weight-loss-program", element: <WeightLossProgram /> },
                    { path: "keto", element: <Keto /> },
                    { path: "keto-meal-plan", element: <KetoMealPlan /> },
                    { path: "macros", element: <Macros /> },
                ]
            },
            { path: "meditation", element: <MeditationPage /> },
            { path: "workout", element: <WorkoutPage /> },
            { path: "tracker", element: <TrackerPage /> },
            { path: "articles-and-tips", element: <ArticlesAndTipsPage /> },
            { path: "shop", element: <ShopPage /> },
            {path: "/shop-details/:id", element: <ShopDetailsPage/>},
   
            { path: "checkout", element: <CheckoutPage /> },
            { path: "goal", element: <Goal /> },
            { path: "community", element: <Community /> },
            { path: "/place-order", element: <AddCardInfo /> },
            { path: "pay", element: <Confirm /> },

            {
                path: "mindhandling",
                element: <MindHandling />,
                children: [
                    { path: "meditation", element: <Meditations /> },
                    { path: "sound-handeling", element: <SoundHandeling /> },
                    { path: "get-organization", element: <GetOrganization /> },
                    { path: "recovery-counseling", element: <RecoveryCounseling /> },

                ]

            },

        ]
    }
]);

export default router;
