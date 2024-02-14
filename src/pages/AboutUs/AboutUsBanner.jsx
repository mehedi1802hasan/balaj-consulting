import React from 'react';
import aboutUsBanner from '../../assets/aboutUsBanner.png'

const AboutUsBanner = () => {
    return (
        <div className=' w-[330px] lg:w-[1150px] mx-auto my-12'>
            <img  className='lg:w-[1130px] lg:h-[
            715.94px] lg:rounded-[37px] ' src={aboutUsBanner} alt="" />
        </div>
    );
};

export default AboutUsBanner;