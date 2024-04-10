import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Toaster } from 'react-hot-toast'
import Footer from "../Components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Root = () => {
    const { loading} = useContext(AuthContext)

    return (
        <> {
            loading ? <div className=" text-center mt-10 "><span className="loading loading-spinner loading-lg "></span> </div> :<div>
            <ScrollRestoration />
            <Navbar />
            <div className="min-h-[calc(100vh-288px)] ">
                <Outlet />
            </div>
            <Footer />
            <Toaster />

        </div>
        }
        
        </>
    );
};

export default Root;