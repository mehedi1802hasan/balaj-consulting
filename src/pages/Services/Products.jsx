import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import charmCircle from "../../assets/charmCircle.png"
const Products = () => {
  return (
    <div className="w-full mt-12 lg:mt-16">
      <h3 className="lg:text-[56px] text-center font-bold">
        Products/Solutions Ready to Offer
      </h3>
      <p className="lg:text-[20px]  text-center text-[#000000] px-5 lg:px-0 md:px-0 ">
        Here is a catalog of our readily available products and solutions
      </p>
     <div className=" mt-7 lg:mt-11">
     <div className=" flex justify-between items-center mt-9 w-11/12 mx-auto border border-[#FF8700]">
        <div></div>

        <div className="w-[300px] mx-auto lg:mx-0 md:mx-0 lg:w-[570px] py-10">
          <h3 className="lg:text-[35px] font-bold text-[#000000] lg:leading-[45px]">
            Services for German Medical Telematics System
          </h3>
          <p className="text-[#FF8700] text-[18px] my-2  lg:my-4">
            A state-of-the-art system enabling seamless integration of medical
            data.
          </p>
          <div className="font-bold text-[#000000] text-[18px]">
            <h3 className="flex items-center gap-2"> <span><img src={charmCircle} alt="" /></span>Real-time data access</h3>
            <h3 className="flex items-center gap-2"> <span><img src={charmCircle} alt="" /></span>  Encrypted security</h3>
            <h3 className="flex items-center gap-2"> <span><img src={charmCircle} alt="" /></span>Cloud storage</h3>
          </div>
          <div className="flex items-center gap-5 mt-2  lg:mt-5">
            <button className=" rounded-3xl lg:rounded-[50px] w-[265px] h-[35px] lg:h-[55px] text-[8px] lg:text-[18px] font-bold bg-[#FF8700] text-[#000000] flex justify-center items-center  gap-2 px-3  lg:gap-5">
              <span>Contact For Pricing</span> <FiArrowUpRight />{" "}
            </button>
            <p className="lg:w-[289px] text-[15px] text-[#000000]">
              One-time purchase or monthly subscription Available
            </p>
          </div>{" "}
        </div>
        
      </div>
      <div className=" flex justify-between items-center mt-9 w-11/12 mx-auto border border-[#FF8700]">
        <div></div>

        <div className="w-[300px] mx-auto lg:mx-0 md:mx-0 lg:w-[570px] py-10">
          <h3 className="lg:text-[35px] font-bold text-[#000000] lg:leading-[45px]">
            Services for German Medical Telematics System
          </h3>
          <p className="text-[#FF8700] text-[18px] my-2  lg:my-4">
            A state-of-the-art system enabling seamless integration of medical
            data.
          </p>
          <div className="font-bold text-[#000000] text-[18px]">
            <h3 className="flex items-center gap-2"> <span><img src={charmCircle} alt="" /></span>Intrusion detection</h3>
            <h3 className="flex items-center gap-2"> <span><img src={charmCircle} alt="" /></span>Automatic updates</h3>
            <h3 className="flex items-center gap-2"> <span><img src={charmCircle} alt="" /></span>24/7 monitoring</h3>
          </div>
          <div className="flex items-center gap-5 mt-2  lg:mt-5">
            <button className=" rounded-3xl lg:rounded-[50px] w-[265px] h-[35px] lg:h-[55px] text-[8px] lg:text-[18px] font-bold bg-[#FF8700] text-[#000000] flex justify-center items-center  gap-2 px-3  lg:gap-5">
              <span>Contact For Pricing</span> <FiArrowUpRight />{" "}
            </button>
            <p className="lg:w-[289px] text-[15px] text-[#000000]">
              One-time purchase or monthly subscription Available
            </p>
          </div>{" "}
        </div>
      
      </div>




      <div className=" flex justify-between items-center mt-9 w-11/12 mx-auto border border-[#FF8700]">
        <div></div>

        <div className="w-[300px] mx-auto lg:mx-0 md:mx-0 lg:w-[570px] py-10">
          <h3 className="lg:text-[35px] font-bold text-[#000000] lg:leading-[45px]">
            Services for German Medical Telematics System
          </h3>
          <p className="text-[#FF8700] text-[18px] my-2  lg:my-4">
            A state-of-the-art system enabling seamless integration of medical
            data.
          </p>
          <div className="font-bold text-[#000000] text-[18px]">
            <h3 className="flex items-center gap-2"> <span><img src={charmCircle} alt="" /></span>Scalable solutions</h3>
            <h3 className="flex items-center gap-2"> <span><img src={charmCircle} alt="" /></span>customizable as per facility needs</h3>
           
          </div>
          <div className="flex items-center gap-5 mt-2  lg:mt-5">
            <button className=" rounded-3xl lg:rounded-[50px] w-[265px] h-[35px] lg:h-[55px] text-[8px] lg:text-[18px] font-bold bg-[#FF8700] text-[#000000] flex justify-center items-center  gap-2 px-3  lg:gap-5">
              <span>Contact For Pricing</span> <FiArrowUpRight />{" "}
            </button>
            <p className="lg:w-[289px] text-[15px] text-[#000000]">
              One-time purchase or monthly subscription Available
            </p>
          </div>{" "}
        </div>
        
      </div>
     </div>
     <p className=" w-[310px] text-[12px] mt-5 lg:mt-12  lg:w-[690px] mx-auto lg:text-[20px] text-[#000000] text-center">For more details and to explore our complete range of products and solutions, please contact our sales team</p>
    </div>
  );
};

export default Products;
