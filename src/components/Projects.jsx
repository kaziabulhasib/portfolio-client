import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProject";
import projectData from "../assets/projectData.json";

const Projects = () => {
  return (
    <div id='projects'>
      <SectionTitle title='Projects' text='Browse My'></SectionTitle>
      <div className='container grid lg:grid-cols-3 grid-cols-1 gap-6 mx-auto lg:px-48 px-4 lg:mt-16 mt-4 lg:mb-24 mb-6'>
        {projectData.map((project, index) => (
          <SingleProject
            key={index}
            title={project.title}
            img={project.img}
            link={project.link}
            overview={project.overview}
            technologyUsed={project.technologyUsed}
            features={project.features}
            code={project.code}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
