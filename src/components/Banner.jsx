import profilePic from "../../public/images/profile-pic.png";
const Banner = () => {
  return (
    <header className='bg-white dark:bg-gray-900'>
      <div className='lg:flex  lg:justify-center lg:items-center lg:px-24 px-4 lg:my-24 my-8 '>
        <div className='w-full h-64 lg:w-1/4 lg:h-96'>
          <div
            className='lg:w-96 lg:h-96 w-64 h-64 bg-cover rounded-full mx-auto'
            style={{
              backgroundImage: `url(${profilePic})`,
            }}></div>
        </div>
        <div className='flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2'>
          <div className='max-w-xl text-center space-y-4'>
            <p className=' mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base font-medium  '>
              Hello, <span className='text-blue-600'>I'm</span>
            </p>
            <h2 className='text-4xl font-bold text-gray-800 dark:text-white lg:text-3xl'>
              Kazi Abul Hasib
            </h2>

            <h4 className='text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl'>
              Web Developer
            </h4>

            <div className='flex justify-center mt-6 space-y-3 lg:space-y-0 lg:flex-row'>
              <a
                href='https://www.canva.com/design/DAF4he9S_rk/fhLe9Qkkc5E-GQ1lXGTRPw/view?utm_content=DAF4he9S_rk&utm_campaign=designshare&utm_medium=link&utm_source=editor'
                target='_blank'
                className='block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700'>
                Check Cv
              </a>
              <a
                href='https://github.com/kaziabulhasib'
                target='_blank'
                className='block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300'>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
