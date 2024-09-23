// import About from "../components/About";
// import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NewBanner from "../components/NewBanner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <NewBanner></NewBanner>
      {/* <About></About> */}

      <h1 className='text-3xl text-center'>Experiment branch code</h1>

      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
