import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/**contack section  */}
      <div>
        {/**text part  */}
        <div>
          <h3>Everything you need to accept to payment and grow your money of manage anywhere on planet</h3>
        </div>
        {/**contact part  */}
        <div></div>
      </div>

      {/**Footer section  */}
      <footer className="footer  lg:w-[1200px] mx-auto p-10 mt-9 text-base-content">
        <aside>
          <h3 className=" text-[24px] lg:text-[45px] font-bold text-[#FF8700]">
            Balaj Consulting
          </h3>
          <p className="my-5 text-[18px] text-[#A6A6A6]">
            Get started noew try our product
          </p>
          <div className=" text-center mb-8">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Enter your email here"
              className="input input-bordered input-md md:w-[350px] p-6 lg:rounded-3xl md:rounded-xl h-[58px]"
            />
            <button className="btn btn-md text-white  lg:rounded-full md:rounded-fullover:bg-blue-500 bg-[#FF8700C8] md:w-[50px] lg:w-[50px] h-[50px] lg:-ml-[70px] md:-ml-[70px] -ml-[4px]">
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </aside>
        <nav>
          {/* <h6 className="footer-title">Services</h6>  */}
          <a className="link link-hover">Solutions</a>
          <a className="link link-hover">Legal Information</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact us</a>
        </nav>
        <nav>
          {/* <h6 className="footer-title">Company</h6>  */}
          <a className="link link-hover">Portfolio</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Testimonials</a>
          {/* <a className="link link-hover">Press kit</a> */}
        </nav>
        <nav>
          {/* <h6 className="footer-title">Legal</h6>  */}
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">X</a>
          <a className="link link-hover">LinkedIn</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
