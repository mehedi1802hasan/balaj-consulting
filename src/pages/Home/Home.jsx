import React from 'react';
import Banner from './Banner';
import PartnerComp from './PartnerComp';
import DemoSection from './DemoSection';
import ToolsTechService from './ToolsTechService';
import Rating from './Rating';
import Testimonials from './Testimonials';

const Home = () => {
  return (
  
      <div className='lg:max-w-[1450px] mx-auto'>
      <Banner></Banner>
      <PartnerComp></PartnerComp>
      <DemoSection></DemoSection>
      <ToolsTechService></ToolsTechService>
      <Rating></Rating>
      <Testimonials></Testimonials>
   
  </div>
  );
};

export default Home;