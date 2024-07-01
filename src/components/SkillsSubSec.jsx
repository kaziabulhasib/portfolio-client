import { BiBadgeCheck } from "react-icons/bi";
const SkillsSubSec = ({ skill, level }) => {
  return (
    <div className='flex gap-6'>
      <div>
        <h1 className='text-4xl font-bold '>
          <BiBadgeCheck />
        </h1>
      </div>
      <div>
        <h1 className='font-bold'>{skill}</h1>
        <p>{level}</p>
      </div>
    </div>
  );
};

export default SkillsSubSec;
