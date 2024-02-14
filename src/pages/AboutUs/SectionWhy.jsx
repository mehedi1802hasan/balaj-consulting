import React from 'react';
import whySectionImg from '../../assets/whySectionImg.png';
import logo from '../../assets/logo.png';
const SectionWhy = () => {
    return (
        <div className='md:flex lg:flex items-center w-[350px] lg:w-[1100px]  my-10 lg:my-28 mx-auto   gap-16'>
         <div className='relative w-[330px] mx-auto lg:mx-0 my-4'>
            <img className='w-[230px] mx-auto h-[240px] lg:w-[393px] lg:h-[450px]' src={whySectionImg} alt="" />
            <img className='absolute w-[80px] lg:w-[131px] h-[80px] lg:h-[131px] lg:-bottom-3 lg:right-0 bottom-2 right-14' src={logo} alt="" />
         </div>
         <div className='w-[330px] mx-auto lg:w-[700px] '>
            <h3 className='text-[#1A1A1A] font-bold text-[20px] text-center lg:text-start md:text-start lg:text-[45px] my-4'>Why do we exist</h3>
            <p className='text-[#858585] w-[300px] lg:w-full mx-auto lg:mx-0 md:mx-0   font-semibold lg:leading-9 text-[10px] lg:text-[16px] '>Lorem ipsum dolor sit amet consectetur. Tincidunt pulvinar elit dignissim risus interdum integer vulputate. Eu dolor risus in ipsum mauris vestibulum enim fermentum. Orci at ipsum sagittis tellus sed. Tellus euismod dictumst pellentesque augue nulla massa. In posuere morbi dictum elit eu quis elementum. Odio dictum massa molestie condimentum. Maecenas lacus pulvinar sit et cras pellentesque mi lorem leo. Quam maecenas aenean vitae aliquam maecenas sit morbi. Magna mauris purus elit vestibulum adipiscing elit dictum. Congue turpis augue fames ultrices tincidunt. Netus gravida volutpat massa tincidunt dolor tellus.
Eget et etiam in fames ornare. Tincidunt imperdiet accumsan ut mi eget quisque. Enim.</p>
         </div>
        </div>
    );
};

export default SectionWhy;