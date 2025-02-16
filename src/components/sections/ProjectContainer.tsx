import React from 'react';
import SectionHeading from '../SectionHeading';
import { otherProjectsData } from '@/config/side-data.config';
import { OtherProData } from '@/types/components.types';
import ProjectCard from '../ProjectCardx';

const ProjectListHeading = {
  heading: 'Other Project Showcase',
  description: 'Exploring Diverse Endeavors: A Glimpse into My Varied Project',
};

const ProjectGridContainer = () => {
  return (
    <div className='my-24'>
      <SectionHeading {...ProjectListHeading} />
      <div className='flex flex-wrap gap-4 md:gap-4 justify-center mx-2'>
        {otherProjectsData?.map((data: OtherProData, index) => {
          return <ProjectCard {...data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectGridContainer;
