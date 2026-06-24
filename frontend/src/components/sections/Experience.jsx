import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import SkeletonLoader from "../ui/SkeletonLoader";

import { client } from "../../sanity/client";

function Experience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="experience"] | order(_createdAt desc){
          _id,
          role,
          company,
          duration,
          description
        }`
      )
      .then((data) => {
        setExperience(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="experience" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">

          <SkeletonLoader className="h-10 w-64 mx-auto mb-4" />
          <SkeletonLoader className="h-5 w-96 mx-auto mb-16" />

          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-slate-800 rounded-xl p-6"
              >
                <SkeletonLoader className="h-8 w-60 mb-5" />
                <SkeletonLoader className="h-5 w-48 mb-4" />
                <SkeletonLoader className="h-5 w-32 mb-6" />
                <SkeletonLoader className="h-4 w-full mb-3" />
                <SkeletonLoader className="h-4 w-11/12 mb-3" />
                <SkeletonLoader className="h-4 w-10/12" />
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Experience"
            subtitle="My internship and practical experience."
          />
        </motion.div>

        <motion.div
          className="space-y-8 mt-12"
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
          {experience.map((item) => (
            <motion.div
              key={item._id}
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
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-pink-500 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white">
                  {item.role}
                </h3>

                <p className="text-pink-500 mt-2">
                  {item.company}
                </p>

                <p className="text-gray-400 mt-2">
                  {item.duration}
                </p>

                <p className="text-gray-300 mt-4 leading-7">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;