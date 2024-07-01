import SectionTitle from "./SectionTitle";
import { SlBadge } from "react-icons/sl";
import { PiGraduationCap } from "react-icons/pi";
const About = () => {
  return (
    <div id='about'>
      <SectionTitle title='about me' text='Get to more about me'></SectionTitle>
      <h1 className='w-1/2 mx-auto text-center mt-8'>
        Aspiring junior web developer specializing in front-end technologies
        with a robust foundation in HTML, CSS, JavaScript, React, and Tailwind
        CSS. Also skilled in backend development utilizing Node.js, Express, and
        MongoDB.
      </h1>
      <div className='flex justify-center gap-36 mt-12 mb-24 '>
        {/* Experience */}
        <div className='flex flex-col items-center border border-gray-500 px-32 py-6 rounded-3xl space-y-3'>
          <SlBadge className='text-7xl font-extrabold ' />
          <h1 className='font-bold text-4xl'>Experience</h1>
          <h2>Fresher</h2>
          <h1 className='text-xl font-medium'>Front End Development</h1>
        </div>
        {/* Education */}
        <div className='flex flex-col items-center border border-gray-500  px-32 py-6 rounded-3xl space-y-3'>
          <PiGraduationCap className='text-7xl font-extrabold ' />
          <h1 className='font-bold text-4xl'>Education</h1>
          <h2>Bsc Mathematics</h2>
          <h1 className='text-xl font-medium'>NSOU</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
