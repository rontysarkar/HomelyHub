/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import googleLogo from '../../assets/google.png'
import githubLogo from '../../assets/github.png'
import { useForm } from "react-hook-form"

const Register = () => {
    const {register, handleSubmit,} = useForm()
    const onSubmit = (data) => console.log(data)

    const handleGoogle = () =>{
        console.log('google log in ')
    }
    const handleGithub = () =>{
        console.log('Git hub log in ')
    }
    return (
        <div>
           <div className="xl:w-1/4  shadow-2xl rounded-xl mx-auto mt-20 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className="text-center text-2xl font-bold">Register </h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Name</span>
                        </label>
                        <input {...register("Name")} type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Photo Url</span>
                        </label>
                        <input {...register("image")} type="text" placeholder="Photo Url" className="input input-bordered" required />
                    </div>
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
                    <div className="text-center text-xs p-4 font-semibold">Already have an account?<Link className="text-blue-700 font-extrabold" to={'/login'}> Login</Link></div>
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