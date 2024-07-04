import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProject";

const Projects = () => {
  // Sample project data
  const projectsData = [
    {
      title: "TalkRoute",
      img: "https://i.ibb.co/N3xgbt0/talkroute-snap2.png",
      link: "https://talk-route.web.app/",
      code: "https://github.com/kaziabulhasib/talkroute-client",
      overview: `
        
        <p><strong>Talkroute</strong> is a community forum website that enables users to post, read, and comment on a wide range of topics. We utilize upvote and downvote features to highlight the most relevant and popular content. Our platform includes a user dashboard for adding posts and tracking personal contributions. Additionally, we offer exclusive features available through a nominal monthly subscription, enhancing the user experience and providing premium functionalities.</p>
      `,
      technologyUsed: `
        
        <ul>
          <li>HTML</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>React Query</li>
          <li>Firebase Authentication</li>
          <li>Stripe</li>
        </ul>
      `,
      features: `
        
        <ul>
          <li>Easy registration & user profiles</li>
          <li>Powerful search with filters</li>
          <li>Up/downvote system for community curation</li>
        </ul>
      `,
    },
    {
      title: "Brusify",
      img: "https://i.ibb.co/hM3qSw6/Brusify-snap-2.png",
      link: "https://asg10-type02.web.app/",
      code: "https://github.com/kaziabulhasib/ph-assignment10-client",
      overview: `
        
        <p><strong>Brusify</strong> is an art & craft store website where users can explore paintings from talented artists worldwide. Registered users have the ability to add their own paintings or purchase artwork directly from the platform.</p>
      `,
      technologyUsed: `
        
        <ul>
          <li>HTML</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>React Router Dom</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>React Query</li>
          <li>Firebase Authentication</li>
        </ul>
      `,
      features: `
        
        <ul>
          <li>Easy Registration</li>
          <li>User Contribution</li>
          <li>Art & Craft item purchase opportunity</li>
        </ul>
      `,
    },
    {
      title: "PrimesquareProperty",
      img: "https://i.ibb.co/Mf43JTd/primesquare-snap.png",
      link: "https://assignment9-realestate.netlify.app/",
      code: "https://github.com/kaziabulhasib/ph-assignment9",
      overview: `
        
        <p><strong>PrimesquareProperty</strong> is a USA-based real estate website specializing in property sales. Users can browse and purchase from an extensive collection of properties, conveniently categorized into various subcategories to enhance user experience.</p>
      `,
      technologyUsed: `
        
        <ul>
          <li>HTML</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>React Router Dom</li>
          <li>React Helmet</li>
          <li>Firebase Authentication</li>
        </ul>
      `,
      features: `
        
        <ul>
          <li>Extensive Property Listings</li>
          <li>Expert Guidance and Resources</li>
          <li>Responsive Design and User-Friendly Interface</li>
        </ul>
      `,
    },
    // Add more projects as needed
  ];

  return (
    <div id='projects'>
      <SectionTitle title='Projects' text='Browse My'></SectionTitle>
      <div className='container grid lg:grid-cols-3 grid-cols-1 gap-6   mx-auto lg:px-48 px-4  lg:mt-16 mt-4 lg:mb-24 mb-6 '>
        {projectsData.map((project, index) => (
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
