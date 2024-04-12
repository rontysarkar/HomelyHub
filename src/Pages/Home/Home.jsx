import Banner from "../../Components/Banner/Banner";
import Estate from "../../Components/Estate/Estate";
import { Helmet } from 'react-helmet-async';
import Partners from "../../Components/Partners/Partners";
const Home = () => {

    return (
        <div>
            <Helmet><title>HomeLyHub || Home</title></Helmet>
            <Banner />
            <div className=" md:w-2/3 mx-auto text-center my-16 space-y-4">
                <h1 data-aos="fade-right" data-aos-duration='1000' className="text-3xl font-semibold text-[#1db2ff]">The Largest Real Estate Marketing Portal in The World</h1>
                <p data-aos='fade-left'data-aos-duration='1000' className="opacity-70">Searching for the perfect place to live on? Well, look no further, as HomeLyHub is here with everything you have been looking for with the largest real estate marketing portal in The World. Whether your concern is an apartment for sale in any Place or property for sale , we have the most desired solution for you. With over 1.5 lac+ listings, 2 lacs+ users, 150 developers over 4 thousand+ new Projects, our web portal guarantee that everything you wish for the perfect living is just a few clicks away!</p>
            </div>
            <Estate/>
            <Partners/>
        </div>
    );
};

export default Home;