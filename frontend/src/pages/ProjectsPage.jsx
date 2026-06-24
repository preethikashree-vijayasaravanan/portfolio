import Projects from "../components/sections/Projects";
import Gallery from "../components/sections/Gallery";

import PageNavigation from "../components/ui/PageNavigation";

const ProjectsPage = () => {
  return (
    <main className="bg-[#08142e] text-white min-h-screen">

      <Projects />

      <Gallery />

      <PageNavigation
        previousLabel="About"
        previousLink="/about"
        nextLabel="Contact"
        nextLink="/contact"
      />

    </main>
  );
};

export default ProjectsPage;