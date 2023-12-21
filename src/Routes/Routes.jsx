import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard/Dashboard";
import CreateNewTask from "../pages/CreateNewTask/CreateNewTask";
import SeePreviousTasks from "../pages/SeePreviousTasks/SeePreviousTasks";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'createNewTask',
                element: <CreateNewTask></CreateNewTask>
            },
            {
                path: 'seePreviousTasks',
                element: <SeePreviousTasks></SeePreviousTasks>
            }
        ]
    },

]);

export default Routes;