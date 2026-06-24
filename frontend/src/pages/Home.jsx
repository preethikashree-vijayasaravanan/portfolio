import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import Education from "../components/home/Education";
import Experience from "../components/home/Experience";
import Certificates from "../components/home/Certificates";
import Gallery from "../components/home/Gallery";
import Stats from "../components/home/Stats";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certificates />
      <Gallery />
      <Stats />
    </>
  );
}

export default Home;