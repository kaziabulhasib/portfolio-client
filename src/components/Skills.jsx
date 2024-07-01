import SectionTitle from "./SectionTitle";
import SkillsSubSec from "./SkillsSubSec";

const Skills = () => {
  return (
    <div id='skills' className='h-[500px]'>
      <SectionTitle title='Skills' text='Explore My'></SectionTitle>
      <div className='flex justify-center gap-16'>
        <div className='p-6 border rounded-2xl'>
          <h1 className='font-semibold text-2xl mb-6 text-center'>
            Web Development
          </h1>
          <div className='grid grid-cols-3 gap-8  gap-y-24 '>
            <SkillsSubSec skill='HTML' level='Experienced'></SkillsSubSec>
            <SkillsSubSec skill='CSS' level='Experienced'></SkillsSubSec>
            <SkillsSubSec skill='JAVASCRIPT' level='Experienced'></SkillsSubSec>
            <SkillsSubSec skill='REACT' level='INTERMEDIATE'></SkillsSubSec>
            <SkillsSubSec skill='TAILWIND' level='Experienced'></SkillsSubSec>
            <SkillsSubSec skill='EXPRESS' level='Basic'></SkillsSubSec>
          </div>
        </div>
        <div className='p-6 border rounded-2xl'>
          <h1 className='font-semibold text-2xl mb-6 text-center'>
            Web Development
          </h1>
          <div className='grid grid-cols-3 gap-8  gap-y-24 '>
            <SkillsSubSec skill='HTML' level='Experienced'></SkillsSubSec>
            <SkillsSubSec skill='CSS' level='Experienced'></SkillsSubSec>
            <SkillsSubSec skill='JAVASCRIPT' level='Experienced'></SkillsSubSec>
            <SkillsSubSec skill='REACT' level='INTERMEDIATE'></SkillsSubSec>
            <SkillsSubSec skill='TAILWIND' level='Experienced'></SkillsSubSec>
            <SkillsSubSec skill='EXPRESS' level='Basic'></SkillsSubSec>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
