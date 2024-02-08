// import React from 'react';

import orangeLine from "../../assets/orangeLine.png";
import creaditCart from "../../assets/creaditCart.png";
import HomePageBanner from "../../assets/HomePageBanner.png";
import coin from "../../assets/coin.png";
import message from "../../assets/message.png";

import { PiVideoThin } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { RiBarChartLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse  justify-center lg:gap-14 py-5">
  {/**1st  image div */}
  <div className="">
        <div className="relative ">
          {/* Image */}
          <img
            src={HomePageBanner}
            alt=""
            className="lg:w-full w-8/12 mx-auto px-9 lg:px-0 h-auto"
          />

          {/* Texts */}
          <div className="absolute top-4  lg:top-10 left-6 lg:-left-36">
            <div className="opacity-70 flex px-3 items-center bg-slate-100 text-black lg:w-[260px]  lg:h-[80px] rounded-lg border border-[#000000]">
              <div className="">
                <h3>Enter amount</h3>

                <h3 className=" font-bold text-base text-black">$ 450.00 </h3>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-11 lg:-left-20 ">
            <div className="opacity-70 flex px-3 items-center bg-slate-100 text-black lg:w-[130px]  h-[70px] rounded-lg border border-[#000000]">
              <div className="">
                <h3 className="text-[13px]">Total Income</h3>
                <div className="font-bold my-1 flex justify-between items-center ">
                  <h3 className="text-base text-black">$245</h3>
                  <h3>
                    <RiBarChartLine className="text-[#357a60] text-base" />
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[2px] right-8 lg:top-10 lg:-right-20 ">
            <div className="text-white  px-4 py-2">
              <img src={coin} alt="" />
            </div>
          </div>
          <div className="absolute bottom-3 lg:bottom-10 right-10 lg:-right-20">
            <div className="text-white  px-4 py-2">
              <img className="w-[90px] lg:w-[145px] h-[120px] lg:h-[170px]" src={creaditCart} alt="" />
            </div>
          </div>
          <div className="absolute -bottom-9 right-24">
            <div className="text-white  px-4 py-2">
              <img className="w-[60px] h-[60px]" src={message} alt="" />
            </div>
          </div>
        </div>
      </div> 


       {/**2nd  div */}

     
      <div>
        <div className=" w-[329px]  mt-6 lg:mt-0 mx-auto lg:w-[650px]">
          <h3 className="lg:text-[80px]  font-bold lg:leading-[95px] ">
            We’re here to Increase your Productivity and craft your online
            presence
          </h3>

          <img className="my-4 hidden lg:block md:block" src={orangeLine} alt="" />
        </div>
        {/* <div></div> */}
        <div className="lg:w-[656px] w-[300px] mx-auto mt-7">
          <h3 className="text-[18px] font-semibold ">
            Balaj Consulting specializes in IT consulting, digital
            transformation, and software development services. Our focus is on
            providing high-quality, custom-tailored solutions in the realms of
            IT strategy, system integration, cloud services, IT security, and
            software development for businesses undergoing digital
            transformation.
          </h3>
          <div className="lg:flex w-[200px] lg:w-full mx-auto space-y-4 lg:space-y-0 my-5 items-center gap-4">
            <div className="border font-bold border-black flex items-center gap-2   w-[192px] justify-center   h-[45px] rounded-3xl">
              <div className="text-[16px]"> Get a quatation</div>
              <div className="w-9 flex justify-center items-center  h-9 rounded-full bg-[#E28600]    text-white">
                <FiArrowUpRight className="" />
              </div>
            </div>
            <div className="border font-bold border-black flex jus items-center    w-[185px] justify-start  gap-3 h-[45px] rounded-3xl">
              <div className="w-[35px] ml-3 flex justify-center items-center  h-[35px] rounded-full font-bold  text-2xl  text-black">
                <PiVideoThin />
              </div>
              <div className="text-[16px]"> view demo</div>
            </div>
          </div>
        </div>
      </div>

      
       </div>
  );
};

export default Banner;
