import { useRef, useEffect } from "react";
import projectData from "../assets/projectData.json";
import SingleProject from "./SingleProject";
import SectionTitle from "./SectionTitle"; // Make sure you have this component

const Projects = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const mouseDownHandler = (e) => {
    isDragging.current = true;
    containerRef.current.classList.add("active");
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const mouseLeaveHandler = () => {
    isDragging.current = false;
    containerRef.current.classList.remove("active");
  };

  const mouseUpHandler = () => {
    isDragging.current = false;
    containerRef.current.classList.remove("active");
  };

  const mouseMoveHandler = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch event handlers (for mobile)
  const touchStartHandler = (e) => {
    isDragging.current = true;
    containerRef.current.classList.add("active");
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const touchEndHandler = () => {
    isDragging.current = false;
    containerRef.current.classList.remove("active");
  };

  const touchMoveHandler = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Enable horizontal scrolling with the mouse wheel
  useEffect(() => {
    const container = containerRef.current;
    const wheelHandler = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };
    container.addEventListener("wheel", wheelHandler, { passive: false });
    return () => {
      container.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <section className='py-12'>
      <SectionTitle title='Projets ' subtitle='explore my recent' />
      <div className='w-full flex justify-center'>
        <div
          ref={containerRef}
          onMouseDown={mouseDownHandler}
          onMouseLeave={mouseLeaveHandler}
          onMouseUp={mouseUpHandler}
          onMouseMove={mouseMoveHandler}
          onTouchStart={touchStartHandler}
          onTouchEnd={touchEndHandler}
          onTouchMove={touchMoveHandler}
          className='projects-container'>
          {projectData.map((project, index) => (
            <SingleProject key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
