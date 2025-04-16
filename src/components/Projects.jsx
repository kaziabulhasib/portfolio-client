import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProject";
import projectData from "../assets/projectData.json";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const containerRef = useRef(null);
  const autoScrollRef = useRef(null);

  const [autoScrolling, setAutoScrolling] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // If the user scrolls using the mouse, cancel auto-scroll.
      if (e.deltaY !== 0) {
        // Stop auto scrolling when user intervenes.
        if (autoScrollRef.current) {
          clearInterval(autoScrollRef.current);
          autoScrollRef.current = null;
          setAutoScrolling(false); // turn off auto scroll
        }
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // Prevent vertical scroll and enable horizontal scroll
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel);

    // Cleanup the event listener when the component unmounts
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);
  //
  // Setting up the auto scroll behavior
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !autoScrolling) return;

    // Start an interval to auto-scroll.
    autoScrollRef.current = setInterval(() => {
      // Adjust the scroll amount (2px here) and speed (16ms here ~60fps)
      container.scrollLeft += 2;
      // Optional: If you wish to loop the scroll, reset scrollLeft to 0 when it reaches the end.
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      }
    }, 16); // This value gives approximately 60 frames per second

    // Cleanup the interval when the component unmounts or autoScrolling changes.
    return () => clearInterval(autoScrollRef.current);
  }, [autoScrolling]);
  return (
    <div id='projects'>
      <SectionTitle title='Projects' text='Browse My'></SectionTitle>
      <div
        className='container projects-container lg:mt-16 mt-4 lg:mb-24 mb-6'
        ref={containerRef}>
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
