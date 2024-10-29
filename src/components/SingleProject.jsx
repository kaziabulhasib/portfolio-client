import { useState } from "react";
import { Link } from "react-router-dom";

const SingleProject = ({
  title,
  img,
  link,
  code,
  overview,
  technologyUsed,
  features,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className='w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
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
              <button
                onClick={openModal}
                className='px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
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

      {isModalOpen && (
        <div className='fixed inset-0 z-10 flex items-center justify-center overflow-y-auto dark:text-gray-700 '>
          <div className='bg-white rounded-lg shadow-lg max-w-md mx-auto p-6 overflow-y-auto'>
            <h2 className='text-xl font-bold mb-4'>Project Overview</h2>
            <div dangerouslySetInnerHTML={{ __html: overview }} />

            <h2 className='text-xl font-bold mt-6 mb-4'>Technology Used</h2>
            <div dangerouslySetInnerHTML={{ __html: technologyUsed }} />
            {/* <ul>
              {technologyUsed.map((tech, index) => {
                return <li key={index}>{tech}</li>;
              })}
            </ul> */}

            <h2 className='text-xl font-bold mt-6 mb-4'>Features</h2>
            <div dangerouslySetInnerHTML={{ __html: features }} />

            <div className='mt-6 text-right'>
              <button
                onClick={closeModal}
                className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProject;
