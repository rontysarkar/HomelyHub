import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userLogo from '../../assets/images/UserLogo.jpg'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className=" min-h-[93vh] flex justify-center items-center bg-gradient-to-r from-[#e7f6fd] to-[#1db2ff]">
            <Helmet><title> Profile</title></Helmet>
            <div className="space-y-10   w-1/2 h-2/3 bg-white text-center p-10 lg:p-16 rounded-2xl shadow-2xl my-10">
                <div data-aos='zoom-in' data-aos-duration='1000' tabIndex={0} role="button" className="avatar">
                    <div className="lg:w-44 rounded-full mx-auto">
                        {
                            user?.photoURL ? <img alt="Tailwind CSS Navbar component" src={user.photoURL} /> : <img alt="Tailwind CSS Navbar component" src={userLogo} />
                        }
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-duration='1200' className="space-y-4">
                    <p className=" text-xl lg:text-2xl font-bold text-[#1db2ff] ">{user.displayName}</p>
                </div>
                <div  className="space-y-3">
                    <h1 data-aos='fade-right' data-aos-duration='1400' className="text-xl font-bold opacity-80">Email</h1>
                    <p data-aos='fade-left' data-aos-duration='1600' className="lg:text-lg font-semibold text-[#1db2ff] ">{user.email ? user.email : 'GitHb Account'}</p>
                    
                </div>
                <div  className="space-y-3">
                    <h1 data-aos='fade-right' data-aos-duration='1800' className="text-xl font-bold opacity-80">Photo Url</h1>
                    <p data-aos='fade-left' data-aos-duration='2000' className=" text-xs text-red-400 overflow-hidden "><a href="">{user.photoURL}</a></p>
    
                </div>
                <Link  to={'/updateProfile'} className="btn  bg-[#1db2ff] text-[#e7f6fd] mx-auto">UPDATE PROFILE</Link>

            </div>
        </div>
    );
};

export default Profile;