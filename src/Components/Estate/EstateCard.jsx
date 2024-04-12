import PropTypes from 'prop-types'
import { IoHomeOutline, IoLocationOutline, IoPricetag } from "react-icons/io5";
import { Link } from 'react-router-dom';


const EstateCard = ({ estate }) => {
    const { id, image, estate_title, segment_name, description, price, location, status, area } = estate
    return (
        <div data-aos="zoom-in-up" data-aos-duration='1000' className=" w-11/12 xl:w-full mx-auto rounded-md shadow-md dark:bg-gray-50 ">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

            <div  className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{estate_title}</h2>
                    <h3 className="text-xl font-bold flex items-center  gap-2"><IoPricetag size={18} /><span className='text-[#2E650D]'>{segment_name}</span></h3>
                    <p className="dark:text-gray-800 opacity-80">{description.slice(0, 120)}......</p>
                    <div className='flex flex-col gap-2 lg:flex-row lg:gap-6 '>
                        <h1 className='flex items-center gap-1 font-medium'> <IoLocationOutline className='text-[#1db2ff] text-xl' />{location}</h1>
                        <h1 className='font-medium flex items-center gap-1 pl-1'> <IoHomeOutline /> {area}</h1>
                        <h4 className='font-semibold  lg:text-[#1db2ff] '>For {status}</h4>
                    </div>
                    <h4 className='font-bold text-lg pl-2 text-[#1db2ff]'>{price}</h4>
                </div>
                <Link data-aos='zoom-in' data-aos-duration='1500' to={`/estateDetails/${id}`} className="btn bg-[#e7f6fd] text-[#1db2ff] " >View Property</Link>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    estate: PropTypes.object
}

export default EstateCard;