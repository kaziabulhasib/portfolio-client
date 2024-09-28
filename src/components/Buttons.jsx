import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className=' lg:max-w-[75%] w-full my-8'>
      <div className='flex border overflow-hidden bg-white  divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700 '>
        <Link
          to='https://drive.google.com/file/d/1dYHP8-FMcFXoxHuGanKiNn0KRT-u9mYC/view?usp=sharing'
          target='_blank'
          className='flex flex-1 basis-0 items-center px-2 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100'>
          <FaCloudDownloadAlt />
          <span>Resume</span>
        </Link>

        <Link
          to='https://github.com/kaziabulhasib'
          target='_blank'
          className='flex flex-1 basis-0 items-center px-2 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100'>
          <FaGithub />
          <span>Github</span>
        </Link>

        <Link
          to='https://www.linkedin.com/in/kazi-md-abul-hasib/'
          target='_blank'
          className='flex flex-1 basis-0 items-center px-2 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100'>
          <FaLinkedin />
          <span>Linkedin</span>
        </Link>
      </div>
    </div>
  );
};

export default Buttons;
