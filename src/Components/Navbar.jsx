import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><Link className="font-bold" to={'/'}>Home</Link></li>
        <li><Link className="font-bold" to={'/updateProfile'}>Update Profile</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 mx-auto md:px-32 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost lg:text-2xl font-extrabold">HomelyHub</a>
            </div>
            <div className="navbar-end hidden lg:flex gap-16 mx-10">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>

            </div>
            <div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
               
                </div>
                <a className="btn mx-4">Button</a>
            </div>
        </div>
    );
};

export default Navbar;