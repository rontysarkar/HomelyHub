/* eslint-disable react/no-unescaped-entities */
import { Link,useLocation,useNavigate } from "react-router-dom";
import googleLogo from '../../assets/google.png'
import githubLogo from '../../assets/github.png'
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from 'react-hot-toast'

const Login = () => {
    const {register,handleSubmit} = useForm()
    const { signInWithPopUp,signIn } = useContext(AuthContext)
    const gitProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const {state} = useLocation()
    const Navigate = useNavigate()
    
    
    
    
    // login 
    const onSubmit = (data) =>{
        signIn(data.email,data.password)
        .then(result=>{
            console.log(result.user)
            toast.success(' You have successfully logged in')
            state ? Navigate(state) : Navigate('/')
        })
        .catch(error=>{
            toast.error(error.message.split('/')[1].split(')')[0])
        })
    }




    const handleGithub = () =>{
        signInWithPopUp(gitProvider)
        .then(result=>{
            console.log(result.user)
            state ? Navigate(state) : Navigate('/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleGoogle = () =>{
        signInWithPopUp(googleProvider)
        .then(result=>{
            console.log(result)
            state ? Navigate(state) : Navigate('/')
        })
        .catch(error=>{
            console.log(error)
        })
    }


    return (
        <div className="min-h-screen" >
            <div className=" xl:w-1/4 lg:w-2/4 md:w-3/5 w-4/5  shadow-2xl rounded-xl mx-auto mt-20 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className="text-center text-2xl font-bold">Login </h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="Password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-[#1db2ff] text-white">Login</button>
                    </div>
                    <div className="text-center text-sm p-4 font-semibold">Don't have an account?<Link className="text-[#1db2ff]" to={'/register'}> Register</Link></div>
                </form>
                <h1 className="text-center font-semibold ">Or Login with social platforms</h1>
                <div className="flex justify-center items-center  gap-2 p-4">
                    <img onClick={handleGoogle} className="size-8" src={googleLogo} alt="" />
                    <img onClick={handleGithub} className="size-6" src={githubLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;