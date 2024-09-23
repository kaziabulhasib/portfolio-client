import { BiBadgeCheck } from "react-icons/bi";
const SkillsSubSec = ({ skill, img }) => {
  return (
    <div className='flex gap-4 items-center'>
      <div>
        <img className='lg:h-8 h-6 lg:w-8 w-6' src={img} alt='' />
      </div>
      <div>
        <h1 className='font-bold dark:text-white'>{skill}</h1>
      </div>
    </div>
  );
};

export default SkillsSubSec;
