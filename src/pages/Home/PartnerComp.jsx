import React from "react";
import notion from "../../assets/notion.png";
import discord from "../../assets/discord.png";
import slack from "../../assets/slack.png";
import ellipse66 from "../../assets/ellipse66.png";
import ellipse67 from "../../assets/ellipse67.png";
import ellipse68 from "../../assets/ellipse68.png";
import expedia from "../../assets/expedia.png";
import stripe from "../../assets/stripe.png";
import ellipse71 from "../../assets/ellipse71.png";
import nike from "../../assets/nike.png";
import ellipse73 from "../../assets/ellipse73.png";

const PartnerComp = () => {
  return (
    <div className="my-5 w-full">
      {/** --------top part : hr  line------- */}
      <div className="max-w-[1128px] mx-auto ">
        <div className="flex gap-5 justify-center lg:justify-start lg:gap-12 items-center text-sm lg:text-base">
          {" "}
          <p className="border-[#FF870080]  border-y w-[200px]   lg:w-[900px]  " />{" "}
          <h3 className="text-[#FF8700] flex items-center gap-2 font-bold">
            {" "}
            <span>|</span> OUR REACH
          </h3>
        </div>
      </div>
      {/**----- end part:: company names -----------*/}
      <div className="lg:w-[920px] mx-auto">
       <div className="  mt-6 lg:mt-3 mb-6 ">
       <h3 className="text-center text-[22px] lg:text-[40px] font-semibold">Companies we work with</h3>
        <p className="text-center text-[15px] lg:text-lg mt-3 lg:mt-2">
          We have collaborated and worked with over 100+ companies to improve
          and serve their purpose for improving digital presence
        </p>
       </div>
        <div clas>
          <div className="grid grid-cols-3 lg:grid-cols-6 px-2 space-y-5 lg:w-full w-[340px] mx-auto lg:mx-0 ">
            <img src={notion} alt="" />
            <img src={discord} alt="" />
            <img src={slack} alt="" />
            <img src={ellipse66} alt="" />
            <img src={ellipse67} alt="" />
            <img src={ellipse68} alt="" />
          </div>
          <div className=" my-7 lg:my-3 grid grid-cols-3 lg:grid-cols-5 px-16 space-y-5">
            <img src={expedia} alt="" />
            <img src={stripe} alt="" />
            <img src={ellipse71} alt="" />
            <img src={nike} alt="" />
            <img src={ellipse73} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerComp;
