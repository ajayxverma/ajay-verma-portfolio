import React from 'react';
import SectionHeading from '../SectionHeading';
import ServiceCard from '../ServiceCard';
import { techStackData } from '@/config/side-data.config';

const ServicesCards = () => {
  const ProjectListHeading = {
    heading: 'My Tech Stack',
  };
  return (
    <div className='py-1' id='tech-stack'>
      <div className='xl:container m-auto px-6 text-gray-500 md:px-12'>
        <SectionHeading {...ProjectListHeading} />
        <ServiceCard techStackData={techStackData} />
      </div>
    </div>
  );
};

export default ServicesCards;
