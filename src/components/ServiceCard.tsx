import { TechStackType } from '@/types/components.types';

const ServiceCard = ({ techStackData }: { techStackData: TechStackType[] }) => {
  return (
    <div className='mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3'>
      {techStackData.map((techStack, index) => (
        <div
          key={index}
          className='group relative bg-white dark:bg-black transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'
        >
          <div className='flex flex-col h-full justify-between space-y-8 py-12 p-8'>
            <div className='space-y-6'>
              <techStack.icon size={50} className='group-hover:fill-primary-800' />
              <div className='space-y-2'>
                <h5 className='text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary-800'>
                  {techStack.title}
                </h5>
                <p className='text-sm text-gray-600 dark:text-gray-300'>{techStack.description}</p>
                {techStack.language && techStack.frameworks && (
                  <div className='flex justify-between'>
                    <ul className='dark:text-gray-300 list-disc ml-4'>
                      <span className='ml-[-1rem] my-2 font-semibold group-hover:text-primary-800'>
                        Frameworks
                      </span>
                      {techStack.frameworks.map((framework, index) => {
                        return <li key={index}>{framework}</li>;
                      })}
                    </ul>
                    <ul className='dark:text-gray-300 list-disc ml-4'>
                      <span className='ml-[-1rem] my-2 font-semibold group-hover:text-primary-800'>
                        Language
                      </span>
                      {techStack.language.map((language, index) => {
                        return <li key={index}>{language}</li>;
                      })}
                    </ul>
                  </div>
                )}
                {techStack.points && (
                  <div className='flex justify-between'>
                    <ul className='dark:text-gray-300 list-disc ml-4'>
                      {techStack.points.map((point, index) => {
                        return <li key={index}>{point}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <a
              href={techStack.readMoreLink}
              className='flex items-center justify-between group-hover:group-hover:text-primary-800'
            >
              <span className='text-sm'>Read more</span>
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
      ))}
    </div>
  );
};

export default ServiceCard;
