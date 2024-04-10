/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import googleLogo from '../../assets/google.png'
import githubLogo from '../../assets/github.png'
import { useForm } from "react-hook-form"

const Login = () => {
    const {register,handleSubmit} = useForm()
    const onSubmit = (data) => console.log(data)

    const handleGithub = () =>{
        console.log('github')
    }
    const handleGoogle = () =>{
        console.log('google')
    }

    return (
        <div className="min-h-screen" >
            <div className=" xl:w-1/4 lg:w-2/4  shadow-2xl rounded-xl mx-auto mt-20 ">
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
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <div className="text-center text-xs p-4 font-semibold">Don't have an account?<Link className="text-blue-700" to={'/register'}> Register</Link></div>
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