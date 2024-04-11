/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import googleLogo from '../../assets/google.png'
import githubLogo from '../../assets/github.png'
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [registerError,setRegisterError] = useState('')
    const [show,setShow] = useState(false)
    const {register,reset, handleSubmit,} = useForm()
    const { createUser,userProfileUpdate,setUser } = useContext(AuthContext)
    const gitProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const { signInWithPopUp} = useContext(AuthContext)
    const Navigate = useNavigate()


    

    // CreateUser with email
    const onSubmit = (data) => {
        if(data.password.length < 6){
            setRegisterError('Password must be at least 6 characters long')
            return
        }

        if(!/(?=.*[A-Z])/.test(data.password)){
            setRegisterError('Must have an Uppercase letter in the password')
            return
        }
        if(!/(?=.*[a-z])/.test(data.password)){
            setRegisterError('Must have a Lowercase letter in the password')
            return
        }


        setRegisterError('')
        createUser(data.email,data.password)
        .then(result=>{
            userProfileUpdate(data.name,data.image)
            .then(result=>{
                setUser({displayName : data.name, photoURL : data.image})
                console.log(result)
            })
            toast.success('You have successfully registered.')
            console.log(result.user)
            reset()
            Navigate('/')
        })
        .catch(error =>{
            
            toast.error(error.message.split('/')[1].split(')')[0])
            console.log(error)
        })
    }



    const handleGoogle = () =>{
        signInWithPopUp(googleProvider)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
       
    }
    const handleGithub = () =>{
        signInWithPopUp(gitProvider)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="min-h-screen mb-10">
           <div className="xl:w-1/4 lg:w-2/4 md:w-3/5  shadow-2xl rounded-xl mx-auto mt-20 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className="text-center text-2xl font-bold">Register </h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Photo Url</span>
                        </label>
                        <input {...register("image")} type="text" placeholder="Photo Url" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type={show ? 'text' : "password"} placeholder="Password" className="input input-bordered" required />

                        {
                            registerError && <p className="text-red-600 mt-3">{registerError}</p>
                        }
                        <div onClick={()=>setShow(!show)} className="absolute right-4 bottom-4 ">
                           {
                             show ? <FaEyeSlash size={20} /> : <FaEye size={20} /> 
                           }
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-[#1db2ff] text-white">Register</button>
                    </div>
                    <div className="text-center text-sm p-4 font-semibold">Already have an account?<Link className="text-[#1db2ff] font-extrabold" to={'/login'}> Login</Link></div>
                </form>
                <h1 className="text-center font-semibold ">Or Register with social platforms</h1>
                <div className="flex justify-center items-center  gap-2 p-4">
                    <img onClick={handleGoogle} className="size-8" src={googleLogo} alt="" />
                    <img onClick={handleGithub} className="size-6" src={githubLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;