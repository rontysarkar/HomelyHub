/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import googleLogo from '../../assets/google.png'
import githubLogo from '../../assets/github.png'

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center" >
            <div className="xl:w-1/4  shadow-2xl rounded-xl ">
                <form className="card-body">
                    <h1 className="text-center text-2xl font-bold">Login </h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="text-center text-xs p-4 font-semibold">Don't have an account?<Link className="text-blue-700" to={'register'}> Register</Link></div>
                </form>
                <h1 className="text-center font-semibold ">Or Login with social platforms</h1>
                <div className="flex justify-center items-center  gap-2 p-4">
                    <img className="size-8" src={googleLogo} alt="" />
                    <img className="size-6" src={githubLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;