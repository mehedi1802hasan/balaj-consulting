import React from "react";
import { FaArrowRight } from "react-icons/fa";
import rectangle128 from "../assets/rectangle128.png";
import ellipse54 from "../assets/ellipse54.png";
import ellipse55 from "../assets/ellipse55.png";
import ellipse56 from "../assets/ellipse56.png";
import ellipse57 from "../assets/ellipse57.png";
import coinicon from "../assets/coinicon.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import X from "../assets/X.png";
import linkedin from "../assets/linkedin.png";


const Footer = () => {
  return (
    <div>
      {/**contack section  */}
      <div className="md:flex lg:flex justify-center mt-10 md:mt:44 items-center lg:gap-14 lg:mt-44 lg:mb-24">
        {/**text part  */}
        <div >
       <div className="w-[260px]  mx-auto md:mx-0 lg:ms-0 md:w-[461px] lg:w-[461px] mt-16 md:mt-36 lg:mt-36">
       <p className="text-[14px] text-center md:text-start lg:text-start md:text-[18px] lg:text-[18px] text-[#000000] font-semibold">
            Everything you need to accept to payment and grow your money of
            manage anywhere on planet
          </p>
          <div className="flex gap-1 items-center my-8 md:justify-start lg:justify-start justify-center ">
            <img src={rectangle128} alt="" /> <img src={rectangle128} alt="" />
          </div>
          <p className="text-[14px] text-center md:text-start lg:text-start md:text-[18px] lg:text-[18px] text-[#000000] font-semibold">
            I am very helped by this E-wallet application , my days are very
            easy to use this application and its very helpful in my life , even
            I can pay a short time 😍
          </p>
          <p className="text-[14px] text-center md:text-start lg:text-start md:text-[18px] lg:text-[18px] text-[#A6A6A6]  my-8 ">_ Aria Zinanrio</p>
       </div>
          <div className="flex items-center gap-3  mt-8 justify-center md:justify-start mb-12 lg:justify-start ">
            <img src={ellipse54} alt="" />
            <img src={ellipse55} alt="" />
            <img src={ellipse56} alt="" />
            <img src={ellipse57} alt="" />
          </div>
        </div>
        {/**contact part  */}
        <div className="w-[352px] mx-auto md:mx-0 lg:ms-0 md:w-[612px] lg:w-[612px] text-white h-[458px] md:h-[558px]  lg:h-[558px] rounded-[20px] flex justify-center items-center bg-[#FF8700]">
          <div className="lg:-mt-8">
          <div className="">
        <img className=' w-[42px]md:w-[72px] lg:w-[72px] mx-auto' src={coinicon} alt="" />
          <h3 className="text-center text-[16px] md:text-[32px] lg:text-[32px] mt-1 mb-2 md:mb-3 lg:mb-3">Get Started</h3>
        </div>
          <div className="w-[280px] md:w-[440px] lg:w-[440px] mx-auto ">
            <div>
              <h3 className=" text-[14px] md:text-[18px] lg:text-[18px] font-semibold">Email</h3>
              <input type="text" className=" text-black w-full mt-1  md:mt-3 lg:mt-3 mb-3 md:mb-4 lg:mb-4 h-[40px] md:h-[45px] lg:h-[50px] rounded-lg px-4" placeholder="enter your email" />
            </div>
            <div><h3 className="text-[14px] md:text-[18px] lg:text-[18px] font-semibold ">Message</h3>
            <input type="text"  className="text-black w-full  my-1 md:my-4 lg:my-4 h-[60px]  md:h-[70px]  lg:h-[80px] rounded-lg px-3" placeholder="write your message "/></div>
            <button className="bg-black  mt-3 md:mt-1 lg:mt-1 w-full h-[60px]  rounded-lg text-center">
              Request Demo
            </button>
          </div>
          </div>
      
        </div>
      </div>

      {/**Footer section  */}
      <footer className="footer   lg:w-[1200px] mx-auto p-5 md:p-8 lg:p-10 mt-9 text-base-content">
        <div className=" w-[200px] lg:w-full mx-auto lg:-mt-11 ">
          <h3 className="  text-[24px] text-center lg:text-[45px] font-bold text-[#FF8700]">
            Balaj Consulting
          </h3>
          <p className=" text-center md:text-start lg:text-start  my-2 md:my-5 lg:my-5  text-[14px] md:text-[18px] lg:text-[18px] text-[#A6A6A6]">
            Get started noew try our product
          </p>
          <div className=" text-center mb-4 md:mb-8 lg:mb-8">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Enter your email here"
              className="input input-bordered input-md md:w-[350px] p-6 lg:rounded-3xl md:rounded-xl h-[35px] lg:h-[58px]"
            />
            <button className=" text-white  rounded-full md:rounded-fullover:bg-blue-500 bg-[#FF8700C8] w-[30px] mx-auto md:w-[50px] lg:w-[50px] h-[30px] md:h-[50px] lg:h-[50px] lg:-ml-[70px] md:-ml-[70px] -ml-[40px]">
              <FaArrowRight className="text-white font-bold flex justify-center items-center w-7 mx-auto" />
            </button>
          </div>
        </div>
        <div className="flex lg:flex-none  justify-between lg:justify-start gap-7 w-[300px] lg:w-full mx-auto md:mx-0 lg:mx-0  lg:gap-24">
       <div className="text-[#A6A6A6]  flex flex-col gap-2 ">
          <a className="link link-hover">Solutions</a>
          <a className="link link-hover">Legal Information</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact us</a>
        </div>
    
  
    <div  className="text-[#A6A6A6]  flex flex-col gap-2">
          <a className="link link-hover">Portfolio</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Testimonials</a>
        </div>
        <div  className="text-[#A6A6A6] ">
          <a className="link link-hover flex items-center gap-1 mb-1"><span><img src={instagram} alt="" /></span> Instagram</a>
          <a className="link link-hover flex items-center gap-1"><span><img src={facebook} alt="" /></span> Facebook</a>
          <a className="link link-hover flex items-center gap-2 font-semibold my-1"><span><img className="bg-black p-1 ml-1 rounded-full" src={X} alt="" /></span> X</a>
          <a className="link link-hover flex items-center gap-1"><span><img src={linkedin} alt="" /></span> LinkedIn</a>
        </div>
    </div>
      
    
      </footer>
    </div>
  );
};

export default Footer;
