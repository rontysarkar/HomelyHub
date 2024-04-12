import {  useLoaderData } from "react-router-dom";
import EstateCard from "../../Components/Estate/EstateCard";
import { Helmet } from "react-helmet-async";

const ForSale = () => {
    const data = useLoaderData();
    const saleData = data.filter(estate => estate.status === 'Sale')
    return (
        <>
        <Helmet><title>For Sale </title></Helmet>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12 xl:px-32 mx-auto my-10">
            {
               saleData?.map(estate=><EstateCard estate = {estate} key={estate.id} />) 
            }
        </div>
        </>
    );
};

export default ForSale;