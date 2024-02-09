import React from "react";
import businessman from "../../assets/businessman.png";
import { BsCircleFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const Testimonials = () => {
  return (
    <div>
      <h4 className="text-center px-6 md:px-0 lg:px-0 mt-32 md:mt-28 lg:mt-28 font-bold text-[38px] lg:text-[52px]">
        Trusted by over 1000+ customers
      </h4>
      <div className="lg:flex justify-between lg:ml-20 items-center lg:w-[1200px]   mt-7 lg:mt-20 mb-5 lg:mb-9  ">
        <div className=" flex justify-center items-center mx-auto w-7/12 lg:w-auto h-7/12 lg:h-7/12">
          <img className="lg:ml-6 " src={businessman} alt="" />
        </div>
        <div className="w-[260px] mx-auto mt-4 md:mt-0 lg:mt-0 lg:w-[780px]   ">
          <p className="text-[20px] font-semibold text-black">
            “The person who helped me was really nice, patient and helpful. She
            didn't rush anything and made sure that everything was sorted. After
            months of trying to fix my problem it was a relief to see that
            someone was finally taking care of it.”
          </p>
          <div className="lg:flex items-center text-[18px] gap-3  text-[#000000] mt-4 lg:mt-6 mb-5">
            <h3 className="text-center">Client’s name</h3>
            <p className="flex justify-center items-center gap-2">
              <span>
                <BsCircleFill className="text-[#FF8700]" />
              </span>{" "}
              Business/Website name here
            </p>
          </div>
          <hr className="border-[#FF8700] border-[1.5px] w-full mx-auto" />
        </div>
      </div>

  {/*2nd part*/}
      <div className="  flex flex-col lg:flex-row-reverse justify-between lg:ml-20 items-center lg:w-[1200px] mt-8 lg:mt-12 mb-5 lg:mb-9  ">
        <div1 className="  flex justify-center items-center mx-auto w-7/12 lg:w-auto h-7/12 lg:h-7/12">
          <img className="" src={businessman} alt="" />
        </div1>
        <div2 className=" w-[260px] lg:pt-48 mt-4 mx-auto  md:mt-0 lg:mt-0 lg:w-[780px]   ">
          <p className=" text-[20px] font-semibold text-black">
            “The person who helped me was really nice, patient and helpful. She
            didn't rush anything and made sure that everything was sorted. After
            months of trying to fix my problem it was a relief to see that
            someone was finally taking care of it.”
          </p>
          <div className="lg:flex items-center text-[18px] gap-3  text-[#000000] mt-4 lg:mt-6 mb-5">
            <h3 className="text-center">Client’s name</h3>
            <p className="flex justify-center items-center gap-2">
              <span>
                <BsCircleFill className="text-[#FF8700]" />
              </span>{" "}
              Business/Website name here
            </p>
          </div>
          <hr className="border-[#FF8700] border-[1.5px] w-full mx-auto" />

           <div className="lg:w-[550px]  mt-8">
            <h3 className=" text-[35px] text-center lg:text-start lg:text-[50px] lg:leading-[60px] w-full lg:w-11/12  font-bold text-[#191A15]">Our positive reviews do speak, we don’t</h3>
                     
                     
            <div className="border mx-auto lg:mx-0 font-bold border-black flex items-center gap-2 px-3 w-[220px] justify-center  h-10 mt-6 rounded-3xl">
            Read Testimonials{" "}
                  <div className="w-7  flex justify-center items-center  h-7 rounded-full bg-[#FF8700]   text-white">
                    <FiArrowUpRight className="" />
                  </div>       
                     
                     </div>
                     
                     
                     
                        </div>          
         </div2>
      </div>
    </div>
  );
};

export default Testimonials;
