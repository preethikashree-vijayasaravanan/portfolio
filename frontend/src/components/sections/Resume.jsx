import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaFilePdf,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-24 bg-[#08142e] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            Resume
          </h2>

          <div className="w-32 h-1 bg-pink-500 mx-auto mt-4 mb-16"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Resume Preview */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <FaFilePdf className="text-pink-500 text-5xl" />

              <div>
                <h3 className="text-2xl font-bold">
                  Resume Preview
                </h3>

                <p className="text-gray-400">
                  Latest Professional Resume
                </p>
              </div>
            </div>

            <div className="bg-[#0f1d3b] rounded-2xl p-10 flex flex-col items-center">
              <FaFilePdf className="text-8xl text-red-500 mb-4" />

              <h4 className="text-xl font-semibold">
                Preethika_Shree_Resume.pdf
              </h4>

              <p className="text-gray-400 mt-2">
                MERN Stack Developer
              </p>

              <a
                href="/resume.pdf"
                download
                className="mt-8 bg-pink-500 px-6 py-3 rounded-lg flex items-center gap-3 hover:scale-105 transition"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Resume Info */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                ATS Friendly Resume
              </h3>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-2xl font-bold">
                  90%
                </div>

                <p className="text-gray-300">
                  Optimized for Applicant Tracking Systems
                  with clean structure and keyword-rich content.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaBriefcase className="text-pink-500 text-3xl" />
                <h3 className="text-2xl font-bold">
                  Experience Summary
                </h3>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li>✓ MERN Stack Development</li>
                <li>✓ React + Tailwind CSS</li>
                <li>✓ REST API Development</li>
                <li>✓ MongoDB Database Design</li>
                <li>✓ Responsive Web Applications</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-pink-500 text-3xl" />
                <h3 className="text-2xl font-bold">
                  Technical Skills
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Git",
                  "Tailwind CSS",
                  "Java",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-pink-500/20 border border-pink-500 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;