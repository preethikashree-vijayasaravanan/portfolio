import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-pink-500 transition-all duration-500 shadow-lg hover:shadow-pink-500/20"
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-pink-500 transition"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-pink-500 hover:bg-pink-500 transition"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;