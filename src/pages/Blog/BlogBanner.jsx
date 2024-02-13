import React from 'react';
import backgroundImg from '../../assets/BACKGROUND.png';

const BlogBanner = () => {
    return (
        <div className="relative">
            <div
                className=" h-[500px] lg:h-[713px] flex justify-center items-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                }}
            >
                <div11 className="p-8  w-[340px]  lg:w-[878px] mx-auto">
                    <h3 className="text-[25px] lg:text-[55px] lg:leading-[65px] text-white text-center font-bold">
                        Check out our various blogs for your new knowledge
                    </h3>
                    <p className="text-[14px] lg:text-[16px] text-[#E0E0E0]  lg:w-[650px] my-4 lg:my-8 mx-auto">
                        Varius amet, integer tellus non eget viverra. Ultrices tellus donec
                        gravida id sed senectus dolor cursus sed. Ullamcorper tellus ac cras
                        nec, pretium laoreet duis.
                    </p>
                  <div className='   flex justify-center items-center  '>
                  <button className="text-white h-[60px] w-[150px] lg:w-[192px] mx-auto bg-[#E28600] text-center text-[12px] lg:text-[14px] font-semibold">
                        Discover More
                    </button>
                  </div>
                </div11>
            </div>
        </div>
    );
};

export default BlogBanner;
