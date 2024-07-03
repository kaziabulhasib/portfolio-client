import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className='bg-white dark:bg-gray-900 border-t shadow-md'>
        <div className='container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row'>
          <a>
            <img className='w-auto h-7' src='/images/profile-pic.png' alt='' />
          </a>

          <p className=' text-gray-600 dark:text-gray-300'>
            © Copyright{" "}
            <span className='mx-1 text-blue-700'>
              {new Date().getFullYear()}.{" "}
            </span>
            All Rights Reserved.
          </p>

          <div className='flex -mx-2'>
            <Link
              to='https://github.com/kaziabulhasib'
              className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              aria-label='Github'>
              {/* git hub */}
              <FaGithub className='text-2xl' />
            </Link>

            <Link
              to='https://www.linkedin.com/in/kazi-md-abul-hasib-0357b1241/'
              href='#'
              className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              aria-label='Linkedin'>
              <FaLinkedinIn className='text-2xl' />
            </Link>
            <Link
              to='https://www.facebook.com/profile.php?id=100075689694652'
              className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              aria-label='Facebook'>
              <FaFacebook className='text-2xl' />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
