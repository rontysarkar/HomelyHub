import EstateCard from "./EstateCard";
import useData from "../../Hooks/useData";

const Estate = () => {

    const estates = useData()

    
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12 xl:px-32 mx-auto my-10">
            {
               estates?.map(estate=><EstateCard estate = {estate} key={estate.id} />) 
            }
        </div>
    );
};

export default Estate;