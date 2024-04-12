import partner1 from '../../assets/images/partner-1.png'
import partner2 from '../../assets/images/partner-2.png'
import partner3 from '../../assets/images/partner-3.png'
import partner4 from '../../assets/images/partner-4.png'
import partner5 from '../../assets/images/partner-5.png'

const Partners = () => {
    return (
        <div className=' xl:px-32 mx-auto my-20'>
            <h1 className='text-3xl text-center font-bold'>Partners of HomelyHub</h1>
            <h1 className='py-2 text-center opacity-80 '>We are pleased to work with our partners</h1>
            <div className=' flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-16 xl:px-32 mx-auto my-10'>
                <div className=" w-72  mx-auto  ">
                    <img className=' avatar object-cover' src={partner1} alt="" />
                </div>
                <div className=" w-72 mx-auto  ">
                    <img className=' ' src={partner2} alt="" />
                </div>
                <div className=" w-72 mx-auto  ">
                    <img className=' ' src={partner3} alt="" />
                </div>
                <div className=" w-72 mx-auto ">
                    <img className=' ' src={partner4} alt="" />
                </div>
                <div className=" w-72 mx-auto  ">
                    <img className=' ' src={partner5} alt="" />
                </div>
                
               
            </div>
        </div>
    );
};

export default Partners;