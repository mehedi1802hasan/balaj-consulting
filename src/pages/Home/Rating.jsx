import React from "react";
import saly19 from "../../assets/saly19.png";
import star from "../../assets/star.png";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const Rating = () => {
  return (
    <div className="my-16">
      {/**first div */}
      <div className="  lg:flex items-center lg:w-[1200px]  mx-auto justify-between">
        <div className="">
          <img src={saly19} class={saly19} alt="" />
        </div>
        <div className="mt-12">
          <div className="w-[300px] lg:w-[480px] px-8 py-7 lg:leading-[44px] lg:text-[37px] rounded-[20px] lg:rounded-[40px] mx-auto border-[3px] border-[#FF8700] font-bold">
            We can bet on quality of services we <br /> provide
          </div>

          <div className="lg:flex  justify-between items-center mt-7  lg:ml-3 w-[300px] lg:w-full mx-auto lg:mx-auto ">
            <div className=" mt-4 mb-4 lg:-mt-4 ml-5 flex-col flex justify-center items-center " >
              <div>
              <div className="flex  ">
                <IoIosStar className="w-[33px] h-[33px]  text-[#FFC728]" />

                <IoIosStar className="w-[33px] h-[33px]  text-[#FFC728]" />

                <IoIosStar className="w-[33px] h-[33px]  text-[#FFC728]" />

                <IoIosStar className="w-[33px] h-[33px]  text-[#FFC728]" />
                <IoIosStar className="w-[33px] h-[33px]  text-[#FFC728]" />
              </div>
              <div className="">
                <h3 className="text-[23px]  text-[#191A15] font-bold my-5">
                  4.9 / 5 rating
                </h3>
                <h3 className="text-[23px]  text-[#A6A6A6] font-bold">databricks</h3>
              </div>
              </div>
            </div>

            <div className="lg:w-[280px] h-[220px] bg-[#ffffff55] border-2 shadow-2xl flex justify-center items-center">
            <div>
              <p className="text-center text-[21px] text-black font-semibold">Excellent</p>
              <div className="">
                <div className="flex justify-center items-center my-2 gap-1">
                  {" "}
                  <p className="w-[40px] h-[40px] bg-[#219653] flex justify-center items-center">
                    <IoIosStar className="w-[28px] h-[26px]  text-white" />
                  </p>
                  <p className="w-[40px] h-[40px] bg-[#219653] flex justify-center items-center">
                    <IoIosStar className="w-[28px] h-[26px]  text-white" />
                  </p>
                  <p className="w-[40px] h-[40px] bg-[#219653] flex justify-center items-center">
                    <IoIosStar className="w-[28px] h-[26px]  text-white" />
                  </p>
                  <p className="w-[40px] h-[40px] bg-[#219653] flex justify-center items-center">
                    <IoIosStar className="w-[28px] h-[26px]  text-white" />
                  </p>
                  <p className="w-[40px] h-[40px] bg-[#219653] flex justify-center items-center">
                    <IoIosStar className="w-[28px] h-[26px]  text-white" />
                  </p>
                </div>
                <p className="text-[14px] text-center">
                  Based on{" "}
                  <span className="underline font-bold">456 reviews</span>{" "}
                </p>
                <div className="flex items-center font-bold justify-center gap-1 mt-2 text-[16px]">
                  {" "}
                  <p >
                    <IoIosStar  className="w-[25px] h-[24px] text-[#219653]"/>
                  </p>
                  Trustpilot
                </div>
              </div>
              </div> </div>
          </div>
        </div>
      </div>
      {/**second div */}
<div className="lg:flex justify-center items-center -mt-20">
<img className='hidden md:block lg:block  lg:-top-20' src={star} alt="" />

  </div>   
   </div>
  );
};

export default Rating;
