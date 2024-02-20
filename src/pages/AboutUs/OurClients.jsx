import React from "react";
import razorpay from "../../assets/razorpay.png";
import paypal from "../../assets/paypal.png";
import upwork from "../../assets/upwork.png";
import shopify from "../../assets/shopify.png";
import plaid from "../../assets/plaid.png";
import monday from "../../assets/monday.png";
import slack from "../../assets/slack.png";
import spacex from "../../assets/spacex.png";
import squarespace from "../../assets/squarespace.png";
import microsoft from "../../assets/microsoft.png";
import trello from "../../assets/trello.png";
import netflix from "../../assets/netflix.png";
const OurClients = () => {
  return (
    <div>
      <div className="w-[330px] mt-9 lg:w-[1150px] mx-auto">
        <h3 className="text-center font-bold text-[24px] lg:text-[45px] text-[#1A1A1A] ">
          Our satisfied clients
        </h3>
        <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-16  gap-y-4 lg:gap-y-7">
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img  className="w-[90px] lg:w-fit" src={razorpay} alt="" />
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img  className="w-[90px] lg:w-fit" src={plaid} alt="" />
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img  className="w-[90px] lg:w-fit"src={spacex} alt="" />
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img  className="w-[90px] lg:w-fit" src={squarespace} alt="" />
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img  className="w-[90px] lg:w-fit" src={upwork} alt="" />
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img  className="w-[90px] lg:w-fit" src={monday} alt="" />
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img  className="w-[90px] lg:w-fit"src={paypal} alt="" />
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img className="w-[90px] lg:w-fit" src={shopify} alt="" />
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img className="w-[90px] lg:w-fit" src={slack} alt="" />
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img className="w-[90px] lg:w-fit" src={trello} alt="" />{" "}
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img className="w-[90px] lg:w-fit" src={netflix} alt="" />{" "}
          </div>
          <div className="bg-[#F7F7F7] lg:w-[286px] h-[170px] flex justify-center items-center">
            <img className="w-[90px] lg:w-fit" src={microsoft} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
