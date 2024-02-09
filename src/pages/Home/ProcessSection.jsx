import React from "react";
import rectangle6 from "../../assets/rectangle6.png";
import discovery from "../../assets/discovery.png";
import plan from "../../assets/plan.png";
import execute from "../../assets/execute.png";
import deliver from "../../assets/deliver.png";
import clarity from "../../assets/clarity.png";

const ProcessSection = () => {
  return (
    <div className="md:max-w-[1260px] lg:max-w-[1220px] mx-auto">
      <div>
        {/** --------top part : hr  line------- */}
        <div className="max-w-[1228px] pt-8  md:pt-28 lg:pt-28 ">
          <div className="  flex gap-5 justify-center lg:justify-start lg:gap-12 items-center text-sm lg:text-base">
            {" "}
            <p className="border-[#FF870080]  border-y w-[200px]   lg:w-[1020px]  " />{" "}
            <h3 className="text-[#FF8700] flex items-center gap-2 font-bold">
              {" "}
              <span>|</span> OUR PROCESS
            </h3>
          </div>
        </div>

        <div className="flex justify-end px-8 md:px-0 lg:px-0  items-center pt-4 md:pt-9 lg:pt-9 ">
          <div className="w-[56px] h-[57px] bg-[#FF8700] rounded-full flex justify-center items-center">
            <img className="" src={clarity} alt="" />
          </div>
        </div>
      </div>

      <div className="md:flex lg:flex justify-center  gap-14 pt-8 md:pt-16 lg:pt-16 ">
        {/**image div */}
        <div className="flex justify-center ">
          <img className="w-[300px] h-[300px] md:w-[952px] md:h-[684px] lg:w-[952px] lg:h-[684px]" src={rectangle6} alt="" />
        </div>

        {/**text div----- */}
        <div className=" mt-8 md:-mt-12 lg:-mt-12">
          <h3 className="text-[#FF8700] text-[26px] md:text-[36px] lg:text-[36px] font-bold w-[302px] mx-auto md:mx-0 lg:mx-0   md:w-[502px] lg:w-[502px] md:leading-[45px] lg:leading-[45px]">
            Experience the Power of Process.
          </h3>
          <p className="text-[#00000080] text-[15px] md:text-[18px] lg:text-[18px] my-3 md:my-5 lg:my-5 w-[350px] md:w-full lg:w-full mx-auto lg:mx-0 md:mx-0 ">
            Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada.
            Tristique est tellus non maecenas in egestas aliquam. Eget dolor
            pellentesque consequat donec lectus nisl ligula. Ut sed nisi amet.
          </p>

          {/**discovery div----- */}
          <div className="flex gap-3 px-3 lg:px-0 md:px-0 md:gap-5 lg:gap-5 justify-center lg:justify-start">
            <div className="bg-[#FCEDEE] rounded-[20px] flex justify-center items-center w-[280px] h-[70px] lg:w-[70px] lg:h-[70px]">
              <img src={discovery} alt="" />
            </div>
            <div className="">
              <p className="text-[#000000]  text-[18px] font-bold">Discovery</p>
              <p className="text-[#00000080] lg:w-[602px] text-[18px] mt-1">
                Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut
                nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam.
                Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu
              </p>
            </div>
          </div>

          {/**plan div----- */}
              <div className="flex gap-3  my-3 px-3 lg:px-0 md:px-0 md:gap-5 lg:gap-5 justify-center lg:justify-start">
            <div className="bg-[#FCEDEE] rounded-[20px] flex justify-center items-center w-[280px] h-[70px] lg:w-[70px] lg:h-[70px]">
              <img src={plan} alt="" />
            </div>
            <div className="">
              <p className="text-[#000000]  text-[18px] font-bold">Plan</p>
              <p className="text-[#00000080] lg:w-[602px] text-[18px] mt-1">
              Tellus, lacus, sem adipiscing ac sem amet. Vitae proin volutpat
                cras tempus vitae. Ipsum consectetur quis diam hendrerit
                pharetra amet scelerisque. Elementum risus aliquam quam etiam.
                Eget eu risus dui lacus, orci. Cras ultricies posuere adipiscing
                faucibu.
              </p>
            </div>
          </div>

          {/**Execute div----- */}
         
              <div className="flex gap-3 px-3 lg:px-0 md:px-0 md:gap-5 lg:gap-5 justify-center lg:justify-start">
            <div className="bg-[#FCEDEE] rounded-[20px] flex justify-center items-center w-[280px] h-[70px] lg:w-[70px] lg:h-[70px]">
              <img src={execute} alt="" />
            </div>
            <div className="">
              <p className="text-[#000000]  text-[18px] font-bold">Execute</p>
              <p className="text-[#00000080] lg:w-[602px] text-[18px] mt-1">
              Congue ridiculus at tortor mattis turpis bibendum at pulvinar
                viverra. Ultrices morbi amet quam nisl risus libero, sodales
                nibh faucibus. Sed gravida elementum auctor fermentum id sem
              </p>
            </div>
          </div>

          {/**Deliver div----- */}
              <div className="flex my-3 gap-3 px-3 lg:px-0 md:px-0 md:gap-5 lg:gap-5 justify-center lg:justify-start">
            <div className="bg-[#FCEDEE] rounded-[20px] flex justify-center items-center w-[280px] h-[70px] lg:w-[70px] lg:h-[70px]">
              <img src={deliver} alt="" />
            </div>
            <div className="">
              <p className="text-[#000000]  text-[18px] font-bold">Deliver</p>
              <p className="text-[#00000080] lg:w-[602px] text-[18px] mt-1">
              Pellentesque id pharetra, semper neque purus. Ante lacinia in ut
                sagittis sed sapien. In facilisi in a diam. Pellentesque arcu
                faucibus vel ornare pulvinar sollicitudin eu. Tempus nisi
                malesuada convallis velit viverra odio. Senectus consectetur
                fames in sed velit, ornare. Sed arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
