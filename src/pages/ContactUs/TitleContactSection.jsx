import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const TitleContactSection = () => {
    return (
        <div className='lg:w-[842px] mx-auto my-10'>
       <h3 className='text-center text-[55px] lg:leading-[70px] font-bold text-[#FF8700]'>Contact us to give a project or just say hello! 👋</h3>
       <p className='w-[570px] my-6 lg:leading-8 font-semibold border text-center mx-auto text-[16px] text-[#000000]' >Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed. Ullamcorper tellus ac cras nec, pretium laoreet duis. </p>
      
       <div className='flex justify-center '>
      <div className="border font-bold border-black flex items-center text-white  bg-[#FFFFFF] mx-auto md:mx-0 lg:mx-0   w-[150px] lg:w-[200px]  justify-center gap-3   h-[37px] lg:h-[48px] rounded-[26px]">
              <div className="text-[11px] lg:text-[16px] text-black">Contact us</div>
              <div className=" w-6 lg:w-9 flex justify-center items-center  h-6 lg:h-9 rounded-full bg-[#FF8700]    text-white">
                <FiArrowUpRight className="text-sm" />
              </div>
            </div>
      </div>
        </div>
    );
};

export default TitleContactSection;