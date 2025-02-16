'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ProjectType } from '@/types/components.types';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';

const CarouselImage: React.FC<ProjectType> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(goToNext, 5000);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const setImageOnClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className='sm:w-4/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl'>
      <div className='hs-carousel relative overflow-hidden w-full max-h-36 min-h-[350px] rounded-lg'>
        <div className='hs-carousel-body absolute top-0 bottom-0 left-0 flex flex-nowrap transition-transform duration-700 opacity-0'>
          <div className='hs-carousel-slide transition duration-700 ease-in-out'>
            <div className='flex justify-center h-full bg-gray-600 p-6 transition duration-700 ease-in-out'>
              <span className='self-center text-4xl  transition-opacity duration-700 ease-in-out opacity-0 hover:opacity-100 bg-green-300 overflow-hidden'>
                <Image
                  src={images[currentImageIndex].src}
                  alt='abc'
                  fill={true}
                  style={{ objectFit: 'fill' }}
                  className='transition-opacity duration-700 ease-in-out'
                />
              </span>
            </div>
          </div>
        </div>
        <div className='active flex justify-center absolute bottom-3 left-0 right-0 space-x-2'>
          {images.map((val, index) => {
            return (
              <span
                key={index}
                onClick={() => setImageOnClick(index)}
                className={`active:bg-blue-700 active:border-blue-700 h-3 w-3 border border-gray-400 rounded-full cursor-pointer ${
                  index == currentImageIndex ? 'bg-blue-700' : ''
                } `}
              ></span>
            );
          })}
        </div>
        <IoMdArrowDropleftCircle
          className='absolute z-[1] top-1/2 left-0 transform size-10 -translate-y-1/2 bg-gray-300 rounded-full opacity-75 hover:opacity-100'
          onClick={goToPrevious}
        />
        <Image
          src={images[currentImageIndex].src}
          layout='fill'
          objectFit='cover'
          alt='carousel item'
          className='transition-opacity duration-700 ease-in-out'
        />
        <IoMdArrowDroprightCircle
          className='absolute  top-1/2 right-0 transform size-10 -translate-y-1/2 bg-gray-300  rounded-full opacity-75 hover:opacity-100'
          onClick={goToNext}
        />
      </div>
    </div>
  );
};

export default CarouselImage;
