import React from 'react';
import projects1 from '../../assets/projects1.png';
import projects2 from '../../assets/projects2.png';
import projects3 from '../../assets/projects3.png';
import projects4 from '../../assets/projects4.png';
import projects5 from '../../assets/projects5.png';
import projects6 from '../../assets/projects6.png';
const OurDoneProjects = () => {
    return (
        <div className=' w-[300px] lg:w-[947px] mx-auto my-20 lg:my-24'>
          <div className='text-center'>
          <p className='text-[13px] text-[#F0899C]'>Our Projects</p>
            <h3 className=' text-[22px] lg:text-[34px] font-bold mb-7'>Latest Project We Have Done</h3>
          </div>
            <div className='grid grid-cols-1 space-y-9 lg:space-y-3 lg:grid-cols-3 '>
                <img src={projects1} alt="" />
                <img src={projects2} alt="" />
                <img src={projects3} alt="" />
                <img src={projects4} alt="" />
                <img src={projects5} alt="" />
                <img src={projects6} alt="" />
            </div>
        </div>
    );
};

export default OurDoneProjects;