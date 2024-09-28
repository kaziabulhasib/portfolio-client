import profilePic from "../../public/images/profile-pic.png";
import Buttons from "./Buttons";

const NewBanner = () => {
  return (
    <header className=' '>
      <div className='flex lg:flex-row flex-col  justify-center items-center  lg:my-6 my-4'>
        <div className='w-full h-64 lg:w-1/4 lg:h-96 flex items-center'>
          <div
            className='lg:w-56 lg:h-56 w-24 h-24 bg-cover rounded-full mx-auto  '
            style={{
              backgroundImage: `url(${profilePic})`,
            }}></div>
        </div>
        <div className='flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2 '>
          <div className='max-w-xl text-left space-y-4'>
            <h1 className='text-3xl font-semibold'>
              Hello I'm <br />
              <span className='text-blue-600 dark:text-blue-400'>
                Kazi Abul Hasib
              </span>
            </h1>
            <h2 className='text-2xl font-normal text-blue-600 dark:text-blue-400'>
              Junior Web Developer
            </h2>

            <p>
              Hi, I’m Hasib, a junior web developer specializing in front-end
              development with a growing proficiency in back-end technologies.
              My core skills include React, Tailwind and JavaScript.In back-end
              development, I have experience with Express, MongoDB and Node.{" "}
              <br />
              <br />
              <span className='text-blue-600 dark:text-blue-400 text-sm'>
                {" "}
                For more details Check my Resume or Github or Linkedin.
              </span>
            </p>

            <Buttons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewBanner;
