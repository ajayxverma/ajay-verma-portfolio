import { socialLinks } from '../../config/side-data.config';
import Image from 'next/image';
import headerIcon from '../../../public/assets/icons/av-logo.svg';
import SocialHorizontal from '../SocialHorizontal';
import TwoButton from '../buttons/TwoButton';
import '../../css/bg-animation-key-frams.css';

export default function HeroSection() {
  return (
    <div className='bg-white dark:bg-inherit pb-6 sm:pb-8 lg:pb-12' id='hero'>
      <div className='opacity-30 z-[-10]'>
        <ul className='background'>
          {/* Inrease the LI tag to increase the no of background boxes */}
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8 backdrop-blur-sm bg-opacity-10'>
        <section className='flex flex-col items-center'>
          <div className='flex max-w-4xl flex-col items-center pb-12 pt-8 text-center lg:pb-16 lg:pt-14'>
            <Image src={headerIcon} alt='Header Icon' height='30' width='30' className='mx-4' />
            <p className='mb-4 mt-2 font-semibold text-secondary-800 md:mb-6 md:text-lg xl:text-xl'>
              Hi👋 there, My Name is
            </p>
            <h1 className='mb-2 text-4xl font-bold dark:text-lightBg-900 text-black sm:text-5xl md:mb-4 md:text-6xl'>
              Ajay Verma.
            </h1>
            <h1 className='mb-8 text-4xl font-bold dark:text-lightBg-900 text-black sm:text-5xl md:mb-4 md:text-6xl'>
              I build things for the web.
            </h1>
            <p className='mb-8 text-base font-normal dark:text-lightBg-900 text-black md:mb-8'>
              As a software engineer, I specialize in creating outstanding digital experiences with
              a strong emphasis on accessibility and user-centered design principles. My primary
              focus revolves around developing products that adhere to accessibility standards such
              as WCAG, ensuring that all users can engage with them seamlessly. I prioritize
              collaboration, user feedback, and continuous learning to deliver technically sound and
              user-friendly solutions that meet evolving industry trends.
            </p>
            <TwoButton
              link1='#contact'
              link2='#about'
              title1='Get In Touch'
              title2='View Portfolio'
            />
          </div>
          <SocialHorizontal socialLinks={socialLinks} iconSize={30} />
        </section>
      </div>
    </div>
  );
}
