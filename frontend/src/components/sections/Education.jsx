import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import SkeletonLoader from "../ui/SkeletonLoader";

import { client } from "../../sanity/client";

function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="education"] | order(year desc){
          _id,
          degree,
          institution,
          year,
          cgpa
        }`
      )
      .then((data) => {
        setEducation(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="education" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <SkeletonLoader className="h-10 w-64 mx-auto mb-4" />
          <SkeletonLoader className="h-5 w-80 mx-auto mb-16" />

          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-slate-800 p-6 rounded-xl"
              >
                <SkeletonLoader className="h-8 w-64 mb-5" />
                <SkeletonLoader className="h-5 w-48 mb-4" />
                <SkeletonLoader className="h-5 w-24 mb-4" />
                <SkeletonLoader className="h-5 w-36" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Education"
            subtitle="My academic background."
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
          {education.map((item) => (
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
                <h3 className="text-xl font-bold text-white">
                  {item.degree}
                </h3>

                <p className="text-pink-400 mt-2">
                  {item.institution}
                </p>

                <p className="text-gray-400 mt-2">
                  {item.year}
                </p>

                <p className="text-gray-300 mt-2">
                  Percentage (%)  : {item.cgpa}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Education;