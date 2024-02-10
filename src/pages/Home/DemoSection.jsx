import React from "react";
import frameVideo from '../../assets/frameVideo.png';
import { FiArrowUpRight } from "react-icons/fi";

const DemoSection = () => {
  return (
    <div className="py-5 w-full px-2 lg:px-0">
      {/** --------top part : hr  line------- */}
      <div className="lg:max-w-[1128px] mx-auto mb-12 lg:mb-20 ">
        <div className="flex gap-5 justify-center lg:justify-start lg:gap-12 items-center text-sm lg:text-base">
          {" "}
          <p className="border-[#FF870080]  border-y w-[200px]   lg:w-[900px]  " />{" "}
          <h3 className="text-[#FF8700] flex items-center gap-2 font-bold">
            {" "}
            <span>|</span> OUR SERVICES
          </h3>
        </div>
      </div>

      {/** --------Demo section-----flex-col lg:flex-row-reverse- */}
      <div className="bg-[#FF8700]    lg:w-[1300px] mx-auto h-[600px] rounded-[50px] flex flex-col lg:flex-row-reverse justify-center gap-8 py-5  text-white items-center   ">
      <div className="flex justify-center items-center rounded-3xl">
  <div className=" h-52 w-60 lg:h-[435px] lg:-mt-12 lg:w-[489px]">
    <iframe className="w-full rounded-3xl h-full" src="https://www.youtube.com/embed/rrHrcRMRTtQ" frameBorder="0" allowFullScreen></iframe>
  </div>
</div>

        <div className=" mx-auto lg:mx-0  flex-col justify-center items-center">
          <div className=" w-[300px] lg:w-[632px] text-[30px] lg:text-[64px] lg:leading-[80px] mx-auto   ">
            We are small enough to care big enough to deliver
          </div>
          <div className="flex justify-between items-center w-[300px] mx-auto lg:w-[652px]  ">
          <div>
            <p className="text-[30px] lg:text-[44px] font-semibold text-center"> 20+</p><p className="text-[10px] lg:text-[14px] w-[78px] text-center">BUSINESS CUSTOMERS</p>
          </div>
          <div>
            <p className="text-[30px] lg:text-[44px] font-semibold text-center">  60+</p><p className="text-[10px] lg:text-[14px] w-[78px] text-center">Orders
completed</p>
          </div>
          <div className="-mt-4 lg:mt-0">
            <p className="text-[30px] lg:text-[44px] font-semibold text-center"> 100%</p><p className="text-[10px] lg:text-[14px] w-[78px] text-center">happy 
clients</p>
          </div>
          <div className="lg:mt-5 ">
            <p className=" py-[24px] lg:py-[60px] px-[2px] w-[45px] lg:w-[79px] flex justify-center  mx-auto border border-white rounded-2xl lg:rounded-[99px]"><FiArrowUpRight/></p>
          <p className=" text-[12px] lg:text-[30px]">View Demo</p>
          </div>
          </div>
        </div>


       
      
      </div>
    </div>
  );
};

export default DemoSection;
