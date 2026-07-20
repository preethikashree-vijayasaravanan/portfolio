import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Certificates from "./components/sections/Certificates";
import Gallery from "./components/sections/Gallery";
/*import Stats from "./components/sections/Stats";
import GitHubStats from "./components/sections/GitHubStats";*/

import Contact from "./components/sections/Contact";
import BackToTop from "./components/ui/BackToTop";
import CodingProfiles from "./components/sections/CodingProfiles";
function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <CodingProfiles />
      <Projects />
      <Education />
      <Experience />
      <Certificates />
      <Gallery />
      <Contact />
      <BackToTop />
    </>
  );
}

export default App;