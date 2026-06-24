import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import GitHubStats from "../components/sections/GitHubStats";
import Certificates from "../components/sections/Certificates";
import Timeline from "../components/sections/Timeline";

import PageNavigation from "../components/ui/PageNavigation";

const AboutPage = () => {
  return (
    <main className="bg-[#08142e] text-white min-h-screen">

      <About />

      <Education />

      <Experience />

      <GitHubStats />

      <Certificates />

      <Timeline />

      <PageNavigation
        previousLabel="Home"
        previousLink="/"
        nextLabel="Projects"
        nextLink="/projects"
      />

    </main>
  );
};

export default AboutPage;