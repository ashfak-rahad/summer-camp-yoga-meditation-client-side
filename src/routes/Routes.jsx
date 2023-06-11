import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Instructors from "../pages/Instructors";
import Dashboard from "../pages/Dashboard";
import Classes from "../pages/Classes";
import ManageClasses from "../dashboard/pages/ManageClasses";
import ManageUsers from "../dashboard/pages/ManageUsers";
import AddClass from "../dashboard/pages/AddClass";
import EditClass from "../dashboard/pages/EditClass";
import MyClasses from "../dashboard/pages/MyClasses";
import SelectedClasses from "../dashboard/pages/SelectedClasses";
import EnrolledClass from "../dashboard/pages/EnrolledClass";
import Payment from "../dashboard/pages/Payment";
import PaymentHistory from "../dashboard/pages/PaymentHistory";
import DashboardLayout from "../layouts/DashboardLayout";
import RequiredLogin from "./private/RequiredLogin";
import AdminOnly from "./private/AdminOnly";
import InstructorOnly from "./private/InstructorOnly";

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
    },
    
        {
            path: "/dashboard",
            element: <RequiredLogin><DashboardLayout/></RequiredLogin>,
            children: [
                {
                    path: "/dashboard/manage-classes",
                    element: <AdminOnly><ManageClasses/></AdminOnly> 
                },
                {
                    path: "/dashboard/manage-users",
                    element: <AdminOnly><ManageUsers/></AdminOnly>
                },
                {
                    path: "/dashboard/add-class",
                    element: <InstructorOnly><AddClass/></InstructorOnly> 
                },
                {
                    path: "/dashboard/:id/edit",
                    element: <InstructorOnly><EditClass/></InstructorOnly> 
                },
                {
                    path: "/dashboard/my-classes",
                    element: <InstructorOnly><MyClasses/></InstructorOnly>
                }, 
                {
                    path: "/dashboard/selected-classes",
                    element: <SelectedClasses/>
    
                },
                {
                    path: "/dashboard/enrolled-classes",
                    element: <EnrolledClass/>
    
                },
                {
                    path: "/dashboard/payment",
                    element: <Payment/>
                },
                {
                    path: "/dashboard/payment-history",
                    element: <PaymentHistory/>
                }
            ]
        }
    
])

export default Routes