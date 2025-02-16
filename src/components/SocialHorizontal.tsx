import React from 'react';
import { SocialLinkType } from '@/types/components.types';

const SocialHorizontal = ({
  socialLinks,
  iconSize,
}: {
  socialLinks: SocialLinkType[];
  iconSize: number;
}) => {
  return (
    <div className='flex items-center justify-center gap-4 lg:justify-start'>
      <div className='flex gap-4'>
        {socialLinks.map((value, index) => {
          return (
            <a
              key={index}
              href={value.link}
              target='_blank'
              className='text-gray-400 transition duration-100 hover:text-primary-500 active:text-gray-600'
            >
              {<value.icon size={iconSize} fill='currentColor' />}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialHorizontal;
