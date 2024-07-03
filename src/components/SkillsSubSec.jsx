import { BiBadgeCheck } from "react-icons/bi";
const SkillsSubSec = ({ skill, img }) => {
  return (
    <div className='flex gap-4 items-center'>
      <div>
        <img className='h-8 w-8' src={img} alt='' />
      </div>
      <div>
        <h1 className='font-bold'>{skill}</h1>
      </div>
    </div>
  );
};

export default SkillsSubSec;
