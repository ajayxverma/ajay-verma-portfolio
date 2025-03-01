import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import { RiArrowRightDoubleFill } from 'react-icons/ri';
import { OtherProData } from '@/types/components.types';

const ProjectCard = (OtherProData: OtherProData) => {
  return (
    <div className='flex flex-col justify-center duration-500 hover:-translate-y-2 ease-in-out backdrop-filter backdrop-blur-2xl bg-opacity-5 hover:shadow-2xl dark:backdrop-blur-3xl dark:bg-opacity-30 '>
      <div className='group h-full flex flex-col justify-between px-4 pb-4 overflow-hidden text-left align-bottom transition-all transform border-solid border-[1px] border-gray-100 dark:border-gray-900 border-1 rounded-lg hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:shadow-blue-400/20 dark:bg-inherit sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
        <div>
          {/* <img
              className="object-cover w-full h-48 rounded-md"
              src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            /> */}
          <div className='mt-4 text-start'>
            <a
              href={OtherProData.demoLink}
              target='blank'
              className='font-medium cursor-pointer leading-6 text-gray-800 capitalize dark:text-white flex justify-between items-center group-hover:text-primary-800'
              id='modal-title'
            >
              {OtherProData.title}
              <VscLinkExternal
                size={20}
                className='hover:fill-primary-800 hover:z-[1] hover:translate-y-[-4] hover:shadow-neutral-100'
              />
            </a>

            <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
              {OtherProData.description}
            </p>
          </div>
        </div>

        {/*       <div className="flex items-center justify-center mt-4">
            <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-500 rounded-full "></button>
            <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full "></button>
            <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full "></button>
            <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full "></button>
          </div> */}
        <div>
            <div
            className='flex gap-2 my-2 overflow-x-auto scrollbar-none hover:scrollbar-default [&::-webkit-scrollbar]:h-2  [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'
            >
            {OtherProData.techUsed.map((tech, index) => {
              return (
              <a
              key={index}
              href='#'
              className='px-3 py-1 w-auto rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'
              >
              {tech}
              </a>
              );
            })}
            </div>
          <a
            href={OtherProData.gitHubLink}
            target='_blank'
            className='flex items-center opacity-0 justify-between group-hover:text-primary-500 group-hover:opacity-100 transition 	transition-duration: 200ms; ease-in-out '
          >
            <span className='text-sm'>Github</span>
            <RiArrowRightDoubleFill size={20} />
          </a>
        </div>

        {/*  <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
            <button className="w-full px-1 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
              Github
            </button>

            <button className="w-full px-1 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
              Demo
            </button>
          </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
