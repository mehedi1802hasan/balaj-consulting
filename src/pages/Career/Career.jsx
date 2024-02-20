import React from 'react';
import CareerTitle from './CareerTitle';
import CareerBanner from './CareerBanner';
import CareerAbout from './CareerAbout';
import JobVacancy from './JobVacancy';

const Career = () => {
    return (
        <div>
            <CareerTitle></CareerTitle>
            <CareerBanner></CareerBanner>
            <CareerAbout></CareerAbout>
            <JobVacancy></JobVacancy>
        </div>
    );
};

export default Career;