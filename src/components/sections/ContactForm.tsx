import React from 'react';

const ContactForm = () => {
  return (
    <section className='bg-white dark:bg-inherit' id='contact'>
      <div className='container px-6 py-12 mx-auto'>
        <div className='flex flex-col justify-center items-center'>
          <div className='lg:w-8/10 lg:mx-6'>
            <div className='mb-16 md:mb-32 space-y-2  text-center'>
              <h2 className='text-3xl font-bold text-gray-800 md:text-5xl md:my-6 dark:text-white'>
                Contact Me
              </h2>
              <p className='text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
                my inbox is always open. Whether you have a question or just want to say hi, I’ll
                try my best to get back to you!
              </p>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2 xl:w-5/12 '>
            <div className='relative rounded-lg bg-white p-8 border-primary-300 shadow-lg dark:bg-darkBg-900 sm:p-12 border-[1px] dark:border-gray-900 backdrop-filter backdrop-blur-2xl bg-opacity-5 hover:shadow-2xl dark:backdrop-blur-2xl dark:bg-opacity-30'>
              <div>
                <form>
                  <ContactInputBox type='text' name='name' placeholder='Your Name' />
                  <ContactInputBox type='text' name='email' placeholder='Your Email' />
                  <ContactTextArea
                    row='6'
                    placeholder='Your Message'
                    name='details'
                    defaultValue=''
                  />
                  <div>
                    <button
                      type='submit'
                      className='w-full rounded border border-primary-300 dark:border-gray-900 bg-primary-800 p-3 text-white transition hover:bg-opacity-90'
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const ContactTextArea = ({ row, placeholder, name, defaultValue }: any) => {
  return (
    <>
      <div className='mb-6'>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className='bg-slate-50 w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-gray-900 dark:bg-darkBg-900 dark:text-dark-6 backdrop-filter backdrop-blur-2xl bg-opacity-5 dark:backdrop-blur-2xl dark:bg-opacity-30'
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }: any) => {
  return (
    <>
      <div className='mb-6'>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className='bg-slate-50 w-full rounded border border-stroke px-[14px] py-3 outline-none focus:border-primary dark:border-gray-900 dark:bg-darkBg-900 dark:text-dark-6 backdrop-filter backdrop-blur-2xl bg-opacity-5 dark:backdrop-blur-2xl dark:bg-opacity-30'
        />
      </div>
    </>
  );
};

export default ContactForm;
