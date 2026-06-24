import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";
import SkeletonLoader from "../ui/SkeletonLoader";

import { client } from "../../sanity/client";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="skill"]{
          name,
          category,
          percentage
        }`
      )
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <SkeletonLoader className="h-10 w-60 mx-auto mb-4" />
          <SkeletonLoader className="h-5 w-96 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-slate-800 rounded-2xl p-8"
              >
                <SkeletonLoader className="h-8 w-40 mb-8" />
                <SkeletonLoader className="h-5 w-full mb-4" />
                <SkeletonLoader className="h-5 w-11/12 mb-4" />
                <SkeletonLoader className="h-5 w-10/12 mb-4" />
                <SkeletonLoader className="h-5 w-9/12" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const frontendSkills = skills
    .filter((skill) => skill.category === "Frontend")
    .map((skill) => skill.name);

  const backendSkills = skills
    .filter((skill) => skill.category === "Backend")
    .map((skill) => skill.name);

  const databaseSkills = skills
    .filter((skill) => skill.category === "Database")
    .map((skill) => skill.name);

  const toolSkills = skills
    .filter((skill) => skill.category === "Tools")
    .map((skill) => skill.name);

  const cards = [
    { title: "Frontend", skills: frontendSkills },
    { title: "Backend", skills: backendSkills },
    { title: "Database", skills: databaseSkills },
    { title: "Tools", skills: toolSkills },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Skills"
            subtitle="Technologies and tools I use to build applications."
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-12"
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
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
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
              transition={{ duration: 0.5 }}
            >
              <SkillCard
                title={card.title}
                skills={card.skills}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;