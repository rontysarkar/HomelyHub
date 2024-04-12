import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Toaster } from 'react-hot-toast'
import Footer from "../Components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Root = () => {
    

    return (
        <> 
            <ScrollRestoration />
            <Navbar />
            <div className="min-h-[calc(100vh-288px)] ">
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </>
    );
};

export default Root;