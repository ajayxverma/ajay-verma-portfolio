'use client';
import { contactformSchema } from '@/utils/validation/form.validaton';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const validationResult = contactformSchema.safeParse(formData);

    if (!validationResult.success) {
      const validationErrors: { [key: string]: string } = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path && err.path[0]) {
          validationErrors[err.path[0]] = err.message;
        }
      });
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch('https://ajay-verma-portfolio-service.vercel.app/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('✅ Email sent successfully! 💗', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });

        // Reset the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast('❌ Error sending email. Please try again.', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.error('An unexpected error occurred', error);
      toast.error('❌ An unexpected error occurred. Please try again later.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } finally {
      setIsLoading(false);
    }
  };

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
                <form onSubmit={handleSubmit} id='signup-form'>
                  <ContactInputBox
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <ContactInputBox
                    type='text'
                    name='email'
                    placeholder='Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  <ContactTextArea
                    row={6}
                    placeholder='Your Message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    type={''}
                  />
                  <div>
                    <button
                      type='submit'
                      disabled={isLoading}
                      className='w-full rounded border border-primary-300 dark:border-gray-900 bg-primary-800 p-3 text-white transition hover:bg-opacity-90'
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string; // Optional error prop
};

const ContactInputBox = ({ type, placeholder, name, value, onChange, error }: InputProps) => {
  return (
    <div className='mb-6'>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`w-full rounded border ${
          error ? 'border-red-500' : 'border-stroke'
        } px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-gray-900 dark:bg-darkBg-900 dark:text-dark-6 backdrop-filter backdrop-blur-2xl bg-opacity-5 dark:backdrop-blur-2xl dark:bg-opacity-30`}
        value={value}
        onChange={onChange}
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
};

const ContactTextArea = ({
  placeholder,
  name,
  value,
  onChange,
  error,
  row,
}: InputProps & { row: number }) => {
  return (
    <div className='mb-6'>
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className={`w-full resize-none rounded border ${
          error ? 'border-red-500' : 'border-stroke'
        } px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-gray-900 dark:bg-darkBg-900 dark:text-dark-6 backdrop-filter backdrop-blur-2xl bg-opacity-5 dark:backdrop-blur-2xl dark:bg-opacity-30`}
        value={value}
        onChange={onChange}
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
};

export default ContactForm;
