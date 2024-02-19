import React from 'react';
import CareerImage from '../../assets/CareerImage.png'
const CareerBanner = () => {
    return (
        <div className='w-[330px] lg:w-[1249px] mx-auto my-8 lg:my-28'>
            <img src={CareerImage} alt="" />
        </div>
    );
};

export default CareerBanner;