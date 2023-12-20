import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {

    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/task'>Task</NavLink>

    </>
    return (
        <nav className="navbar bg-[#B3B99F] text-[#1F1A03] px-3">
            <div className="navbar-start">
                <button className="text-3xl font-semibold px-8 py-2 mr-8 hidden lg:inline">QuivVY</button>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FiMenu className="text-2xl" />
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navLinks}
                    </ul>
                </div>
                <div className="hidden z-10 lg:flex">
                    <ul className="menu-horizontal px-1 flex gap-6 text-xl">
                        {navLinks}
                    </ul>
                </div>
            </div>

            <div className="navbar-end">
                <h1>User</h1>
            </div>
        </nav>
    );
};

export default Navbar;