import React from 'react';
import TitleBanner from './TitleBanner';
import AboutUsBanner from './AboutUsBanner';
import TotalNumber from './TotalNumber';
import SectionWhy from './SectionWhy';
import OurClients from './OurClients';
import OurTeam from './OurTeam';
import OurProcess from './OurProcess';

const AboutUs = () => {
    return (
        <div>
<TitleBanner></TitleBanner>    
<AboutUsBanner></AboutUsBanner> 
<TotalNumber></TotalNumber>
<SectionWhy></SectionWhy>
<OurClients></OurClients>
<OurTeam></OurTeam>
<OurProcess></OurProcess>
   </div>
    );
};

export default AboutUs;