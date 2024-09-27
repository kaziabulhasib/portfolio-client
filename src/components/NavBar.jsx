import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeControler from "./ThemeControler";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className='fixed z-10 top-0 right-0 w-full opacity-90 dark:opacity-75 bg-white shadow dark:bg-gray-800 '>
        <div className='container px-8 py-4 mx-auto md:flex md:justify-between md:items-center'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='text-3xl font-semibold dark:text-white'>
              Hasib
            </Link>

            {/* Mobile menu button */}
            <div className='flex lg:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                aria-label='toggle menu'>
                {!isOpen ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 8h16M4 16h16'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
            <div className='flex flex-col md:flex-row md:mx-6 text-xl'>
              <a
                className='my-2 text-gray-700 transition-colors duration-300 transform dark:text-white hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
                href='#skills'>
                Skills
              </a>
              <a
                className='my-2 text-gray-700 transition-colors duration-300 transform dark:text-white hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
                href='#projects'>
                Projects
              </a>
              <a
                className='my-2 text-gray-700 transition-colors duration-300 transform dark:text-white hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
                href='#contact'>
                Contact
              </a>
            </div>

            {/* theme controler  */}
            <ThemeControler />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
