import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
