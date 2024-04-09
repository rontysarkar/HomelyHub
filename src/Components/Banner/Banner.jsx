import img1 from '../../assets/images/singleHouse.jpg'
import img2 from '../../assets/images/town House.jpg'
import img3 from '../../assets/images/student house.png'
import img4 from '../../assets/images/town.jpg'
import img5 from '../../assets/images/vacation.jpg'

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// import required modules
import { Navigation,Autoplay , Pagination,  A11y,EffectCoverflow} from 'swiper/modules';


const Banner = () => {
    return (
        <>
         <Swiper
      // install Swiper modules
      modules={[Navigation,Autoplay, Pagination, A11y,EffectCoverflow]}
      spaceBetween={50}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect="coverflow"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      
    >
          <SwiperSlide><img className='w-full h-[550px] object-cover' src={img1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[550px] object-cover' src={img2} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[550px] object-cover' src={img3} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[550px] object-cover' src={img4} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[550px] object-cover' src={img5} alt="" /></SwiperSlide>
          
        </Swiper>
      </>
    );
};

export default Banner;