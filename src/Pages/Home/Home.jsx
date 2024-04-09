import Banner from "../../Components/Banner/Banner";
import Estate from "../../Components/Estate/Estate";

const Home = () => {

    return (
        <div>
            <Banner />
            <div className=" md:w-2/3 mx-auto text-center my-16 space-y-4">
                <h1 className="text-3xl font-semibold">The Largest Real Estate Marketing Portal in The World</h1>
                <p>Searching for the perfect place to live on? Well, look no further, as HomeLyHub is here with everything you have been looking for with the largest real estate marketing portal in The World. Whether your concern is an apartment for sale in any Place or property for sale , we have the most desired solution for you. With over 1.5 lac+ listings, 2 lacs+ users, 150 developers over 4 thousand+ new Projects, our web portal guarantee that everything you wish for the perfect living is just a few clicks away!</p>
            </div>
            <Estate/>
        </div>
    );
};

export default Home;