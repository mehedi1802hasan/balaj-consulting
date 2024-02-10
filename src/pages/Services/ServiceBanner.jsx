import React from 'react';
import frame516 from "../../assets/frame516.png"
import frame517 from "../../assets/frame517.png"
import frame518 from "../../assets/frame518.png";
import { FiArrowUpRight } from "react-icons/fi";

const ServiceBanner = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse justify-center items-center gap-1 mx-auto max-w-[1250px]'>
                  {/**images div */}
<div className=' md:flex lg:flex items-center gap-5'>
    <img className='w-[210px] h-[400px] md:h-full lg:h-full' src={frame516} alt="" />
    <img className='my-8 md:my-0 lg:my-0 md:mt-36  lg:mt-36  w-[210px] h-[400px] md:h-full lg:h-full' src={frame517} alt="" />
    <img  className='w-[210px] h-[400px] md:h-full lg:h-full ' src={frame518} alt="" />

</div>
 {/**text div */}
           <div className=' mt-7 w-[310px] mx-auto md:w-[665px] lg:w-[665px] md:-mt-14 lg:-mt-14'>


           <h3 className='lg:text-[75px] text-center md:text-start lg:text-start text-[#191A15] lg:leading-[80px] font-bold relative'>
  We boost the    
  <span className="relative mx-3">
    <span className="lg:bg-yellow-500 absolute bottom-0  w-full h-7"></span>
    <span className="relative z-10">growth</span>
  </span> 
  and turn your 
  <span className="relative mx-3">
    <span className="lg:bg-red-600 absolute bottom-0 left-0 w-full h-7"></span>
    <span className="relative z-10">dreams</span>
  </span> 
  to reality.
</h3>




<p className='lg:text-[18px] text-[#000000] my-3 md:my-6 lg:my-6 font-semibold text-center md:text-start lg:text-start'>Get engaged in collaborative endeavors with diverse businesses to strategize and execute expansive projects, meticulously addressing every aspect to ensure seamless implementation and success.</p>
<div className="border font-bold border-black flex items-center text-white gap-2 bg-[#FF8700] mx-auto md:mx-0 lg:mx-0   w-[162px] justify-center   h-[45px] rounded-3xl">
              <div className="text-[16px]">Learn More</div>
              <div className="w-9 flex justify-center items-center  h-9 rounded-full bg-white    text-[#FF8700]">
                <FiArrowUpRight className="text-sm" />
              </div>
            </div>
           </div>
    
        </div>
    );
};

export default ServiceBanner;