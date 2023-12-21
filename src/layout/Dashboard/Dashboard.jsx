import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col m-5">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <img src={user?.photoURL} className="w-20 h-20 mx-auto rounded-full mb-3" alt="" />
                        <Link to='/'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">Home</button>
                        </Link>
                        <Link to='createNewTask'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">Create New Task</button>
                        </Link>
                        <Link to='seePreviousTasks'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">See Previous Tasks</button>
                        </Link>
                        <Link to='seeAllTasks'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">See All Tasks</button>
                        </Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;