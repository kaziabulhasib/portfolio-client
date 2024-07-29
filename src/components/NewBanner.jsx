import { Link } from "react-router-dom";
import profilePic from "../../public/images/profile-pic.png";
const NewBanner = () => {
  return (
    <header className=' '>
      <div className='flex  justify-center items-center  lg:my-6'>
        <div className='w-full h-64 lg:w-1/4 lg:h-96 flex items-center'>
          <div
            className='lg:w-56 lg:h-56 w-36 h-36 bg-cover rounded-full mx-auto '
            style={{
              backgroundImage: `url(${profilePic})`,
            }}></div>
        </div>
        <div className='flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2'>
          <div className='max-w-xl text-left space-y-4'>
            <h1 className='text-3xl font-semibold'>
              Hello I'm <span className='text-blue-600'>Kazi Abul Hasib</span>
            </h1>
            <h2 className='text-2xl font-normal text-blue-600'>
              Junior Web Developer
            </h2>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              mollitia commodi hic quo architecto, quasi qui aut voluptatibus
              repellendus animi, asperiores similique quas. Quis veritatis,
              ipsam quo, nisi est consectetur quas voluptatibus tempora
              necessitatibus illum provident cumque quibusdam saepe. Molestiae?{" "}
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              dolore explicabo deleniti, alias repellendus ad!
            </p>

            <div className='flex justify-start mt-6 space-y-3 lg:space-y-0 lg:flex-row'>
              <Link
                to='https://drive.google.com/file/d/1bAeIlhg9aJoDKcaQzi3T5xRpRGDI1zTa/view'
                target='_blank'
                className='block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700'>
                Download Cv
              </Link>
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

export default NewBanner;
