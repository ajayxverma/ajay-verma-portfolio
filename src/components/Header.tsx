'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { headerMenuList } from '../config/side-data.config';
import headerIcon from '../../public/assets/icons/av-logo.svg';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenu() {
    setMenuToggle(!menuToggle);
  }
  useEffect(() => {}, [theme]);

  const [showSubMenu, setShowSubMenu] = useState(-1);
  const submenuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    if (showSubMenu === index) {
      setShowSubMenu(-1);
      return;
    }
    setShowSubMenu(index);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
      setShowSubMenu(-1);
    }
  };

  const handleMouseLeave = () => {
    setShowSubMenu(-1);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleMouseLeave);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDownload = async () => {
    try {
      const fileUrl =
        'https://drive.google.com/uc?export=download&id=1B_Y8yuKqnmZ-qWGWFkRWkC3WY_P_0rvw';

      // Create a link element
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'Ajay-Verma.pdf'; // Specify the filename here

      // Programmatically click the link to trigger the download
      document.body.appendChild(link);
      link.click();

      // Cleanup: remove the link
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <header className='bg-transparent sticky top-2 z-10'>
      <nav
        className='mx-auto flex max-w-[97%] lg:max-w-[89%] items-center justify-between p-3 rounded-xl  lg:px-8 bg-blue-200/20 dark:bg-black/20   backdrop-blur-3xl brightness-100 text-opacity-100'
        aria-label='Global'
      >
        <div className='flex  lg:flex-1'>
          <a href='#' className='flex items-center'>
            <Image src={headerIcon} alt='Header Icon' height='30' width='30' className='mx-4' />
            <span className='hidden sm:block self-center text-lg font-semibold whitespace-nowrap'>
              Ajay Verma
            </span>
          </a>
        </div>
        <div className='hidden lg:flex lg:gap-x-12 items-center'>
          <ul className='flex-col md:flex-row flex md:space-x-4 mt-4 md:mt-0 md:text-sm md:font-medium'>
            {headerMenuList.map((menu, index) => {
              return (
                <li key={index} onClick={() => handleMouseEnter(index)}>
                  <a
                    href={menu.link}
                    className='text-gray dark:text-white-600 border-b rounded-lg border-gray-100 opacity-100 md:border-0 block px-3 py-2 md:hover:bg-blue-100/40 md:dark:hover:bg-gray-700/40 md:hover:text-blue-700'
                    aria-current='page'
                  >
                    {menu?.title}
                  </a>
                  {showSubMenu === index && (
                    //remove hidden to implement sub menu
                    //will be implemented later
                    <div className='hidden absolute top-full z-10 mt-3 w-screen max-w-md overflow-hidden  rounded-3xl bg-blue-200/20 dark:bg-black/20  backdrop-blur-3xl brightness-100 text-opacity-100 shadow-lg ring-1 ring-gray-900/5 '>
                      <div className='p-4'>
                        <div className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                          <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                            <svg
                              className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z'
                              />
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'
                              />
                            </svg>
                          </div>
                          <div className='flex-auto'>
                            <a href='#' className='block font-semibold text-gray-900'>
                              Analytics
                              <span className='absolute inset-0'></span>
                            </a>
                            <p className='mt-1 text-gray-600'>
                              Get a better understanding of your traffic
                            </p>
                          </div>
                        </div>
                        <div className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                          <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                            <svg
                              className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59'
                              />
                            </svg>
                          </div>
                          <div className='flex-auto'>
                            <a href='#' className='block font-semibold text-gray-900'>
                              Engagement
                              <span className='absolute inset-0'></span>
                            </a>
                            <p className='mt-1 text-gray-600'>Speak directly to your customers</p>
                          </div>
                        </div>
                        <div className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                          <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                            <svg
                              className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33'
                              />
                            </svg>
                          </div>
                          <div className='flex-auto'>
                            <a href='#' className='block font-semibold text-gray-900'>
                              Security
                              <span className='absolute inset-0'></span>
                            </a>
                            <p className='mt-1 text-gray-600'>
                              Your customers’ data will be safe and secure
                            </p>
                          </div>
                        </div>
                        <div className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                          <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                            <svg
                              className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z'
                              />
                            </svg>
                          </div>
                          <div className='flex-auto'>
                            <a href='#' className='block font-semibold text-gray-900'>
                              Integrations
                              <span className='absolute inset-0'></span>
                            </a>
                            <p className='mt-1 text-gray-600'>Connect with third-party tools</p>
                          </div>
                        </div>
                        <div className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                          <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                            <svg
                              className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
                              />
                            </svg>
                          </div>
                          <div className='flex-auto'>
                            <a href='#' className='block font-semibold text-gray-900'>
                              Automations
                              <span className='absolute inset-0'></span>
                            </a>
                            <p className='mt-1 text-gray-600'>
                              Build strategic funnels that will convert
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                        <a
                          href='#'
                          className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                        >
                          <svg
                            className='h-5 w-5 flex-none text-gray-400'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z'
                              clipRule='evenodd'
                            />
                          </svg>
                          Watch demo
                        </a>
                        <a
                          href='#'
                          className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                        >
                          <svg
                            className='h-5 w-5 flex-none text-gray-400'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z'
                              clipRule='evenodd'
                            />
                          </svg>
                          Contact sales
                        </a>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Theme Button */}
        <div className='flex items-center gap-2 lg:flex lg:flex-1 lg:justify-end'>
          <a
            onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
            className='text-gray cursor-pointer dark:text-white-600 border-[1px] dark:border-gray-900 rounded-lg opacity-100 md:border-0 block px-3 py-2 md:hover:bg-blue-100/40 md:hover:text-blue-700 bg-blue-200/30'
          >
            {theme === 'light' ? <MdDarkMode size={20} /> : <CiLight size={20} />}
          </a>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
                onClick={toggleMenu}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
          <a
            href='#'
            className='hidden lg:block text-gray dark:text-white-600 rounded-lg border-gray-100 opacity-100 md:border-0 px-3 py-2 md:hover:bg-blue-100/40 md:dark:hover:bg-gray-700/40 md:hover:text-blue-700'
            onClick={handleDownload}
          >
            Resume <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div role='dialog' aria-modal='true' className={menuToggle ? '' : 'hidden'}>
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className='fixed inset-0 z-10'></div>
        <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-blue-200/20 dark:bg-black/20   backdrop-blur-3xl brightness-100 text-opacity-100'>
          <div className='flex items-center justify-between'>
            <a href='#' className='flex items-center'>
              <Image src={headerIcon} alt='Header Icon' height='30' width='30' className='mx-4' />
              <span className='self-center text-lg font-semibold whitespace-nowrap'>
                Ajay Verma
              </span>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={toggleMenu}
            >
              <span className='sr-only'>Close menu</span>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {/* will be implemented later for SubMenu */}
                <div className='-mx-3 hidden'>
                  <button
                    type='button'
                    className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 dark:text-white dark:hover:bg-blue-300/30 text-gray-900 hover:bg-gray-50'
                    aria-controls='disclosure-1'
                    aria-expanded='false'
                  >
                    Product
                    {/* <!--
                  Expand/collapse icon, toggle classNamees based on menu open state.

                  Open: "rotate-180", Closed: ""
                --> */}
                    <svg
                      className='h-5 w-5 flex-none'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                  {/* will be implemented later when sub menu is required */}
                  <div className='mt-2 space-y-2 hidden' id='disclosure-1'>
                    <a
                      href='#'
                      className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      Analytics
                    </a>
                    <a
                      href='#'
                      className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      Engagement
                    </a>
                    <a
                      href='#'
                      className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      Security
                    </a>
                    <a
                      href='#'
                      className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      Integrations
                    </a>
                    <a
                      href='#'
                      className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      Automations
                    </a>
                    <a
                      href='#'
                      className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      Watch demo
                    </a>
                    <a
                      href='#'
                      className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      Contact sales
                    </a>
                  </div>
                </div>

                {headerMenuList.map((menu, index) => {
                  return (
                    <a
                      key={index}
                      href={menu.link}
                      onClick={toggleMenu}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-200/30 ease-in-out duration-100 dark:text-white dark:hover:bg-blue-300/30 hover:backdrop-blur-3xl'
                    >
                      {menu.title}
                    </a>
                  );
                })}
              </div>
              <div className='py-6'>
                <a
                  onClick={handleDownload}
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-200/30 ease-in-out duration-100 dark:text-white dark:hover:bg-blue-300/30 hover:backdrop-blur-3xl'
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
