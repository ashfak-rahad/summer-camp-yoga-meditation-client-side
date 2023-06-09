import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Instructors from "../pages/Instructors";
import Dashboard from "../pages/Dashboard";
import Classes from "../pages/Classes";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
            },
            {
                path: "/instructors",
                element: <Instructors/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/classes",
                element: <Classes/>
            }
        ]
    }
])

export default Routes