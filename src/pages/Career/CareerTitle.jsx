import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const CareerTitle = () => {
    return (
        <div>
                <div className='w-[250px] lg:w-[842px] mx-auto my-5 lg:my-10'>
       <h3 className='text-center text-[20px] md:text-[55px] lg:text-[55px] lg:leading-[70px]  lg:mx-16 font-bold text-[#000000]'>Find a role that suits you, and join us</h3>
       <p className='text-[12px] w-[250px] lg:w-[620px] my-2 lg:my-6 lg:leading-8 font-semibold  text-center mx-auto lg:text-[16px] text-[#000000]' >Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed. Ullamcorper tellus ac cras nec, pretium laoreet duis.  </p>
      
       <div className='flex justify-center '>
      <div className="border font-bold border-black flex items-center text-white  bg-[#FFFFFF] mx-auto md:mx-0 lg:mx-0   w-[150px] lg:w-[200px]  justify-center gap-3   h-[37px] lg:h-[48px] rounded-[26px]">
              <div className="text-[11px] lg:text-[16px] text-black">Discover More</div>
              <div className=" w-6 lg:w-9 flex justify-center items-center  h-6 lg:h-9 rounded-full bg-[#FF8700]    text-white">
                <FiArrowUpRight className="text-sm" />
              </div>
            </div>
      </div>
        </div>
        </div>
    );
};

export default CareerTitle;