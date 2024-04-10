import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import userLogo from '../assets/images/UserLogo.jpg'



const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const navLinks = <>
        <li><Link className="font-bold" to={'/'}>Home</Link></li>
        <li><Link className="font-bold" to={'/updateProfile'}>Update Profile</Link></li>
    </>
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className="navbar bg-base-100 mx-auto xl:px-32 justify-between">
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

                {
                    user && <div title={user.email} className={"dropdown dropdown-end"} >
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full">
                                {
                                    user?.photoURL ? <img alt="Tailwind CSS Navbar component" src={user.photoURL} /> : <img alt="Tailwind CSS Navbar component" src={userLogo} />
                                }
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
                            <li onClick={handleLogOut} ><a>Logout</a></li>
                        </ul>

                    </div>
                }
                {
                    user ? <Link onClick={handleLogOut} className="btn mx-4  bg-[#1db2ff] text-white">Log Out</Link> : <Link to={'/login'} className="btn mx-4  bg-[#1db2ff] text-white">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;