import EstateCard from "./EstateCard";
import { useEffect, useState } from "react";

const Estate = () => {

    const [estates,setEstate] = useState()

    useEffect(() =>{
        fetch('/estateData.json')
        .then(res=>res.json())
        .then(data=> setEstate(data))
    },[])

    
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12 xl:px-32 mx-auto my-10">
            {
               estates?.map(estate=><EstateCard estate = {estate} key={estate.id} />) 
            }
        </div>
    );
};

export default Estate;