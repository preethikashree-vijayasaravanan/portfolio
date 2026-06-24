import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import SkeletonLoader from "../ui/SkeletonLoader";

import { client } from "../../sanity/client";
import { urlFor } from "../../sanity/imageUrl";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type=="project"] | order(_createdAt desc){
      title,
      description,
      techStack,
      github,
      liveDemo,
      image
    }`;

    client.fetch(query).then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section
        id="projects"
        className="relative py-24 bg-slate-950 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-6">

          <SkeletonLoader className="h-10 w-60 mx-auto mb-4" />

          <SkeletonLoader className="h-5 w-96 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800"
              >
                <SkeletonLoader className="h-56 w-full rounded-none" />

                <div className="p-6">

                  <SkeletonLoader className="h-8 w-48 mb-5" />

                  <SkeletonLoader className="h-4 w-full mb-3" />
                  <SkeletonLoader className="h-4 w-11/12 mb-3" />
                  <SkeletonLoader className="h-4 w-10/12 mb-6" />

                  <div className="flex gap-2 mb-6">

                    <SkeletonLoader className="h-8 w-20 rounded-full" />
                    <SkeletonLoader className="h-8 w-20 rounded-full" />
                    <SkeletonLoader className="h-8 w-20 rounded-full" />

                  </div>

                  <div className="flex justify-between">

                    <SkeletonLoader className="h-10 w-28 rounded-xl" />

                    <SkeletonLoader className="h-10 w-28 rounded-xl" />

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Projects"
          subtitle="Some of the projects I've built using modern technologies."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <ProjectCard
                index={index}
                project={{
                  ...project,
                  image: project.image
                    ? urlFor(project.image).width(800).url()
                    : "https://via.placeholder.com/800x500",
                  tech: project.techStack || [],
                  demo: project.liveDemo,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;