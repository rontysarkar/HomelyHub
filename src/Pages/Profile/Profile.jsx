import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userLogo from '../../assets/images/UserLogo.jpg'

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=" min-h-[93vh] flex justify-center items-center bg-gradient-to-r from-[#e7f6fd] to-[#1db2ff]">
            <div className="space-y-10   lg:w-1/2 lg:h-1/2 bg-white text-center  lg:p-16 rounded-2xl shadow-2xl">
                <div tabIndex={0} role="button" className="avatar">
                    <div className="w-44 rounded-full mx-auto">
                        {
                            user?.photoURL ? <img alt="Tailwind CSS Navbar component" src={user.photoURL} /> : <img alt="Tailwind CSS Navbar component" src={userLogo} />
                        }
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-2xl font-bold text-[#1db2ff] ">Ronty Sarkar</p>
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-bold opacity-80">Email</h1>
                    <p className="text-lg font-semibold text-[#1db2ff] ">ronty@gmail.comr</p>
                    
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-bold opacity-80">Photo Url</h1>
                    <p className="text-lg font-semibold text-red-400 "><a href="">imgadsgoshgoherhgeihgegu</a></p>
    
                </div>
                <button className="btn  bg-[#1db2ff] text-[#e7f6fd] mx-auto">UPDATE PROFILE</button>

            </div>
        </div>
    );
};

export default Profile;