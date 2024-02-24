import React from "react";
import reacticon from '../../assets/reactjsicon.png';
import wordpress from '../../assets/wordpress.png';
import node from '../../assets/node.png';
import aws from '../../assets/aws.png';
import html from '../../assets/html.png';
import vuejs from '../../assets/vuejs.png';
import typescript from '../../assets/typescript.png';
import mysql from '../../assets/mysql.png';
import notionicon from '../../assets/notionicon.png';
import php from '../../assets/php.png';
import settingicon from '../../assets/settingicon.png';
import androidicon from '../../assets/androidicon.png';
import cloudicon from '../../assets/cloudicon.png';
import { MdNavigateNext } from "react-icons/md";



const ToolsTechService = () => {
  return (
    <div>
      {/**  Tools and tech  div */}
      <div className="py-1 lg:py-6">
        <div className="lg:flex items-center   justify-center lg:gap-14 py-5 ">
            <h3 className="font-bold text-[20px] lg:text-[50px] lg:w-[364px] w-full text-center lg:text-start  lg:leading-[60px]">Our Tools and Tech Stack</h3>
            <h3 className="text-[12px]  lg:text-base my-2 lg:my-0 lg:w-[441px] px-9 lg:px-0 text-[#A6A6A6]">We offer a variety of interesting Tools and Tech Stack that you can help increase yor productivity at work and manage your project easily</h3>
            <button className="w-[162px] mx-auto lg:mx-0 mt-4 lg:mt-0 text-base  h-[45px] lg:h-[66px] rounded-[70px] text-white bg-[#FF8700] flex justify-center items-center"><>Get Started</></button>
        </div>
        <div className="w-[250px]   lg:w-full mx-auto ">
        <div className="grid grid-cols-3 gap-20 lg:gap-2 justify-center lg:grid-cols-1 lg:flex lg:justify-between my-6">
        <img src={reacticon} alt="" />
        <img src={wordpress} alt="" />
        <img src={node} alt="" />
        <img src={aws} alt="" />
        <img src={html} alt="" />
        <img src={vuejs} alt="" />
        <img src={typescript} alt="" />
        <img src={mysql} alt="" />
        <img src={notionicon} alt="" />
        <img src={php} alt="" />
    </div>
    </div>
      </div>

      {/**  services div */}
      <div className="mt-4 lg:mt-7">
        <h3 className="  text-[20px] px-4 lg:px-0 lg:w-[1230px]  text-center mx-auto lg:text-[38px] text-[#000000] ">Crafting Tomorrow: Innovate Today with Our IT Solutions Expertise</h3>
        <div className= "mt-8 lg:mt-14 w-[300px] space-y-7 lg:space-y-0 lg:w-[960px] mx-auto lg:flex justify-between items-center">
            {/** 1st card */}

            <div className="border-[3px]  rounded-[35px] lg:rounded-[35px]  py-3 px-6  border-[#FF8700]">
                <img  className="w-[64px]  mx-auto mt-6 mb-3" src={settingicon} alt="" />
                <p className="text-center text-[#000000] text-[22px] lg:text-[24px] font-semibold mb-3">Web Development</p>
                <p className=" font-semibold text-[17px] lg:text-[20px]  w-[237px] mx-auto my-5 ">“We craft and excel in providing professional web development services ”</p>
                <div className="flex justify-between items-center  px-4   w-[] "><h3 className="font-semibold text-[18px] lg:text-[20px]">Explore</h3>
                <button className="w-[40px] h-[40px] rounded-full bg-[#FF8700] flex justify-center items-center "><MdNavigateNext  className="text-black"/>
</button></div>
            </div>
            {/** 2nd card */}

            <div className="border-[3px] rounded-[35px] lg:rounded-[35px] py-3 px-6 border-[#FF8700]">
                <img  className="w-[64px]  mx-auto mt-6 mb-3" src={androidicon} alt="" />
                <p className="text-center text-[#000000] text-[22px] lg:text-[24px] font-semibold">Android Development</p>
                <p className=" font-semibold text-[17px] lg:text-[20px]  w-[238px] mx-auto mt-[5px] mb-1 ">“We craft android apps according to your needs and competitive interfaces with complex functionalities ”</p>
                <div className="flex justify-between items-center  px-4  w-[] "><h3 className="font-semibold text-[18px] lg:text-[20px]">Explore</h3>
                <button className="w-[40px] h-[40px] rounded-full bg-[#FF8700] flex justify-center items-center "><MdNavigateNext  className="text-black"/>
</button></div>

{/** 3rd card */}
            </div>
            <div className="border-[3px] rounded-[35px] lg:rounded-[35px] py-3 px-6 border-[#FF8700]">
                <img  className="w-[64px]  mx-auto mt-6 mb-3" src={cloudicon} alt="" />
                <p className="text-center text-[#000000] text-[22px] lg:text-[24px] font-semibold">Cloud Services</p>
                <p className=" font-semibold text-[17px]  lg:text-[20px]  w-[237px] mx-auto my-5">“We host and provide end to end CI / CD pipelines for continuos deployment ”</p>
                <div className="flex justify-between items-center  px-4 mt-4  w-[] "><h3 className="font-semibold text-[18px] lg:text-[20px]">Explore</h3>
                <button className="w-[40px] h-[40px] rounded-full bg-[#FF8700] flex justify-center items-center "><MdNavigateNext  className="text-black"/>
</button></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsTechService;
