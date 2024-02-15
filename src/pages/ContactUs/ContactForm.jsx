import React from 'react';

const ContactForm = () => {
    return (
        <div>
        <div className='w-[350px] md:w-[1259px] lg:w-[1259px] mx-auto '>
          <div className='flex gap-8 items-center mx-12 '>
            <h3 className='text-[#FF8700] text-[24px] py-6    border-b-2 border-[#FF8700]'>Contact us</h3>
            <h3 className='text-[#A3A3A3] text-[24px]'> Work with us</h3>
          </div>
          <div className="divider clear-start -mt-2"></div> 
           <div className='my-20'>
               <h3 className='text-[25px] md:text-[45px] lg:text-[45px] text-[#0A0A0A] font-bold text-center'>Say hello to us !</h3>
               <p className='text-[10px] md:text-[16px] lg:text-[16px]  w-[300px]  md:w-[517px]  lg:w-[517px] mx-auto text-center text-[#858585]'>Write anything you want to say to say hello to us, or you can send an email to <span className='text-[#FF8700]'>contact@balaj.consulting</span> </p>
               <div className='w-[350px]  md:w-[1035px] lg:w-[1035px] mx-auto my-12  '>
               <div className='flex justify-center items-center gap-2 md:gap-5 lg:gap-5 my-7'>
               <input className='w-[165px] md:w-[500px] lg:w-[500px] ps-10  h-[40px]   md:h-[70px]   lg:h-[70px]  input input-bordered' type="text" name="" id="" placeholder='First Name' />
               <input className='w-[165px] md:w-[500px] lg:w-[500px] ps-10  h-[40px]   md:h-[70px]   lg:h-[70px]  input input-bordered' type="text" name="" id="" placeholder='Last Name' />
               </div>
               <div className='flex justify-center items-center gap-2 md:gap-5 lg:gap-5 my-7'>
               <input className='w-[165px] md:w-[500px] lg:w-[500px] ps-10  h-[40px]   md:h-[70px]   lg:h-[70px]  input input-bordered' type="text" name="" id="" placeholder='Phone' />
               <input className='w-[165px] md:w-[500px] lg:w-[500px] ps-10  h-[40px]   md:h-[70px]   lg:h-[70px]  input input-bordered' type="text" name="" id="" placeholder='Email' />
               </div>
               <div className='flex justify-center'>
               <input className=' w-[337px]  md:w-[1016px]  lg:w-[1016px]  ps-10 h-[50px] md:h-[70px]   lg:h-[70px]  input input-bordered' type="text" name="" id="" placeholder='Company or organization' />
               </div>
                   <div className='my-7 flex justify-center'>
                   <textarea  className='w-[337px]  md:w-[1016px]  lg:w-[1016px]   textarea textarea-bordered  ps-10   h-[120px] md:h-[200px] lg:h-[200px] border' type="text" name="" id="" placeholder='Message or description' />
                   </div>
                 <div className='flex justify-end mx-3'>
                 <div className='bg-[#FF8700] w-[100px] md:w-[185px] lg:w-[185px] h-[35px] md:h-[65px] lg:h-[65px] flex justify-center items-center  rounded-[32px]'>
                        <button className='text-white text-[16px] font-semibold'>Send</button>
                    </div>
                 </div>
               </div>
           </div>
        </div>
        </div>
    );
};

export default ContactForm;