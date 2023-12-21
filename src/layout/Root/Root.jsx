import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div><Toaster /></div>
        </div>
    );
};

export default Root;