import SectionTitle from "./SectionTitle";
import SkillsSubSec from "./SkillsSubSec";

const skillsData = [
  {
    skill: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    skill: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    skill: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    skill: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    skill: "Tailwind",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    skill: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    skill: "Express",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  // to do: add icons
  {
    skill: "Firebase",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  },
  // {
  //   skill: "ReactQuery",
  //   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  // },
  // {
  //   skill: "JWT",
  //   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg",
  // },
];

const Skills = () => {
  return (
    <div id='skills'>
      <SectionTitle title='Skills' text='Explore My'></SectionTitle>
      <div className='grid lg:grid-cols-3 grid-cols-2  lg:gap-16 gap-4 px-6 lg:w-2/3 w-full mx-auto     lg:my-24 my-6'>
        {skillsData.map((skill, index) => (
          <div key={index}>
            <SkillsSubSec skill={skill.skill} img={skill.img}></SkillsSubSec>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
