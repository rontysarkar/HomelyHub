import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Toaster } from 'react-hot-toast'
import Footer from "../Components/Footer/Footer";


const Root = () => {

    return (
        <div>
            <ScrollRestoration />
            <Navbar />
            <div className="min-h-[calc(100vh-288px)] ">
                <Outlet />
            </div>
            <Footer />
            <Toaster />

        </div>
    );
};

export default Root;