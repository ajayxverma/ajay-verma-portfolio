import React from 'react';

const TwoButton = ({
  link1,
  link2,
  title1,
  title2,
}: {
  link1: string;
  link2: string;
  title1: string;
  title2: string;
}) => {
  return (
    <div className='flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center'>
      <a
        href={link1}
        className='inline-block rounded-lg bg-primary-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-primary-500 focus-visible:ring active:bg-indigo-700 md:text-base'
      >
        {title1}
      </a>
      <a
        href={link2}
        className='inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'
      >
        {title2}
      </a>
    </div>
  );
};

export default TwoButton;