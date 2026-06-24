import Contact from "../components/sections/Contact";

import PageNavigation from "../components/ui/PageNavigation";

const ContactPage = () => {
  return (
    <main className="bg-[#08142e] text-white min-h-screen">

      <Contact />

      <PageNavigation
        previousLabel="Projects"
        previousLink="/projects"
      />

    </main>
  );
};

export default ContactPage;