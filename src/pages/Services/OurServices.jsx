import React from 'react';
import rectangle27 from "../../assets/rectangle27.png";
import rectangle28 from "../../assets/rectangle28.png";
import rectangle29 from "../../assets/rectangle29.png";
import rectangle30 from "../../assets/rectangle30.png";

const OurServices = () => {
    return (
        <div className=' mt-9 md:mt-12 lg:mt-12'>
            <h3 className='font-bold text-center lg:text-[48px]'>Services we provide</h3>
            <p className='text-center lg:text-[18px] font-semibold mt-2'>Enim egestas at massa senectus justo ut. Hac est.</p>
          <div className='mt-7 md:mt-16 lg:mt-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 w-11/12 mx-auto'>

            <div className=' w-[300px] mx-auto lg:w-[610px]' style={{ position: 'relative', backgroundImage: `url(${rectangle27})`, height: '417px' }}>
                <div   style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(255, 252, 248, 0.47)', padding: '20px',borderRadius:'40px 40px 20px 20px', backdropFilter: 'blur(19px)', }}>
                  <div className='my-2 px-4'>
                  <h3 className='lg:text-[24px] text-[#000000] font-bold'>Mobile App Design</h3>
                    <p className='lg:text-[18px] text-[#000000] my-3'>
                        Lorem ipsum dolor sit amet consectetur. Convallis a adipiscing tellus dolor eu. Erat placerat et nulla urna nunc volutpat arcu. Cum tristique consequat euismod eu purus adipiscing eleifend. Eu lorem nunc pretium sit.
                    </p>
                  <div className="flex mb-5 items-center justify-center lg:justify-start gap-2">
                  <button className='w-[157px]  h-[45px] text-center rounded-3xl text-white bg-[#FF8700] font-bold '>contact now</button>
                    <button className=' w-[134px] h-[45px] font-bold text-center border border-[#FF8700] rounded-3xl bg-white text-[#FF8700]' >our work</button>
                  </div>
                  </div>
                </div>
            </div> 




            <div className=' w-[300px]  mx-auto lg:w-[610px]' style={{ position: 'relative', backgroundImage: `url(${rectangle28})`, height: '417px' }}>
                <div   style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(255, 252, 248, 0.47)', padding: '20px',borderRadius:'40px 40px 20px 20px', backdropFilter: 'blur(19px)', }}>
                  <div className='my-2 px-4'>
                  <h3 className='lg:text-[24px] text-[#000000] font-bold'>Website Design</h3>
                    <p className='lg:text-[18px] text-[#000000] my-3'>
                        Lorem ipsum dolor sit amet consectetur. Convallis a adipiscing tellus dolor eu. Erat placerat et nulla urna nunc volutpat arcu. Cum tristique consequat euismod eu purus adipiscing eleifend. Eu lorem nunc pretium sit.
                    </p>
                  <div className="flex mb-5 items-center justify-center lg:justify-start gap-2">
                  <button className='w-[157px]  h-[45px] text-center rounded-3xl text-white bg-[#FF8700] font-bold '>contact now</button>
                    <button className=' w-[134px] h-[45px] font-bold text-center border border-[#FF8700] rounded-3xl bg-white text-[#FF8700]' >our work</button>
                  </div>
                  </div>
                </div>
            </div> 



            <div className=' w-[300px]  mx-auto lg:w-[610px]' style={{ position: 'relative', backgroundImage: `url(${rectangle29})`, height: '417px' }}>
                <div   style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(255, 252, 248, 0.47)', padding: '20px',borderRadius:'40px 40px 20px 20px', backdropFilter: 'blur(19px)', }}>
                  <div className='my-2 px-4'>
                  <h3 className='lg:text-[24px] text-[#000000] font-bold'>Graphic Design</h3>
                    <p className='lg:text-[18px] text-[#000000] my-3'>
                        Lorem ipsum dolor sit amet consectetur. Convallis a adipiscing tellus dolor eu. Erat placerat et nulla urna nunc volutpat arcu. Cum tristique consequat euismod eu purus adipiscing eleifend. Eu lorem nunc pretium sit.
                    </p>
                  <div className="flex  mb-5 items-center justify-center lg:justify-start gap-2">
                  <button className='w-[157px]  h-[45px] text-center rounded-3xl text-white bg-[#FF8700] font-bold '>contact now</button>
                    <button className=' w-[134px] h-[45px] font-bold text-center border border-[#FF8700] rounded-3xl bg-white text-[#FF8700]' >our work</button>
                  </div>
                  </div>
                </div>
            </div>



            <div className=' w-[300px]  mx-auto lg:w-[610px]' style={{ position: 'relative', backgroundImage: `url(${rectangle30})`, height: '417px' }}>
                <div   style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(255, 252, 248, 0.47)', padding: '20px',borderRadius:'40px 40px 20px 20px', backdropFilter: 'blur(19px)', }}>
                  <div className='my-2 px-4'>
                  <h3 className='lg:text-[24px] text-[#000000] font-bold'>Digital Marketing</h3>
                    <p className='lg:text-[18px] text-[#000000] my-3'>
                        Lorem ipsum dolor sit amet consectetur. Convallis a adipiscing tellus dolor eu. Erat placerat et nulla urna nunc volutpat arcu. Cum tristique consequat euismod eu purus adipiscing eleifend. Eu lorem nunc pretium sit.
                    </p>
                  <div className="flex  mb-5 items-center justify-center lg:justify-start gap-2">
                  <button className='w-[157px]  h-[45px] text-center rounded-3xl text-white bg-[#FF8700] font-bold '>contact now</button>
                    <button className=' w-[134px] h-[45px] font-bold text-center border border-[#FF8700] rounded-3xl bg-white text-[#FF8700]' >our work</button>
                  </div>
                  </div>
                </div>
            </div>

          </div>
        </div>
    );
};

export default OurServices;
