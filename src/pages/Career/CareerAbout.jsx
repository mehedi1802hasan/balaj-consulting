import React from "react";
import { FiUser } from "react-icons/fi";
import { TiWorld } from "react-icons/ti";
import { MdMedicalInformation } from "react-icons/md";

const CareerAbout = () => {
  return (
    <div className="w-[330px] lg:w-[1249px] mx-auto my-8 lg:my-28">
      <div className=" lg:flex gap-10">
        <div className=" w-[200px] lg:w-[347px] mx-auto lg:mx-0 md:mx-0 ">
          <div className="flex items-center gap-5">
            <div className="w-[65px] h-[65px] flex justify-center items-center bg-[#F0F0F0] rounded-full">
              <FiUser className="text-3xl text-[#FF8700]" />
            </div>
            <div>
              <h3 className="text-[20px] font-bold lg:text-[40px] text-[#FF8700]">
                120
              </h3>
              <p className="text-[12px] lg:text-[22px] text-[#858585]">
                Diverse Team
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 my-5">
            <div className="w-[65px]  h-[65px] flex justify-center items-center bg-[#F0F0F0] rounded-full">
              <TiWorld className="text-3xl text-[#FF8700]" />
            </div>
            <div>
              <h3 className="text-[20px] font-bold lg:text-[40px] text-[#FF8700]">
                16
              </h3>
              <p className="text-[12px] lg:text-[22px] text-[#858585]">
                Offices Worldwide
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 ">
            <div className="w-[65px] h-[65px] flex justify-center items-center bg-[#F0F0F0] rounded-full">
              <MdMedicalInformation className="text-3xl text-[#FF8700]" />
            </div>
            <div>
              <h3 className="text-[20px] font-bold lg:text-[40px] text-[#FF8700]">
                54
              </h3>
              <p className="text-[12px] lg:text-[22px] text-[#858585]">
                Roles available
              </p>
            </div>
          </div>
        </div>

        <div className="w-[250px] lg:w-[830px] mx-auto lg:mx-0 md:mx-0  mt-5 md:mt-0 lg:mt-0">
          <h3 className="text-[#1A1A1A] font-bold text-[22px] lg:text-[45px] lg:leading-[60px] ">
            We work together and create something great
          </h3>
          <p className="my-7  text-[10px] lg:text-[16px] text-[#858585]">
            Ornare egestas ac ac vel tempus vestibulum. Diam praesent sit a
            aenean tellus, ultrices sed. Pulvinar enim lorem amet, nunc lorem
            pharetra et magna. Ultrices id tincidunt ipsum amet. Lectus elit
            diam egestas ullamcorper tellus pellentesque. Dictumst neque nunc
            dui nisl, orci tincidunt donec consectetur at
            <br />
            <br />
            Pellentesque fames dignissim ullamcorper ultricies. Sit mattis at
            mollis ipsum at. Suspendisse commodo id scelerisque mattis pretium,
            posuere nullam quam. Fringilla velit et et lacus, ultricies urna
            lorem tellus integer.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerAbout;
