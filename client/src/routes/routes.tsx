import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import SignupPage from "@/pages/SignupPage";
import LoginPage from "@/pages/LoginPage";
import NutritionPage from "@/pages/NutritionPage";
import MeditationPage from "@/pages/MeditationPage";
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
import Community from "@/pages/Community";
import MindHandling from "@/section/MindHandling/MindHandling";
import Meditations from "@/section/MindHandling/Meditations";
import SoundHandeling from "@/section/MindHandling/SoundHandeling";
import GetOrganization from "@/section/MindHandling/GetOrganization";
import RecoveryCounseling from "@/section/MindHandling/RecoveryCounseling";
import AddCardInfo from "@/section/SidePage/AddCardInfo";
import Confirm from "@/section/SidePage/Confirm";
import Workout from "@/section/Workout/Workout";
import Dance from "@/section/Workout/Dance";
import Routiens from "@/section/Workout/Routiens";
import Yoga from "@/section/Workout/Yoga";
import Pilates from "@/section/Workout/Pilates";
import OnlineProgram from "@/section/Workout/OnlineProgram";
import UniqueWork from "@/section/Workout/UniqueWork";
import Blog from "@/section/Blog/Blog";
import BlogChallenge from "@/section/Blog/BlogChallenge";
import PhysicalGoals from "@/section/Goals/PhysicalGoals";
import GoalPage from "@/pages/GoalPage";
import FinancialGoals from "@/section/Goals/FinacialGoals";
import WaterTrack from "@/section/Tracker/WaterTrack";
import Weight from "@/section/Tracker/Weight";

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
            {
                path: "tracker",
                element: <TrackerPage />,
                children: [
                    { path: "water-tracker", element: <WaterTrack /> },
                    { path: "weight", element: <Weight /> }
                ]
            },
            { path: "articles-and-tips", element: <ArticlesAndTipsPage /> },
            { path: "shop", element: <ShopPage /> },
            { path: "/shop-details/:id", element: <ShopDetailsPage /> },

            { path: "checkout", element: <CheckoutPage /> },
            {
                path: "goal",
                element: <GoalPage />,
                children: [
                    { path: "physical-goals", element: <PhysicalGoals /> },
                    { path: "financial-goals", element: <FinancialGoals /> },
                    { path: "relationship-goals", element: <FinancialGoals /> },
                    { path: "travel", element: <FinancialGoals /> },
                    { path: "bank-goals", element: <FinancialGoals /> },
                    { path: "your-goals", element: <FinancialGoals /> },
                ]
            },
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
            {
                path: "workout",
                element: <Workout />,
                children: [
                    { path: "dance", element: <Dance /> },
                    { path: "yoga", element: <Yoga /> },
                    { path: "pilates", element: <Pilates /> },
                    { path: "online-program", element: <OnlineProgram /> },
                    { path: "routines", element: <Routiens /> },
                    { path: "unique-working", element: <UniqueWork /> },
                ]
            },
            {
                path: "blog",
                element: <Blog />,
                children: [
                    { path: "challenge", element: <BlogChallenge /> },
                ]
            },
        ]
    }
]);

export default router;
