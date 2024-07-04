import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div id='about'>
      <SectionTitle title='about me' text='Get to more about me'></SectionTitle>
      <div>
        {/* to do: simple animation */}
        <div className='w-1/2 mx-auto text-[18px] space-y-4 py-16 px-24 border rounded-xl mt-8 mb-16 '>
          <p>
            Hi, I’m
            <span className='text-blue-700 font-medium italic ml-2'>
              Kazi Abul Hasib
            </span>
            , a junior web developer specializing in front-end development with
            a growing proficiency in back-end technologies.
          </p>
          {/* education */}
          <p>
            <span className='text-blue-700 font-medium'>📚 Education:</span>
            <span className='italic font-medium ml-4'>
              Higher Secondary from WBBSE
            </span>
          </p>
          <p className='font-semibold text-xl'>🌟 Core Skills:</p>
          <p>
            <span className='text-blue-700 font-medium'>Front-End:</span>
            <span className='italic font-medium ml-4'>
              HTML, CSS, Tailwind, JavaScript, React, DOM,ReactQuery
            </span>
          </p>
          <p>
            <span className='text-blue-700 font-medium'>Back-End:</span>
            <span className='italic font-medium ml-4'>
              Express, MongoDB, JWT
            </span>
          </p>
          <p>
            With these skills, I create visually appealing and responsive
            websites. My experience extends to building full-stack applications,
            where I've successfully implemented authentication systems and
            integrated Firebase for its robust authentication capabilities.
            Additionally, I've utilized Stripe for payment processing and
            designed admin dashboards to manage application functionalities.
          </p>
          <p>
            <span className='text-blue-700 font-medium'>
              🚀 Currently Exploring:
            </span>
            <span className='italic font-medium ml-4'>
              Next.js, Redux, TypeScript.
            </span>
          </p>
          <p className='font-medium italic'>
            I'm enthusiastic about mastering these technologies and continually
            enhancing my coding abilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
