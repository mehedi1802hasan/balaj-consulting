import React from "react";

const TotalNumber = () => {
  return (
    <div>
      <div className="lg:flex justify-center gap-10 items-center">
        <div>
          <h3 className="text-[#FF8700]  font-bold text-center lg:text-[45px]">
            100+
          </h3>
          <p className="text-[#858585] mt-1 lg:-mt-2 lg:text-[24px] text-center md:text-start lg:text-start">
            Project Completed
          </p>
        </div>{" "}
        <div className="divider -mt-[1px] w-40 mx-auto lg:divider-horizontal"></div>
        <div>
          <h3 className="text-[#FF8700]  font-bold text-center lg:text-[45px]">
          4+ 
          </h3>
          <p className="text-[#858585] mt-1 lg:-mt-2 lg:text-[24px] text-center md:text-start lg:text-start">
          Award winner
          </p>
        </div>{" "}
        <div className="divider -mt-[1px] w-40 mx-auto lg:divider-horizontal"></div>
        <div>
          <h3 className="text-[#FF8700]  font-bold text-center lg:text-[45px]">
          200+
          </h3>
          <p className="text-[#858585] mt-1 lg:-mt-2 lg:text-[24px] text-center md:text-start lg:text-start">
          Satisfied Client
          </p>
        </div>{" "}
        <div className="divider -mt-[1px] w-40 mx-auto lg:divider-horizontal"></div>
        <div>
          <h3 className="text-[#FF8700]  font-bold text-center lg:text-[45px]">
          300+ 
          </h3>
          <p className="text-[#858585] mt-1 lg:-mt-2 lg:text-[24px] text-center md:text-start lg:text-start">
          Good Testimonials          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default TotalNumber;
