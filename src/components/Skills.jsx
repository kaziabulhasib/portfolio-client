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
    // img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    img: "https://i.ibb.co/cFCYZ7W/express-dark-logo.jpg",
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
      <div className='container grid lg:grid-cols-3 grid-cols-2  justify-items-stretch  lg:gap-16 gap-6 my-6'>
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
