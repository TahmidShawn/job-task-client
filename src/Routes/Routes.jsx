import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard/Dashboard";
import CreateNewTask from "../pages/CreateNewTask/CreateNewTask";
import SeePreviousTasks from "../pages/SeePreviousTasks/SeePreviousTasks";
import PrivateRoutes from "./PrivateRoutes";
import SeeAllTasks from "../pages/SeeAllTasks/SeeAllTasks";
import Update from "../pages/Update/Update";

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
            },
            {
                path: 'update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/task/${params.id}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'createNewTask',
                element: <PrivateRoutes><CreateNewTask></CreateNewTask></PrivateRoutes>
            },
            {
                path: 'seePreviousTasks',
                element: <PrivateRoutes><SeePreviousTasks></SeePreviousTasks></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/task')
            },
            {
                path: 'seeAllTasks',
                element: <PrivateRoutes><SeeAllTasks></SeeAllTasks></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/task')
            },

        ]
    },

]);

export default Routes;