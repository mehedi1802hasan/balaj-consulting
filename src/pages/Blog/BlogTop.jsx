import React, { useEffect, useState } from "react";
import blogTop from "../../assets/blogTop.png";
import blogTopMan from "../../assets/blogTopMan.png";
import { blogdata } from "../../demodb/blogdata";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';


import  './blogTop.css';
const BlogTop = () => {
  console.log("...", blogdata);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // Number of blogs to display per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogdata.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className=" ">
      <div className="shadow-2xl absolute left-0 right-0 bg-[#FFFFFF] lg:flex  justify-center gap-6 w-[320px]  lg:w-[1170px]  -mt-20 lg:-mt-36 mx-auto">
        <div className="py-7">
          <img
            className="h-[250px] lg:h-[350px] w-full mx-auto  px-3"
            src={blogTop}
            alt=""
          />
        </div>
        <div className="lg:w-[600px]  w-[280px] mx-auto lg:mt-6 pb-5 md:pb-0 lg:pb-0 ">
          <h3 className="text-[#062C30] text-[16px] lg:text-[45px] font-bold lg:leading-[54px] w-auto lg:w-[446px] text-center">
            How to increase productivity
          </h3>
          <p className="text-[#858585] text-[15px] my-5 lg:my-6 lg:leading-7">
            Nec non, et sed semper suspendisse. Sapien, ridiculus euismod varius
            faucibus feugiat et dignissim porta id. Facilisi neque nec id nunc
            massa. Nisl nibh faucibus nunc vel. Vulputate pellentesque fringilla
            orci praesent vel cursus dui. Imperdiet euismod tempus, massa
            rutrum. Gravida augue purus non, cursus quam cum ultricies.
            Pellentesque blandit sit ut magna enim
          </p>
          <div className="flex   items-center gap-5 justify-center lg:justify-start">
            <img src={blogTopMan} alt="" />
            <div className="">
              <h3 className="font-bold text-[#062C30] text-[14px]">
                Jaxson Torff
              </h3>
              <p className="text-[#858585] text-[12px]">Brand Designer.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:pt-[345px] pt-[640px]  lg:w-11/12 mx-auto">
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 lg:gap-y-16  lg:w-[1170px] w-[300px]  mx-auto ">
            {currentPosts.map((blog) => (
              <div className=" w-[310px] mx-auto  lg:mx-0  lg:w-[393px]">
                <img
                  className="h-[210px]  w-[310px] lg:w-[393px]"
                  src={blog.image}
                  alt=""
                />

                <h3 className="text-[#062C30] text-[20px] my-4 font-bold w-11/12">
                  {blog.title}{" "}
                </h3>
                <p className="text-[#858585] text-[15px] mb-4 lg:leading-7">
                  {blog.subtitle}
                </p>
                <div className="flex justify-center md:justify-start lg:justify-start items-center ">
                  <div className="flex  items-center gap-5">
                    <img
                      className="w-[50px] h-[50px] rounded-full"
                      src={blog.authorImage}
                      alt=""
                    />
                    <div className="">
                      <h3 className="font-bold text-[#062C30] text-[14px]">
                        {blog.authorName}{" "}
                      </h3>
                      <p className="text-[#858585] text-[12px]">
                        {blog.profession}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex  justify-center mt-14 ">
          <ResponsivePagination
        
              current={currentPage}
              total={Math.ceil(blogdata.length / postsPerPage)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTop;
