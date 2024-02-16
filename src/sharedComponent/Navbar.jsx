import React, { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <div className="w-full z-10 relative">
      <div className="mx-auto max-w-[1300px]  font-montserrat    z-10">
        <div className=" navbar flex justify-between items-center">
          <div className=" flex items-center gap-4 font-bold">
            <img className=" w-[100px] h-[100px]" src={logo} alt="" />
          </div>

          <div className="">
            <ul className="menu text-[16px] gap-8 font-monster menu-horizontal px-1 hidden lg:flex md:flex  ">
              <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to="/services">Service</ActiveLink>
              <ActiveLink to="/portfolio">Portfolio</ActiveLink>
              <ActiveLink to="/blog"> Blog</ActiveLink>
              <ActiveLink to="/aboutus">About Us</ActiveLink>
              <ActiveLink to="/contactus">Contact</ActiveLink>
              <ActiveLink to="/"> Career</ActiveLink>
              <ActiveLink to="/">
                <div className="border font-bold border-black flex items-center gap-2 px-3  h-10 -mt-1 rounded-3xl">
                  Get a quatation{" "}
                  <div className="w-7 flex justify-center items-center  h-7 rounded-full bg-[#FF8700]   text-white">
                    <FiArrowUpRight className="" />
                  </div>
                </div>
              </ActiveLink>
            </ul>
            <div className="md:hidden lg:hidden px-3 ">
              <div className="flex items-center gap-2  ">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className="">
                    <IoMdMenu className="text-2xl" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content text-black z-[1] menu lg:p-3  py-5 space-y-2   shadow-2xl  opacity-10 lg:w-32 w-48 px-5 -mr-4 rounded-lg   text-end   font-bold"
                  >
                    <ActiveLink className="text-end flex    justify-end" to="/">
                      Home
                    </ActiveLink>
                    <ActiveLink className="text-start flex  justify-end" to="/services">
                      Service{" "}
                    </ActiveLink>
                    <ActiveLink
                      className="text-start flex  justify-end"
                      to="/portfolio"
                    >
                      Portfolio{" "}
                    </ActiveLink>
                    <ActiveLink
                      className="text-start flex  justify-end"
                      to="/blog"
                    >
                      Blog
                    </ActiveLink>
                    <ActiveLink
                      className="text-start flex   justify-end"
                      to="/aboutus"
                    >
                      About Us
                    </ActiveLink>
                    <ActiveLink className="text-start flex  justify-end" to="/contactus">
                      Contact
                    </ActiveLink>
                    <ActiveLink
                      className="text-start flex  justify-end"
                      to="/dashboard"
                    >
                      Career
                    </ActiveLink>
                    <div
                      className="text-start -mr-3 justify-center   flex border py-[2px] rounded-2xl border-black items-center"
                      to="/" 
                    >
<div  className=" ">                      Get a quatation
</div>                     <div className="w-7 flex justify-center items-center  h-7 rounded-full bg-[#FF8700] ml-2  text-white">
                    <FaArrowRight className="" />
                  </div>
                    </div>
                  </ul>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
