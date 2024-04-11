import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userLogo from '../../assets/images/UserLogo.jpg'
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className=" min-h-[93vh] flex justify-center items-center bg-gradient-to-r from-[#e7f6fd] to-[#1db2ff]">
            <div className="space-y-10   w-1/2 h-2/3 bg-white text-center p-10 lg:p-16 rounded-2xl shadow-2xl my-10">
                <div tabIndex={0} role="button" className="avatar">
                    <div className="lg:w-44 rounded-full mx-auto">
                        {
                            user?.photoURL ? <img alt="Tailwind CSS Navbar component" src={user.photoURL} /> : <img alt="Tailwind CSS Navbar component" src={userLogo} />
                        }
                    </div>
                </div>
                <div className="space-y-4">
                    <p className=" text-xl lg:text-2xl font-bold text-[#1db2ff] ">{user.displayName}</p>
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-bold opacity-80">Email</h1>
                    <p className="lg:text-lg font-semibold text-[#1db2ff] ">{user.email}</p>
                    
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-bold opacity-80">Photo Url</h1>
                    <p className=" text-xs text-red-400 overflow-hidden "><a href="">{user.photoURL}</a></p>
    
                </div>
                <Link to={'/updateProfile'} className="btn  bg-[#1db2ff] text-[#e7f6fd] mx-auto">UPDATE PROFILE</Link>

            </div>
        </div>
    );
};

export default Profile;