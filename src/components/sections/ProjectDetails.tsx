'use client';
import { ProjectType } from '@/types/components.types';
import React, { useEffect, useState } from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import SectionHeading from '../SectionHeading';
import { featuredProjectData } from '@/config/side-data.config';
import CarouselImage from '../CarouselComponent';

export const ProjectImage = (projectData: ProjectType) => {
  return <CarouselImage images={projectData.images} />;
};

export const ProjectInfo = (projectData: ProjectType) => {
  return (
    <div className='sm:p-2 sm:pl-0 sm:w-4/6 flex flex-col justify-between'>
      <span className='mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0'>
        {projectData.endDate}
      </span>
      <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
        {projectData.heading}
      </h3>
      <p className='my-6 text-gray-600 dark:text-gray-300'>{projectData.description}</p>

      <div className='flex gap-2 flex-wrap'>
        {projectData?.techUsed?.map((tech, index) => {
          return (
            <a
              key={index}
              href='#'
              className='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'
            >
              {tech}
            </a>
          );
        })}
      </div>
      <div className='my-4 flex justify-between'>
        <a
          href={projectData.demoLink}
          className='hover:-translate-y-1 flex gap-6 items-center opacity-0 justify-between dark:text-gray-300 text-gray-800 hover:text-primary-500 group-hover:opacity-100 transition 	transition-duration: 200ms; ease-in-out '
        >
          <span className='text-sm -translate-x-4 transition duration-300 group-hover:translate-x-0 font-bold'>
            Demo
          </span>
          <VscLinkExternal
            size={10}
            className='w-5 h-5 -translate-x-4 text-2xl opacity-0 fill-current transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
          />
        </a>

        <a
          href={projectData.gitHubLink}
          className='hover:-translate-y-1 flex gap-6 items-center opacity-0 justify-between dark:text-gray-300 text-gray-800 hover:text-primary-500 group-hover:opacity-100 transition 	transition-duration: 200ms; ease-in-out '
        >
          <span className='text-sm translate-x-4 transition duration-300 group-hover:translate-x-0 font-bold'>
            Github
          </span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
          >
            <path
              fillRule='evenodd'
              d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectListHeading = {
  heading: 'Featured Projects',
  description: 'Discovering Innovation: Showcasing Pioneering Projects and Technical Expertise',
};

const ProjectsDetails = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='my-24' id='works'>
      <div className='container m-auto px-2 text-gray-600 md:px-12 xl:px-6'>
        <SectionHeading {...ProjectListHeading} />
        <div className='lg:w-10/12 xl:w-4/4 lg:mx-auto flex-wrap'>
          {featuredProjectData.map((project, index) => {
            return (
              <div
                key={index}
                className='group relative hover:z-[2] sm:-mx-8 p-4 sm:p-8  rounded-3xl bf  border border-transparent hover:border-gray-100 dark:hover:border-gray-700 dark:hover:bg-transparent shadow-2xl shadow-transparent hover:shadow-gray-600/10 dark:hover:shadow-blue-400/20 bg-inherit sm:gap-8 sm:flex sm:items-center transition duration-300 backdrop-filter backdrop-blur-2xl bg-opacity-5 hover:shadow-2xl dark:backdrop-blur-3xl dark:bg-opacity-30'
              >
                {project.imageOnRight || isMobile ? (
                  <>
                    <ProjectInfo {...project} />
                    <ProjectImage {...project} />
                  </>
                ) : (
                  <>
                    <ProjectImage {...project} />
                    <ProjectInfo {...project} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
