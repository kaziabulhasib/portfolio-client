import { Link } from "react-router-dom";

const SingleProject = ({ title, img, link, code }) => {
  return (
    <div>
      <div className='w-full   overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
        <img
          className='object-cover min-w-[350px] w-full h-56'
          src={img}
          alt='Project_img'
        />

        <div className='py-5 text-center'>
          <a
            className='block text-xl font-bold text-gray-800 dark:text-white'
            role='link'>
            {title}
          </a>
          <div className='flex justify-around my-6'>
            <div className='flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700'>
              <button className='px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
                Description
              </button>

              <Link
                to={link}
                target='_blank'
                className='px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
                Link
              </Link>

              <Link
                to={code}
                target='_blank'
                className='px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
                Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
