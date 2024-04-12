import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";




const UpdateProfile = () => {
    const {user,userProfileUpdate,setUser} = useContext(AuthContext)
    console.log(user)
    const { register, handleSubmit, } = useForm({
        defaultValues:{
            name:user.displayName,
            image:user.photoURL
        }
    })
    const onSubmit = (data) =>{
        console.log(data)
        userProfileUpdate(data.name,data.image)
        .then(result=>{
            console.log(result)
            setUser({displayName : data.name, photoURL : data.image})
            toast.success('Update Your Profile Successfully')
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className=" min-h-[93vh] flex justify-center items-center bg-gradient-to-r from-[#e7f6fd] to-[#1db2ff]">
            <Helmet><title> update profile</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-2/3  xl:w-1/2 h-2/3  bg-white 2xl:pl-80 p-10 lg:p-16  rounded-2xl ">
                <h1 className="lg:text-4xl mb-16 text-[#1db2ff]">Update Profile</h1>
                <div className="space-y-4">
                    <h1 className="text-xl font-bold opacity-80">Full Name</h1>
                    <input {...register("name")} type="text" placeholder="Name"  className=" w-full p-2  " required />
                    <hr className=" border-b-1 border-[#a4dffd] " />
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-bold opacity-80">Email</h1>
                    <input {...register("email")} value={user.email} type="email" placeholder="Email" className="w-full p-2" required />

                    <hr className=" border-b-1 border-[#a4dffd] " />
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-bold opacity-80">Photo Url</h1>
                    <input {...register("image")} type="text" placeholder="Photo Url" className="w-full p-2" />
                    <hr className=" border-b-1 border-[#a4dffd] " />
                </div>
                <button className="btn px-8 bg-[#1db2ff] text-[#e7f6fd]">SAVE</button>

            </form>
        </div>
    );
};

export default UpdateProfile;