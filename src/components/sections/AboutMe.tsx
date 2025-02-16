import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { LiaFileDownloadSolid } from 'react-icons/lia';
import Image from 'next/image';
import SectionHeading from '../SectionHeading';
import profileImg from '../../../public/assets/images/profile-anime.svg';

const AboutMe = () => {
  const ProjectListHeading = {
    heading: 'About Me',
  };

  return (
    <div className='bg-white dark:bg-inherit md:mx-24' id='about'>
      <SectionHeading {...ProjectListHeading} />

      <div className='container flex flex-col items-center px-4 py-16 mx-auto xl:flex-row'>
        <div className='flex items-center justify-center xl:w-1/2'>
          <Image
            src={profileImg}
            alt='image'
            width={400}
            height={400}
            className='bg-primary-400 bg-opacity-10 backdrop-blur-3xl'
          />
        </div>

        <div className='flex flex-col font-body items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0'>
          <h2 className='text-2xl font-semibold tracking-tight text-primary-500 xl:text-3xl dark:text-white'>
            My Intro
          </h2>

          <p className='block max-w-2xl mt-4 text-gray-500 dark:text-gray-300'>
            Hello! My name is Ajay Verma and I enjoy creating things that live on the internet.
            <br />
            <span className='py-1'>
              I possess a strong command of a wide array of technologies, including{' '}
              <span className='font-semibold text-secondary-500'>
                {' '}
                JavaScript, Node.js, Express, Nest.js, React.js, Java, Spring, Spring Boot, Angular,
                Microservices, Mongodb, Posgresql, sequalize.
              </span>
            </span>
            With years of hands-on experience in this field, I&apos;ve honed my ability to create
            high-quality software solutions.
            <br />
            <br />
            My expertise extends to software design and development, particularly in crafting robust
            data structures and product-oriented designs. I&apos;m passionate about learning new
            technologies and frameworks, continually expanding my technical skill set. I tackle
            real-world challenges with analytical reasoning, breaking them down into logical
            components to develop effective, scalable solutions..{' '}
          </p>

          <div className='mt-6 sm:-mx-2'>
            <a
              href='#experience'
              className='inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-primary-800 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80'
            >
              <span className='mx-2'>Know More About Me</span>
              <IoIosArrowDown />
            </a>

            <a
              href='#'
              className='inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-primary-800 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80'
            >
              <span className='mx-2'>Download Resume</span>
              <LiaFileDownloadSolid size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
