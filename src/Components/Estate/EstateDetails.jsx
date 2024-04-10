import { IoHomeOutline, IoLocationOutline, IoPricetag } from "react-icons/io5";
import { useParams, useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const data = useLoaderData();
    const { id } = useParams()
    console.log(id)
    const estate = data?.find(d => d.id == id)
    console.log(estate)
    const { image, estate_title, segment_name, description, price, location, status, area,facilities } = estate




    return (
        <div className="min-h-[90vh]  mt-12 rounded-3xl  ">
            <div className="hero-content flex-col lg:flex-row gap-20  justify-between mx-auto  ">
                <div className="  bg-base-200 lg:h-[712px] w-[90%] lg:w-3/6 flex items-center justify-center rounded-xl ">
                    <img src={image} className=" object-cover rounded-2xl h-[712px] " />
                </div>
                <div className="w-[90%] lg:w-1/2 space-y-4  ">
                    <h1 className="text-4xl font-bold text-[#1db2ff] ">{estate_title}</h1>
                    <h3 className="text-xl font-bold flex items-center  gap-2"><IoPricetag size={18} /><span className='text-[#2E650D]'>{segment_name}</span></h3>
                    <hr />
                    <h2 className="text-lg opacity-80 font-semibold">{description}</h2>
                    <hr />
                    <div className='flex flex-col gap-2 lg:flex-row lg:gap-6 '>
                        <h1 className='flex items-center gap-1 font-medium'> <IoLocationOutline className='text-[#1db2ff] text-xl' />{location}</h1>
                        <h1 className='font-medium flex items-center gap-1 pl-1'> <IoHomeOutline /> {area}</h1>
                        <h4 className='font-semibold  lg:text-[#1db2ff] '>For {status}</h4>
                    </div>
                    <h4 className='font-bold text-lg pl-2 text-[#1db2ff]'>{price}</h4>
                    <div className="flex gap-4 ">
                        <div className="flex items-center gap-4 ">
                            <h1 className="text-xl font-bold">Facilities</h1>
                            {
                            facilities.map(tag => <button key={tag} className='px-2 py-1  bg-[#e7f6fd] rounded-full text-[#1db2ff]'>{tag}</button>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;