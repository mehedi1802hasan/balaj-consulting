import React from "react";
import BigSizeLogo from "../../assets/BigSizeLogo.png";
import { MdOutlineMail } from "react-icons/md";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import { LuPhone } from "react-icons/lu";

const GetInTouch = () => {
  return (
    <div>
      <div className="lg:flex gap-3 mt-28 lg:-mb-28">
        <img
          className="w-[300px] lg:w-[700px] mx-auto md:mx-0 lg:mx-0 h-[250px] lg:h-[510px] "
          src={BigSizeLogo}
          alt=""
        />
        <div className=" mt-3">
          <h3 className="text-[25px] text-center md:text-start lg:text-start lg:text-[45px] text-[#1A1A1A] font-bold">
            Get in touch with us
          </h3>
          <p className="my-9 text-[12px] lg:text-[16px] text-[#858585] w-[310px]  lg:w-[550px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Nisl scelerisque convallis
            iaculis diam. Risus malesuada egestas ut venenatis eget. Faucibus
            habitant porta et..
          </p>
          <div className="md:flex lg:flex  items-center space-y-6 gap-12">
            <div className=" w-[233px] mx-auto md:mx-0 lg:mx-0">
              <p className="flex justify-center md:flex-col lg:flex-col">
                <MdOutlineMail className="text-2xl  text-[#FF8700]" />
              </p>{" "}
              <p className="my-3  text-[16px] text-[#000000] font-bold text-center md:text-start lg:text-start">
                contact@balaj.consulting
              </p>
              <p className="text-[14px] text-[#858585] text-center md:text-start lg:text-start font-bold">
                Email
              </p>
            </div>

            <div className="w-[233px] mx-auto md:mx-0 lg:mx-0 ">
              <p className="flex justify-center md:flex-col lg:flex-col">
                <LuPhone className="text-2xl  text-[#FF8700]" />
              </p>
              <p className="my-3  text-[16px] text-[#000000] font-bold text-center md:text-start lg:text-start">
                +49 162 2360969
              </p>
              <p className="text-[14px] text-[#858585] text-center md:text-start lg:text-start font-bold">
                Phone
              </p>
            </div>
          </div>
          <div className="md:flex lg:flex  items-center  space-y-6 lg:space-y-0 mt-6 lg:mt-3 gap-12">
            <div className="w-[233px] mx-auto md:mx-0 lg:mx-0">
              <p className="flex justify-center md:flex-col lg:flex-col">
                <TiWorld className="text-2xl  text-[#FF8700]" />
              </p>
              <p className="my-3  text-[16px] text-[#000000] font-bold text-center md:text-start lg:text-start">
                balaj.consulting
              </p>
              <p className="text-[14px] text-[#858585] text-center md:text-start lg:text-start font-bold">
                Webiste
              </p>
            </div>

            <div className="w-[233px] mx-auto md:mx-0 lg:mx-0">
              <p className="flex justify-center md:flex-col lg:flex-col">
                <FaMagnifyingGlassLocation className="text-2xl  text-[#FF8700]" />
              </p>{" "}
              <p className="my-3  text-[16px] text-[#000000] font-bold text-center md:text-start lg:text-start">
                Germany
              </p>
              <p className="text-[14px] text-[#858585] text-center md:text-start lg:text-start font-bold">Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
