import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <div id='projects'>
      <SectionTitle title='Projects' text='Browse My'></SectionTitle>
      <div className='container  mx-auto px-48 flex justify-around mt-16 mb-24 '>
        <SingleProject
          title='TalkRoute'
          img='https://i.ibb.co/N3xgbt0/talkroute-snap2.png'
          link='https://talk-route.web.app/'
          code='https://github.com/kaziabulhasib/talkroute-client'></SingleProject>
        <SingleProject
          title='TalkRoute'
          img='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'></SingleProject>
        <SingleProject
          title='TalkRoute'
          img='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'></SingleProject>
      </div>
    </div>
  );
};

export default Projects;
