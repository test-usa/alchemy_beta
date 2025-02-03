import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";


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
            ]
        }
    ])

export default router;