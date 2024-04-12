import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import userLogo from '../assets/images/UserLogo.jpg'




const Navbar = () => {
    const { logOut, user, } = useContext(AuthContext)

    const navLinks = <>
        <li><Link className="font-bold" to={'/'}>Home</Link></li>
        <li><NavLink to={'/sale'} className={({ isActive }) => isActive ? 'bg-base-300 font-bold' : 'font-bold'} >For Sale</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'bg-base-300 font-bold' : 'font-bold'} to={'/rent'}>For Rent</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'bg-base-300 font-bold' : 'font-bold'} to={'/contact'}>Contact</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'bg-base-300 font-bold' : 'font-bold'} to={'/updateProfile'}>Update Profile</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'bg-base-300 font-bold' : 'font-bold'} to={'/profile'}>Profile</NavLink></li>
    </>
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className="navbar bg-base-100 mx-auto 2xl:px-32 justify-between shadow-xl ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost lg:text-2xl font-extrabold">HomelyHub</a>
            </div>
            <div className="2xl:navbar-end hidden xl:flex xl:gap-16 2xl:mr-32 ">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navLinks}
                </ul>

            </div>
            {
                <div className=" relative group ">
                    <div>
                        <h1 className="absolute text-sm z-20 bg-[#e7f6fd] text-[#1db2ff] py-1 px-4 rounded-md -left-32 top-3 hidden group-hover:block font-semibold" >{user?.displayName}</h1>
                    </div>

                    {
                        user && <div className={"dropdown dropdown-end"} >
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full">
                                    {
                                        user?.photoURL ? <img alt="Tailwind CSS Navbar component" src={user.photoURL} /> : <img alt="Tailwind CSS Navbar component" src={userLogo} />
                                    }
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={'/profile'} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li onClick={handleLogOut} ><a>Logout</a></li>
                            </ul>

                        </div>
                    }
                    {
                        user ? <Link onClick={handleLogOut} className="btn mx-4  bg-[#1db2ff] text-white">Log Out</Link> : <Link to={'/login'} className="btn mx-4  bg-[#1db2ff] text-white">Login</Link>
                    }

                </div>
            }
        </div>
    );
};

export default Navbar;